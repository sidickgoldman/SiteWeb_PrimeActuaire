"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

interface Props {
  variant?: "dark" | "light";
}

/* ── Donut chart constants ── */
const R = 36;
const C = 2 * Math.PI * R; // ≈ 226.2
const donutSegments = [
  { pct: 40, color: "#D4654A" }, // coral  — Hospi.
  { pct: 25, color: "#C5963A" }, // gold   — Pharma.
  { pct: 15, color: "#2E8B6C" }, // teal   — Optique
  { pct: 12, color: "#6B8CC7" }, // blue   — Dentaire
  { pct: 8,  color: "#8A8999" }, // muted  — Autres
];

const barHeights = [52, 68, 45, 78, 62, 80, 88, 72, 76, 58, 84, 70];

const kpiColors  = ["text-coral", "text-teal", "text-gold"];
const kpiBgDark  = ["bg-coral/[0.08]", "bg-teal/[0.08]", "bg-gold/[0.08]"];
const kpiBgLight = ["bg-coral/[0.06]", "bg-teal/[0.06]", "bg-gold/[0.06]"];

export default function DashboardPreview({ variant = "dark" }: Props) {
  const { t } = useI18n();
  const dk = variant === "dark";

  /* Compute donut stroke offsets */
  let cumOffset = 0;
  const rings = donutSegments.map((seg) => {
    const len = (seg.pct / 100) * C;
    const ring = { len, gap: C - len, offset: -cumOffset, color: seg.color };
    cumOffset += len;
    return ring;
  });

  const cardBg   = dk ? "bg-white/[0.04]" : "bg-bg-light";
  const mutedTxt = dk ? "text-white/25" : "text-text-muted/50";
  const labelBg  = dk ? "bg-white/10" : "bg-navy/10";
  const barFrom  = dk ? "from-gold/50" : "from-gold/40";
  const barTo    = dk ? "to-gold/15"   : "to-gold/10";

  return (
    <div
      className={`rounded-2xl shadow-2xl border p-4 sm:p-5 flex flex-col aspect-[4/3] ${
        dk
          ? "bg-white/[0.06] backdrop-blur-sm border-white/10 shadow-gold/10"
          : "bg-white border-gold/10 shadow-gold/10"
      }`}
    >
      {/* ── Chrome bar ── */}
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-coral/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-teal/50" />
        <span className={`ml-2 text-[9px] sm:text-[10px] font-medium ${dk ? "text-white/25" : "text-text-muted/60"}`}>
          {t.dashboard.title} — Dashboard
        </span>
      </div>

      {/* ── Body ── */}
      <div className="flex-1 flex gap-2 sm:gap-3 min-h-0">
        {/* Sidebar */}
        <div
          className={`w-8 sm:w-10 rounded-lg flex flex-col items-center py-3 gap-3 shrink-0 ${
            dk ? "bg-white/[0.03]" : "bg-bg-light"
          }`}
        >
          {t.dashboard.navItems.map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md transition-colors ${
                i === 0
                  ? "bg-gold/20 border border-gold/30"
                  : dk
                    ? "bg-white/[0.04] border border-white/5"
                    : "bg-navy/[0.04] border border-navy/5"
              }`}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col gap-2 sm:gap-3 min-h-0">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2">
            {t.dashboard.kpis.map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
                className={`rounded-lg p-2 sm:p-2.5 ${cardBg}`}
              >
                <div className={`h-1.5 w-6 sm:w-8 rounded-full mb-1.5 ${dk ? kpiBgDark[i] : kpiBgLight[i]}`} />
                <p className={`font-[var(--font-heading)] font-extrabold text-sm sm:text-lg leading-none ${kpiColors[i]}`}>
                  {kpi.value}
                </p>
                <p className={`text-[7px] sm:text-[8px] mt-0.5 ${mutedTxt}`}>
                  {kpi.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="flex-1 grid grid-cols-3 gap-2 sm:gap-3 min-h-0">
            {/* Bar chart */}
            <div className={`col-span-2 rounded-lg p-2 sm:p-3 flex flex-col ${cardBg}`}>
              <div className={`h-1.5 w-16 sm:w-20 rounded mb-2 ${labelBg}`} />
              <div className="flex-1 flex items-end gap-[3px] sm:gap-1.5">
                {barHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 1.2 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex-1 rounded-t bg-gradient-to-t ${barFrom} ${barTo}`}
                  />
                ))}
              </div>
            </div>

            {/* Donut */}
            <div className={`rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center ${cardBg}`}>
              <motion.svg
                viewBox="0 0 100 100"
                className="w-14 h-14 sm:w-[4.5rem] sm:h-[4.5rem] -rotate-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                {rings.map((r, i) => (
                  <motion.circle
                    key={i}
                    cx="50"
                    cy="50"
                    r={R}
                    fill="none"
                    stroke={r.color}
                    strokeWidth="8"
                    strokeDasharray={`${r.len} ${r.gap}`}
                    strokeDashoffset={r.offset}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: dk ? 0.7 : 0.85 }}
                    transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                  />
                ))}
              </motion.svg>

              {/* Legend */}
              <div className="mt-1.5 flex flex-wrap justify-center gap-x-2 gap-y-0.5">
                {t.dashboard.donutLabels.map((label, i) => (
                  <div key={i} className="flex items-center gap-0.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: donutSegments[i].color, opacity: dk ? 0.7 : 0.85 }}
                    />
                    <span className={`text-[6px] sm:text-[7px] ${mutedTxt}`}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
