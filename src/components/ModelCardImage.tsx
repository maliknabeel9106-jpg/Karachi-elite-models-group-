import React, { useState, useEffect } from 'react';
import { modelsData } from '../data/models';
import {
  MODEL_IMAGE_MAPPINGS,
  getStoredUserImage,
  fetchUploadedRealImages,
  resolveRealModelImage,
  RealImageItem
} from '../utils/imageManager';
import { Camera, Sparkles, Maximize2, ShieldCheck, Eye } from 'lucide-react';
import { ImageLightboxModal } from './ImageLightboxModal';

interface ModelCardImageProps {
  modelId: string;
  modelName: string;
  category: string;
  className?: string;
  containerClassName?: string;
  onOpenUploader?: (modelId: string, modelName: string) => void;
  showLightboxOnClick?: boolean;
}

export const ModelCardImage: React.FC<ModelCardImageProps> = ({
  modelId,
  modelName,
  category,
  className = '',
  containerClassName = '',
  onOpenUploader,
  showLightboxOnClick = true
}) => {
  const modelProfile = modelsData.find((m) => m.id === modelId);
  const initialPhoto =
    getStoredUserImage(modelId) ||
    (modelProfile?.image && !modelProfile.image.includes('placeholder')
      ? modelProfile.image
      : null);

  const [realImageSrc, setRealImageSrc] = useState<string | null>(initialPhoto);
  const [isRealPhoto, setIsRealPhoto] = useState<boolean>(!!initialPhoto);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [fitMode, setFitMode] = useState<'cover' | 'contain'>('cover');
  const [isLoading, setIsLoading] = useState<boolean>(!initialPhoto);

  // Sync and resolve real photo from /public/images/ or local storage
  const syncImage = (availableList?: RealImageItem[]) => {
    // 1. Check local storage first
    const stored = getStoredUserImage(modelId);
    if (stored) {
      setRealImageSrc(stored);
      setIsRealPhoto(true);
      setIsLoading(false);
      return;
    }

    // 2. Resolve from scanned server files in /public/images/
    if (availableList && availableList.length > 0) {
      const resolved = resolveRealModelImage(modelId, availableList);
      if (resolved) {
        setRealImageSrc(resolved);
        setIsRealPhoto(true);
        setIsLoading(false);
        return;
      }
    }

    // 3. Direct model profile photo from /public/images/
    const profile = modelsData.find((m) => m.id === modelId);
    if (profile?.image && !profile.image.includes('placeholder')) {
      setRealImageSrc(profile.image);
      setIsRealPhoto(true);
      setIsLoading(false);
      return;
    }

    // 4. If no real photo yet, show verified authentic privacy badge (no fake photos)
    setRealImageSrc(null);
    setIsRealPhoto(false);
    setIsLoading(false);
  };

  useEffect(() => {
    // Initial fetch from /public/images/
    fetchUploadedRealImages().then((list) => {
      syncImage(list);
    });

    // Listen for custom image updates in real-time
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ key: string; dataUrl: string | null }>;
      if (customEvent.detail && customEvent.detail.key === modelId) {
        if (customEvent.detail.dataUrl) {
          setRealImageSrc(customEvent.detail.dataUrl);
          setIsRealPhoto(true);
        } else {
          // Re-sync with available server images
          fetchUploadedRealImages(true).then((list) => syncImage(list));
        }
      }
    };

    // Listen for global scan updates
    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent<RealImageItem[]>;
      if (customEvent.detail) {
        syncImage(customEvent.detail);
      }
    };

    window.addEventListener('karachi_image_updated', handleUpdate);
    window.addEventListener('karachi_real_images_synced', handleSync);

    return () => {
      window.removeEventListener('karachi_image_updated', handleUpdate);
      window.removeEventListener('karachi_real_images_synced', handleSync);
    };
  }, [modelId]);

  const handleImageError = () => {
    // If the real photo failed to load or was removed, revert to placeholder
    setRealImageSrc(null);
    setIsRealPhoto(false);
  };

  return (
    <>
      <div
        className={`group/img relative h-full w-full overflow-hidden bg-gradient-to-b from-zinc-900 to-black select-none ${containerClassName}`}
        onClick={() => {
          if (isRealPhoto && realImageSrc && showLightboxOnClick) {
            setIsLightboxOpen(true);
          }
        }}
      >
        {isRealPhoto && realImageSrc ? (
          /* REAL UPLOADED PHOTO CONTAINER - Responsive for all screen sizes */
          <div className="relative h-full w-full overflow-hidden">
            {/* Ambient Blurred Backdrop Layer: ensures any aspect ratio (wide/tall) fits screen organically */}
            <img
              src={realImageSrc}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover blur-xl scale-125 opacity-35 pointer-events-none"
            />

            {/* Primary Sharp Photo */}
            <img
              src={realImageSrc}
              alt={`${modelName} - Verified Escort in Karachi (${category})`}
              className={`relative h-full w-full transition-transform duration-500 group-hover/img:scale-105 ${
                fitMode === 'contain' ? 'object-contain' : 'object-cover object-top sm:object-center'
              } ${className}`}
              onError={handleImageError}
              loading="lazy"
              decoding="async"
            />

            {/* Subtle bottom gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Verified 100% Real Photo Badge */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-emerald-950/85 px-2.5 py-1 text-[10px] font-bold text-emerald-300 backdrop-blur-md border border-emerald-500/50 shadow-md">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>100% Real Photo</span>
            </div>

            {/* Controls overlay: Fit Toggle & Fullscreen Zoom */}
            <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover/img:opacity-100 transition-opacity duration-200">
              {/* Fit Mode Toggle: Fill vs Full View */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFitMode((m) => (m === 'cover' ? 'contain' : 'cover'));
                }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-black/80 text-zinc-300 hover:text-white hover:bg-rose-600 transition cursor-pointer backdrop-blur-md border border-white/20 shadow-md"
                title={fitMode === 'cover' ? 'Show uncropped photo (Contain)' : 'Fill card (Cover)'}
                aria-label="Toggle fit mode"
              >
                <Eye className="h-3.5 w-3.5" />
              </button>

              {/* Fullscreen Lightbox Trigger */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-black/80 text-zinc-300 hover:text-white hover:bg-rose-600 transition cursor-pointer backdrop-blur-md border border-white/20 shadow-md"
                title="Open fullscreen photo"
                aria-label="Fullscreen photo"
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </button>

              {/* Change/Upload Photo Trigger */}
              {onOpenUploader && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenUploader(modelId, modelName);
                  }}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-white hover:bg-rose-500 transition cursor-pointer shadow-md"
                  title="Update this photo"
                  aria-label="Update this photo"
                >
                  <Camera className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Click to expand hint on mobile */}
            <div className="absolute bottom-2 right-2 z-10 sm:hidden">
              <span className="rounded bg-black/70 px-1.5 py-0.5 text-[9px] font-medium text-zinc-300 backdrop-blur-sm">
                Tap to expand
              </span>
            </div>
          </div>
        ) : (
          /* NO FAKE IMAGES - AUTHENTIC PLACEHOLDER CARD */
          <div className="relative flex h-full w-full flex-col items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-center">
            {/* Luxury watermark / vector illustration */}
            <div className="relative mt-4 flex flex-col items-center">
              <div className="relative mb-3 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-tr from-rose-950/60 to-zinc-900 border border-rose-500/30 shadow-inner">
                <Sparkles className="h-8 w-8 text-rose-400 animate-pulse" />
                <div className="absolute -bottom-1 rounded-full bg-rose-600 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white">
                  {category}
                </div>
              </div>

              <h4 className="font-cinzel text-base sm:text-lg font-bold text-white tracking-wide">
                {modelName}
              </h4>
              <p className="mt-0.5 text-xs text-rose-300/90 font-medium">
                Verified Discreet Profile
              </p>
            </div>

            {/* Real photo confidentiality note */}
            <div className="my-auto max-w-[240px] rounded-xl border border-white/10 bg-black/50 p-2.5 sm:p-3 text-[11px] leading-relaxed text-zinc-300 backdrop-blur-sm">
              <p className="font-semibold text-rose-400">100% Real Photos Only</p>
              <p className="mt-1 text-[10px] text-zinc-400">
                To protect model privacy, original uncompressed portraits are shared directly on WhatsApp.
              </p>
            </div>

            {/* Action Bar: Upload Real Photo */}
            <div className="mt-2 w-full flex flex-col gap-2">
              {onOpenUploader ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenUploader(modelId, modelName);
                  }}
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-rose-500/50 bg-rose-600/20 px-3 py-2 text-xs font-bold text-rose-300 hover:bg-rose-600 hover:text-white transition-all cursor-pointer shadow"
                >
                  <Camera className="h-3.5 w-3.5" />
                  <span>Upload Real Photo</span>
                </button>
              ) : (
                <div className="rounded-lg bg-zinc-900/80 py-1.5 text-[10px] font-medium text-zinc-400 border border-white/5">
                  Save photo to /public/images/models/
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox for uncropped inspection on all screens */}
      {isRealPhoto && realImageSrc && (
        <ImageLightboxModal
          isOpen={isLightboxOpen}
          imageUrl={realImageSrc}
          title={modelName}
          subtitle={`Verified Escort • ${category} • Karachi`}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </>
  );
};
