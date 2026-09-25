import React, { useState } from 'react';
import { modelsData } from '../data/models';
import { ModelProfile } from '../types';
import { X, CheckCircle, MapPin, Sparkles, MessageSquare, Camera } from 'lucide-react';
import { ModelCardImage } from './ModelCardImage';

interface ModelsGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectModelForBooking: (modelName: string, category: string) => void;
  initialFilter?: string;
  onOpenImageUploader?: (modelId?: string) => void;
  onNavigate?: (path: string) => void;
}

export const ModelsGalleryModal: React.FC<ModelsGalleryModalProps> = ({
  isOpen,
  onClose,
  onSelectModelForBooking,
  initialFilter = 'All',
  onOpenImageUploader,
  onNavigate
}) => {
  const [filter, setFilter] = useState<string>(initialFilter);

  if (!isOpen) return null;

  const categories = ['All', 'VIP', 'Independent', 'Russian / International', 'Call Girls'];

  const filteredModels = filter === 'All'
    ? modelsData
    : modelsData.filter((m) => m.category === filter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-md animate-in fade-in">
      <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col rounded-2xl border border-[var(--border-card)] bg-[var(--bg-canvas)] shadow-[var(--shadow-elevated)] overflow-hidden transition-colors duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 sm:px-6 py-4 sm:py-5">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-rose-500" />
              <h3 className="font-cinzel text-base sm:text-xl font-bold uppercase tracking-wide text-[var(--text-primary)]">
                Verified Escort Directory – Karachi
              </h3>
            </div>
            <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
              Authentic unretouched portraits • Screened in-person • 24/7 in-call and outcall
            </p>
          </div>

          <div className="flex items-center gap-2">
            {onOpenImageUploader && (
              <button
                type="button"
                onClick={() => onOpenImageUploader()}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-rose)] bg-[var(--rose-badge-bg)] px-3 py-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-600 hover:text-white transition-all cursor-pointer"
                title="Upload custom photos for models"
              >
                <Camera className="h-3.5 w-3.5" />
                <span>Upload Photos</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="rounded-full p-2 text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 sm:px-6 py-3">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-950/20'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Models Grid View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredModels.map((model) => (
              <div
                key={model.id}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] transition-all hover:border-rose-600/50 hover:shadow-[var(--shadow-card)]"
              >
                {/* Photo with Overlay Text */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] min-h-[300px] w-full overflow-hidden bg-[var(--bg-surface)]">
                  <ModelCardImage
                    modelId={model.id}
                    modelName={model.name}
                    category={model.category}
                    className="h-full w-full object-cover object-top sm:object-center transition-transform duration-500 group-hover:scale-105"
                    onOpenUploader={(id) => onOpenImageUploader?.(id)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />
                  
                  {/* Category Cue */}
                  <span className="absolute top-3 left-3 text-[11px] font-semibold tracking-wider uppercase text-rose-300 drop-shadow">
                    {model.category}
                  </span>

                  {/* Verified Indicator */}
                  <span className="absolute top-3 right-3 flex items-center gap-1 text-[11px] font-medium text-emerald-300 drop-shadow">
                    <CheckCircle className="h-3 w-3 text-emerald-400" />
                    <span>Verified</span>
                  </span>

                  {/* Hourly Rate banner */}
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold tabular-nums drop-shadow">
                      {model.hourlyRate}
                    </span>
                    <span className="text-[11px] text-zinc-300 drop-shadow font-medium">
                      Age {model.age} · {model.height}
                    </span>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl font-semibold text-[var(--text-primary)] leading-tight">
                      <a
                        href={`/models/${model.id}`}
                        onClick={(e) => {
                          if (onNavigate) {
                            e.preventDefault();
                            onClose();
                            onNavigate(`/models/${model.id}`);
                          }
                        }}
                        className="hover:text-rose-600 transition-colors"
                      >
                        {model.name}
                      </a>
                    </h4>

                    <p className="mt-1 flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400 font-medium">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span>{model.location}</span>
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] line-clamp-2 [text-wrap:pretty]">
                      {model.bio}
                    </p>

                    {/* Services Text List */}
                    <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-[var(--text-muted)] font-medium">
                      {model.services.slice(0, 3).map((srv, idx) => (
                        <span key={idx} className="after:content-['·'] last:after:content-[''] after:ml-1.5">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Booking & Profile Actions */}
                  <div className="mt-4 flex items-center gap-2 border-t border-[var(--border-subtle)] pt-3">
                    <button
                      onClick={() => {
                        if (onNavigate) {
                          onClose();
                          onNavigate(`/models/${model.id}`);
                        }
                      }}
                      className="flex-1 min-h-[38px] rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] py-2 text-center text-xs font-semibold text-[var(--text-primary)] hover:border-rose-500/50 hover:text-rose-600 transition-colors cursor-pointer"
                    >
                      View Profile
                    </button>

                    <button
                      onClick={() => {
                        onSelectModelForBooking(model.name, model.category);
                        onClose();
                      }}
                      className="flex-1 min-h-[38px] rounded-lg bg-rose-600 py-2 text-center text-xs font-semibold text-white hover:bg-rose-500 transition-colors cursor-pointer"
                    >
                      Book Model
                    </button>

                    <a
                      href={`https://wa.me/923402042663?text=Hi%2C%20I%20am%20interested%20in%20booking%20${encodeURIComponent(model.name)}%20(${encodeURIComponent(model.category)})%20in%20Karachi.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg bg-emerald-600 p-2 text-white hover:bg-emerald-500 transition-colors"
                      title="Direct WhatsApp"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
