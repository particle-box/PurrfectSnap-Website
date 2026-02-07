'use client';

import { useState } from 'react';
import { Loader2, Download } from 'lucide-react';

export function DownloadButton() {
  const [isPending, setIsPending] = useState(false);
  const DOWNLOAD_URL = 'https://github.com/particle-box/PurrfectSnap/releases';

  const handleDownload = async () => {
    if (isPending) return;
    setIsPending(true);
    try {
      window.open(DOWNLOAD_URL, '_blank');
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(() => setIsPending(false), 2000);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isPending}
      className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 bg-aurora-pink rounded-full hover:bg-aurora-pink/90 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:scale-100 overflow-hidden shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:shadow-[0_0_35px_rgba(255,0,85,0.6)] w-full sm:w-auto"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
      {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
      <span>{isPending ? 'Redirecting...' : 'Download App'}</span>
    </button>
  );
}
