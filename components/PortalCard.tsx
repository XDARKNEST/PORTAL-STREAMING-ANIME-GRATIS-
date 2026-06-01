"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { PortalCardProps } from "@/types";

const indicatorMap: Record<string, string> = {
  green: "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]",
  blue: "bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.8)]",
  whatsapp: "bg-[#25D366] shadow-[0_0_12px_rgba(37,211,102,0.8)]",
};

const buttonMap: Record<string, string> = {
  green: "bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]",
  blue: "bg-sky-600 hover:bg-sky-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]",
  whatsapp: "bg-[#25D366] hover:bg-[#1ebe5d] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]",
};

export default function PortalCard({
  indicator,
  title,
  description,
  buttonLabel,
  href,
  delay = 0,
}: PortalCardProps) {
  return (
    <motion.article
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="glass-dark rounded-3xl p-5 transition-shadow hover:shadow-glowSoft"
    >
      <div className="flex items-center gap-2.5 mb-3">
        <span className={`w-2.5 h-2.5 rounded-full ${indicatorMap[indicator]} animate-pulse`} />
        <h2 className="text-base font-bold tracking-tight">{title}</h2>
      </div>
      <p className="text-sm text-white/60 leading-relaxed mb-4">{description}</p>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.97 }}
        className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-white text-sm transition-all ${buttonMap[indicator]}`}
      >
        {buttonLabel}
        <ArrowUpRight className="w-4 h-4" />
      </motion.a>
    </motion.article>
  );
}
