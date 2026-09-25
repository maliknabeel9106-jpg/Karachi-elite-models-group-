import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Upload,
  CheckCircle,
  Trash2,
  FolderOpen,
  Sparkles,
  RefreshCw,
  Eye,
  ShieldCheck,
  Info
} from 'lucide-react';
import {
  MODEL_IMAGE_MAPPINGS,
  getStoredUserImage,
  saveRealImage,
  removeStoredUserImage,
  fetchUploadedRealImages,
  RealImageItem,
  resolveRealModelImage
} from '../utils/imageManager';

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedModelId?: string;
}

export const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  isOpen,
  onClose,
  preselectedModelId
}) => {
  const [selectedModelId, setSelectedModelId] = useState<string>(preselectedModelId || 'zoya-khan');
  const [serverImages, setServerImages] = useState<RealImageItem[]>([]);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync selectedModelId if preselectedModelId changes
  useEffect(() => {
    if (preselectedModelId) {
      setSelectedModelId(preselectedModelId);
    }
  }, [preselectedModelId]);

  // Load server images whenever modal is opened
  const loadImages = async () => {
    setIsScanning(true);
    try {
      const list = await fetchUploadedRealImages(true);
      setServerImages(list);
    } finally {
      setIsScanning(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadImages();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentMapping = MODEL_IMAGE_MAPPINGS[selectedModelId] || MODEL_IMAGE_MAPPINGS['zoya-khan'];
  const storedImage = getStoredUserImage(selectedModelId);
  const resolvedServerImage = resolveRealModelImage(selectedModelId, serverImages);
  const activeImage = storedImage || resolvedServerImage;

  const handleFileChange = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (.jpg, .png, .webp, .avif)');
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      if (typeof reader.result === 'string') {
        const safeExt = file.name.split('.').pop() || 'jpg';
        const targetFilename = `${selectedModelId}.${safeExt}`;
        await saveRealImage(selectedModelId, targetFilename, reader.result);
        setSuccessMessage(`Real photo successfully placed for ${currentMapping.name}! Saved to /public/images/models/${targetFilename}`);
        await loadImages();
        setTimeout(() => setSuccessMessage(null), 4000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleRemove = () => {
    removeStoredUserImage(selectedModelId);
    setSuccessMessage(`Custom photo assignment removed for ${currentMapping.name}.`);
    loadImages();
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleAssignExisting = async (imageUrl: string) => {
    try {
      // Fetch the image as blob, convert to base64 and save for the selected model
      const resp = await fetch(imageUrl);
      const blob = await resp.blob();
      const reader = new FileReader();
      reader.onload = async () => {
        if (typeof reader.result === 'string') {
          const filename = imageUrl.split('/').pop() || `${selectedModelId}.jpg`;
          await saveRealImage(selectedModelId, filename, reader.result);
          setSuccessMessage(`Assigned ${filename} to ${currentMapping.name}!`);
          await loadImages();
          setTimeout(() => setSuccessMessage(null), 3000);
        }
      };
      reader.readAsDataURL(blob);
    } catch (err) {
      console.error('Failed to assign existing photo', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-4 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-5 sm:p-7 shadow-[var(--shadow-elevated)] max-h-[92vh] overflow-y-auto transition-colors duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 rounded-full p-2 text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-left pr-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-600 dark:text-rose-400 border border-rose-500/20">
            <Sparkles className="h-3.5 w-3.5" />
            <span>100% Real Photo Manager</span>
          </div>
          <h3 className="mt-2.5 font-cinzel text-lg sm:text-2xl font-bold uppercase text-[var(--text-primary)]">
            Real Companion Photos
          </h3>
          <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
            Only real photos are displayed across cards and modals. Upload companion portraits directly from your browser, or save them in <code className="text-rose-600 dark:text-rose-400 font-mono bg-[var(--bg-surface)] px-1.5 py-0.5 rounded border border-[var(--border-subtle)]">/public/images/models/</code>.
          </p>
        </div>

        {/* Model Selector Tabs */}
        <div className="mt-5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
            Select Model Profile
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {Object.values(MODEL_IMAGE_MAPPINGS).map((mapping) => {
              const isSelected = selectedModelId === mapping.id;
              const hasReal = !!getStoredUserImage(mapping.id) || !!resolveRealModelImage(mapping.id, serverImages);

              return (
                <button
                  key={mapping.id}
                  type="button"
                  onClick={() => setSelectedModelId(mapping.id)}
                  className={`flex flex-col items-start rounded-xl p-2.5 text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-rose-500 bg-rose-950/20 text-[var(--text-primary)] shadow-sm'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-zinc-500'
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="text-xs font-bold truncate">{mapping.name}</span>
                    {hasReal && (
                      <span className="h-2 w-2 rounded-full bg-emerald-500" title="Real photo active" />
                    )}
                  </div>
                  <span className="text-[10px] text-zinc-400">{mapping.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Upload Zone & Instructions */}
        <div className="mt-5 space-y-4">
          
          {/* File naming guide box */}
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3 sm:p-4 text-xs">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2 font-semibold text-rose-600 dark:text-rose-400">
                <FolderOpen className="h-4 w-4" />
                <span>Filesystem Upload Guide:</span>
              </div>
              <button
                type="button"
                onClick={loadImages}
                className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white transition cursor-pointer"
                title="Scan for newly added files"
              >
                <RefreshCw className={`h-3 w-3 ${isScanning ? 'animate-spin' : ''}`} />
                <span>Scan files</span>
              </button>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Place real photos directly into <strong className="text-[var(--text-primary)]">/public/images/models/</strong> or <strong className="text-[var(--text-primary)]">/public/images/</strong>. Any photo placed in that folder will be detected immediately.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px]">
              <span className="text-[var(--text-muted)]">Target filenames for {currentMapping.name}:</span>
              {currentMapping.expectedFileNames.slice(0, 4).map((name) => (
                <code key={name} className="rounded bg-black/20 dark:bg-white/10 px-2 py-0.5 font-mono text-rose-600 dark:text-rose-300">
                  {name}
                </code>
              ))}
            </div>
          </div>

          {/* Drag & Drop Upload Zone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition-all cursor-pointer ${
              isDragOver
                ? 'border-rose-500 bg-rose-950/20'
                : 'border-[var(--border-subtle)] hover:border-rose-500/60 bg-[var(--bg-surface)]'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileChange(e.target.files[0]);
                }
              }}
            />

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600/10 text-rose-600 dark:text-rose-400 mb-3">
              <Upload className="h-6 w-6" />
            </div>

            <p className="text-sm font-bold text-[var(--text-primary)]">
              Click or drag a real photo here for {currentMapping.name}
            </p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              JPG, PNG, WEBP, AVIF • Auto-fits all mobile, tablet, &amp; desktop screens
            </p>
          </div>

          {/* Current Active Preview */}
          {activeImage ? (
            <div className="flex items-center justify-between rounded-xl border border-emerald-900/40 bg-emerald-950/10 p-3">
              <div className="flex items-center gap-3">
                <img
                  src={activeImage}
                  alt={currentMapping.name}
                  className="h-14 w-14 rounded-lg object-cover border border-emerald-500/40 shadow"
                />
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Real Photo Active on Profile</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)]">
                    Displayed on {currentMapping.name}'s card and responsive modal.
                  </p>
                </div>
              </div>

              {storedImage && (
                <button
                  type="button"
                  onClick={handleRemove}
                  className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-950/30 transition-colors cursor-pointer"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-xs text-amber-500">
              <Info className="h-4 w-4 flex-shrink-0" />
              <span>No real photo uploaded yet for {currentMapping.name}. The verified privacy placeholder badge is currently active (no fake photos used).</span>
            </div>
          )}

          {/* List of Scanned Real Photos in /public/images */}
          {serverImages.length > 0 && (
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[var(--text-primary)]">
                  Discovered Real Photos in Folder ({serverImages.length}):
                </span>
                <span className="text-[11px] text-zinc-400">Click to assign to {currentMapping.name}</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {serverImages.map((img) => (
                  <div
                    key={img.url}
                    onClick={() => handleAssignExisting(img.url)}
                    className="group/thumb relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10 hover:border-rose-500 cursor-pointer transition shadow"
                  >
                    <img
                      src={img.url}
                      alt={img.name}
                      className="h-full w-full object-cover transition duration-300 group-hover/thumb:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/thumb:opacity-100 flex flex-col items-center justify-center p-1 text-center transition">
                      <span className="text-[10px] font-bold text-white leading-tight">Assign to {currentMapping.name}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-1 py-0.5 text-[9px] text-zinc-300 truncate">
                      {img.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Success Message Banner */}
          {successMessage && (
            <div className="flex items-center gap-2 rounded-xl bg-emerald-600/10 border border-emerald-500/40 p-3 text-xs text-emerald-600 dark:text-emerald-400 animate-in fade-in">
              <CheckCircle className="h-4 w-4 flex-shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="mt-6 flex justify-end gap-3 border-t border-[var(--border-subtle)] pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-rose-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-rose-500 transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
