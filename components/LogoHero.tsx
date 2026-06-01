"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function LogoHero() {
  return (
    <header className="flex flex-col items-center text-center pt-8 pb-6">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 -z-10 rounded-3xl bg-brand-red/40 blur-3xl scale-150" />
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-red to-red-700 flex items-center justify-center shadow-glow">
          <Play className="w-9 h-9 text-white fill-white" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight"
      >
        STREAMING ANIME <span className="text-brand-red">GRATIS</span>
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="mt-3 text-sm text-white/60 max-w-xs leading-relaxed"
      >
        STREAMING ANIME GRATIS RESO 360p ONLY (NO IKLAN) • TANPA LOGIN
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mt-4"
      >
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wider bg-brand-red text-white shadow-glow">
          TANPA LOGIN
        </span>
      </motion.div>
    </header>
  );
}
