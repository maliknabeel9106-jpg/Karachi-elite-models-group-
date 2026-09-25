import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  subtitle?: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  subtitle,
  onClose,
}) => {
  const [scale, setScale] = React.useState(1);

  useEffect(() => {
    if (isOpen) {
      setScale(1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-2 sm:p-4 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-3 sm:p-5 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600/30 border border-rose-500/40 text-rose-400">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h4 className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide">
              {title}
            </h4>
            {subtitle && (
              <p className="text-[11px] sm:text-xs text-rose-300 flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-emerald-400" />
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => setScale((s) => Math.max(0.7, s - 0.25))}
            className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition cursor-pointer"
            title="Zoom out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setScale(1)}
            className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition cursor-pointer"
            title="Reset zoom"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setScale((s) => Math.min(2.5, s + 0.25))}
            className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition cursor-pointer"
            title="Zoom in"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-1 sm:ml-2 rounded-full bg-rose-600 p-2 text-white hover:bg-rose-500 transition cursor-pointer shadow-lg"
            title="Close view"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Image Container - Fluid Responsive on all screen sizes */}
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden p-2 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient blurred backdrop copy of image */}
        <img
          src={imageUrl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover blur-3xl opacity-20 pointer-events-none scale-125"
        />

        {/* Sharp uncropped photo that fits all devices */}
        <img
          src={imageUrl}
          alt={title}
          style={{ transform: `scale(${scale})` }}
          className="relative max-h-[85vh] max-w-[95vw] sm:max-w-[85vw] object-contain rounded-lg shadow-2xl transition-transform duration-200 select-none"
        />
      </div>

      {/* Bottom info banner */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 rounded-full bg-black/75 px-4 py-1.5 text-xs text-zinc-300 backdrop-blur-md border border-white/15 pointer-events-none">
        Pinch or use zoom controls • 100% Authentic Verified Portrait
      </div>
    </div>
  );
};
