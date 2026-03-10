'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import ApiKeyConfig from '@/components/ApiKeyConfig';
import FeatureSelector from '@/components/FeatureSelector';
import GenerationInterface from '@/components/GenerationInterface';
import { Feature } from '@/types';

export default function Home() {
  const [apiKey, setApiKey] = useState<string>('');
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <div className="min-h-screen relative w-full overflow-x-hidden">
      {/* Animated gradient orbs */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-[var(--neon-cyan)] rounded-full blur-[150px] opacity-20 animate-pulse pointer-events-none" />
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-[var(--neon-purple)] rounded-full blur-[150px] opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* Header */}
      <header className="relative z-10 border-b border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-5 md:py-7">
          <div className="flex items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0"
            >
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[var(--banana-yellow)] to-orange-500 flex items-center justify-center text-xl sm:text-2xl animate-glow-pulse">
                  🍌
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold neon-text truncate" style={{ fontFamily: 'Orbitron, monospace', color: 'var(--neon-cyan)' }}>
                  Nano Banana Pro
                </h1>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] hidden sm:block">
                  Powered by Google Gemini Image Generation
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </header>

      {/* API Key Configuration */}
      <ApiKeyConfig onApiKeySet={setApiKey} />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
        {!selectedFeature ? (
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28"
            >
              {/* Hero Section */}
              <div className="text-center space-y-8 sm:space-y-10 md:space-y-12 py-12 sm:py-16 md:py-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--neon-cyan)]/20 to-[var(--neon-purple)]/20 border border-[var(--neon-cyan)]/30 text-sm font-semibold text-[var(--neon-cyan)]"
                >
                  <Sparkles size={16} className="animate-glow-pulse" />
                  Professional AI Image Generation Platform
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight px-4"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)]">
                    Create Stunning Images
                  </span>
                  <br />
                  <span className="text-[var(--foreground)]">
                    with AI Power
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl text-[var(--foreground-muted)] max-w-4xl mx-auto px-4 leading-relaxed"
                >
                  Harness the full power of Google's Gemini AI to generate, edit, and transform images
                  with unprecedented quality and control. From text-to-image to viral social media thumbnails.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-6 sm:gap-8 justify-center pt-8"
                >
                  <div className="glass-card px-8 sm:px-10 py-4 sm:py-5 flex items-center gap-3 shadow-lg">
                    <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-base sm:text-lg font-semibold">Gemini 2.5 Flash</span>
                  </div>
                  <div className="glass-card px-8 sm:px-10 py-4 sm:py-5 flex items-center gap-3 shadow-lg">
                    <span className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-base sm:text-lg font-semibold">Gemini 3 Pro</span>
                  </div>
                  <div className="glass-card px-8 sm:px-10 py-4 sm:py-5 flex items-center gap-3 shadow-lg">
                    <span className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
                    <span className="text-base sm:text-lg font-semibold">Up to 4K Quality</span>
                  </div>
                </motion.div>
              </div>

              {/* Feature Selector */}
              <FeatureSelector
                selectedFeature={selectedFeature}
                onFeatureSelect={setSelectedFeature}
              />
            </motion.div>
          </div>
        ) : (
          <GenerationInterface
            feature={selectedFeature}
            apiKey={apiKey}
            onBack={() => setSelectedFeature(null)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-24 sm:mt-32 md:mt-40">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
          <div className="text-center">
            <p className="text-xs text-[var(--foreground-muted)]">
              Powered by <span className="font-semibold text-[var(--neon-cyan)]">Google Gemini 2.5 Flash</span> & <span className="font-semibold text-[var(--neon-purple)]">Gemini 3 Pro</span> Image Generation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
