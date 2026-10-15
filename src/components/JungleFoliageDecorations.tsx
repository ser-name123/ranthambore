'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Hanging Jungle Canopy Vines with Leaves (Top Section Border)
 * Sways gently with realistic forest breeze keyframes
 */
export function JungleTopCanopy({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute top-0 inset-x-0 overflow-hidden h-28 sm:h-36 z-10 select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover opacity-85"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#047857" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#064e3b" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="leafGradAmber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#92400e" stopOpacity="0.65" />
          </linearGradient>
        </defs>

        {/* Left Hanging Canopy Cluster (Swaying) */}
        <g className="animate-jungle-sway origin-top-left" style={{ transformOrigin: '80px 0' }}>
          {/* Main branch */}
          <path
            d="M-40 -10 C 60 40, 160 50, 260 20 C 310 5, 360 -5, 410 -20"
            stroke="#1b3a2a"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Hanging vine 1 */}
          <path
            d="M90 35 C 95 70, 75 105, 85 140"
            stroke="#047857"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          {/* Vine 1 Leaves */}
          <path d="M85 70 C 105 60, 115 80, 85 85 Z" fill="url(#leafGrad1)" />
          <path d="M85 105 C 65 95, 60 115, 85 118 Z" fill="url(#leafGrad2)" />
          <path d="M85 138 C 105 130, 100 150, 85 152 Z" fill="url(#leafGradAmber)" />

          {/* Hanging vine 2 */}
          <path
            d="M190 42 C 205 75, 185 110, 195 135"
            stroke="#047857"
            strokeWidth="1.5"
          />
          {/* Vine 2 Leaves */}
          <path d="M190 65 C 215 55, 220 75, 192 80 Z" fill="url(#leafGrad2)" />
          <path d="M192 95 C 170 85, 165 105, 192 110 Z" fill="url(#leafGrad1)" />
          <path d="M195 130 C 215 125, 210 145, 195 145 Z" fill="url(#leafGrad2)" />

          {/* Large Sal Tree Canopy Leaves */}
          <path d="M50 15 C 80 -15, 120 10, 90 40 C 60 45, 40 30, 50 15 Z" fill="url(#leafGrad1)" />
          <path d="M140 25 C 175 -5, 210 20, 180 50 C 150 55, 130 40, 140 25 Z" fill="url(#leafGrad2)" />
          <path d="M230 20 C 265 -10, 305 15, 275 45 C 245 50, 225 35, 230 20 Z" fill="url(#leafGrad1)" />
          <path d="M30 0 C 60 -20, 90 5, 70 30 Z" fill="url(#leafGradAmber)" />
        </g>

        {/* Right Hanging Canopy Cluster (Swaying opposite) */}
        <g className="animate-jungle-sway-slow origin-top-right" style={{ transformOrigin: '1360px 0' }}>
          {/* Main branch */}
          <path
            d="M1480 -10 C 1380 40, 1280 50, 1180 20 C 1130 5, 1080 -5, 1030 -20"
            stroke="#1b3a2a"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Hanging vine 1 */}
          <path
            d="M1350 35 C 1340 70, 1360 105, 1345 135"
            stroke="#047857"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <path d="M1350 70 C 1330 60, 1320 80, 1350 85 Z" fill="url(#leafGrad2)" />
          <path d="M1348 100 C 1370 90, 1375 110, 1348 115 Z" fill="url(#leafGrad1)" />
          <path d="M1345 130 C 1325 125, 1330 145, 1345 145 Z" fill="url(#leafGradAmber)" />

          {/* Hanging vine 2 */}
          <path
            d="M1250 42 C 1235 75, 1255 110, 1245 145"
            stroke="#047857"
            strokeWidth="1.5"
          />
          <path d="M1250 65 C 1225 55, 1220 75, 1248 80 Z" fill="url(#leafGrad1)" />
          <path d="M1248 95 C 1270 85, 1275 105, 1248 110 Z" fill="url(#leafGrad2)" />
          <path d="M1245 140 C 1225 130, 1230 155, 1245 155 Z" fill="url(#leafGrad1)" />

          {/* Canopy leaves */}
          <path d="M1390 15 C 1360 -15, 1320 10, 1350 40 C 1380 45, 1400 30, 1390 15 Z" fill="url(#leafGrad1)" />
          <path d="M1300 25 C 1265 -5, 1230 20, 1260 50 C 1290 55, 1310 40, 1300 25 Z" fill="url(#leafGrad2)" />
          <path d="M1210 20 C 1175 -10, 1135 15, 1165 45 C 1195 50, 1215 35, 1210 20 Z" fill="url(#leafGradAmber)" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Botanical Corner Plant / Sal Leaves & Ferns
 * Adds lush forest presence on Left and Right borders
 */
export function JungleCornerBranch({
  position = 'left',
  className = '',
}: {
  position?: 'left' | 'right';
  className?: string;
}) {
  const isLeft = position === 'left';

  return (
    <div
      className={`pointer-events-none absolute ${
        isLeft ? '-left-6 sm:left-0' : '-right-6 sm:right-0'
      } top-12 z-0 w-36 sm:w-56 h-72 sm:h-96 select-none opacity-80 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${isLeft ? '' : 'scale-x-[-1]'} animate-jungle-sway origin-top-left`}
      >
        <defs>
          <linearGradient id="foliageGradA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#047857" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#064e3b" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="foliageGradB" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="foliageGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Curving Branch */}
        <path
          d="M0 20 C 40 80, 70 180, 50 300"
          stroke="#1b3a2a"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Large Tropical Leaves along Branch */}
        {/* Leaf 1 */}
        <g transform="translate(15, 60) rotate(-25)">
          <path
            d="M0 0 C 35 -30, 85 -20, 110 5 C 80 30, 30 25, 0 0 Z"
            fill="url(#foliageGradA)"
          />
          <path d="M0 0 L 95 5" stroke="#064e3b" strokeWidth="1" />
        </g>

        {/* Leaf 2 */}
        <g transform="translate(35, 110) rotate(15)">
          <path
            d="M0 0 C 30 -25, 90 -15, 120 15 C 85 40, 25 30, 0 0 Z"
            fill="url(#foliageGradB)"
          />
          <path d="M0 0 L 105 15" stroke="#047857" strokeWidth="1" />
        </g>

        {/* Leaf 3 */}
        <g transform="translate(50, 170) rotate(-15)">
          <path
            d="M0 0 C 35 -20, 80 -10, 115 15 C 80 35, 30 25, 0 0 Z"
            fill="url(#foliageGradA)"
          />
          <path d="M0 0 L 100 15" stroke="#064e3b" strokeWidth="1" />
        </g>

        {/* Leaf 4 (Amber highlight) */}
        <g transform="translate(55, 230) rotate(20)">
          <path
            d="M0 0 C 25 -20, 75 -10, 95 15 C 70 30, 20 20, 0 0 Z"
            fill="url(#foliageGradGold)"
          />
          <path d="M0 0 L 80 15" stroke="#92400e" strokeWidth="1" />
        </g>

        {/* Delicate Fern Spray */}
        <g transform="translate(20, 140) rotate(-55)">
          <path d="M0 0 L 70 0" stroke="#047857" strokeWidth="1.2" />
          {[15, 30, 45, 60].map((pos, idx) => (
            <React.Fragment key={idx}>
              <path d={`M${pos} 0 Q ${pos + 5} -14, ${pos + 12} -12`} stroke="#059669" strokeWidth="1" />
              <path d={`M${pos} 0 Q ${pos + 5} 14, ${pos + 12} 12`} stroke="#059669" strokeWidth="1" />
            </React.Fragment>
          ))}
        </g>
      </svg>
    </div>
  );
}

/**
 * Royal Bengal Tiger Pugmark (Paw Print) Trail Watermark
 * Renders an authentic tiger footprint walking pattern across sections
 */
export function TigerTrackWatermark({
  count = 4,
  className = '',
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-around opacity-40 select-none ${className}`}
      aria-hidden="true"
    >
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="transition-transform duration-700 hover:scale-110"
          style={{
            transform: `translateY(${Math.sin(i * 1.5) * 40}px) rotate(${12 + i * 8}deg)`,
          }}
        >
          <svg
            width="54"
            height="54"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-emerald-800/60"
          >
            {/* Main Central Heel Pad */}
            <path
              d="M32 75 C 22 68, 20 54, 34 50 C 44 47, 56 47, 66 50 C 80 54, 78 68, 68 75 C 58 82, 42 82, 32 75 Z"
              fill="currentColor"
            />
            {/* Toe 1 (Outer Left) */}
            <ellipse cx="22" cy="40" rx="7.5" ry="11" transform="rotate(-30 22 40)" fill="currentColor" />
            {/* Toe 2 (Inner Left) */}
            <ellipse cx="39" cy="27" rx="8" ry="12.5" transform="rotate(-10 39 27)" fill="currentColor" />
            {/* Toe 3 (Inner Right) */}
            <ellipse cx="61" cy="27" rx="8" ry="12.5" transform="rotate(10 61 27)" fill="currentColor" />
            {/* Toe 4 (Outer Right) */}
            <ellipse cx="78" cy="40" rx="7.5" ry="11" transform="rotate(30 78 40)" fill="currentColor" />
          </svg>
        </div>
      ))}
    </div>
  );
}

/**
 * Jungle Section Divider with Organic Botanical Foliage Silhouette
 * Replaces straight geometric divider lines with rich forest silhouettes
 */
export function BotanicalSectionDivider({
  invert = false,
  className = '',
}: {
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none w-full overflow-hidden leading-none select-none z-10 ${
        invert ? 'rotate-180 -mb-px' : '-mt-px'
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        className="w-full h-7 sm:h-10 text-[#f4f8f5] fill-current"
      >
        <path d="M0,0 C150,30 350,45 500,20 C650,-5 800,40 1000,15 C1120,0 1180,25 1200,30 L1200,48 L0,48 Z" />
      </svg>
    </div>
  );
}

/**
 * Bamboo Stalk Silhouette Cluster
 */
export function BambooStalks({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute select-none opacity-45 ${className}`} aria-hidden="true">
      <svg width="120" height="340" viewBox="0 0 120 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 0 L30 340" stroke="#047857" strokeWidth="4" strokeLinecap="round" strokeDasharray="50 4" />
        <path d="M60 20 L60 340" stroke="#059669" strokeWidth="5" strokeLinecap="round" strokeDasharray="65 5" />
        <path d="M85 10 L85 340" stroke="#047857" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="45 4" />
        {/* Leaf Sprays */}
        <path d="M30 70 C 10 65, 0 50, -5 40" stroke="#059669" strokeWidth="1.5" />
        <path d="M30 70 C 50 65, 65 55, 75 45" stroke="#059669" strokeWidth="1.5" />
        <path d="M60 140 C 40 130, 25 120, 15 110" stroke="#059669" strokeWidth="1.5" />
        <path d="M60 140 C 80 135, 95 125, 105 115" stroke="#059669" strokeWidth="1.5" />
        <path d="M85 220 C 105 210, 115 195, 125 185" stroke="#047857" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/**
 * Large Botanical Leaf Silhouette Watermark
 * Floats gently in section background, giving undeniable authentic wildlife jungle texture
 */
export function JungleLeavesWatermark({
  position = 'right',
  className = '',
}: {
  position?: 'left' | 'right' | 'center';
  className?: string;
}) {
  const isLeft = position === 'left';
  const isCenter = position === 'center';

  return (
    <div
      className={`pointer-events-none absolute select-none z-0 ${
        isLeft
          ? '-left-10 sm:left-4 top-1/4'
          : isCenter
          ? 'left-1/2 -translate-x-1/2 top-1/3'
          : '-right-10 sm:right-4 top-1/4'
      } w-60 sm:w-84 h-60 sm:h-84 opacity-25 sm:opacity-30 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-breeze-rustle"
      >
        <defs>
          <linearGradient id="watermarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#047857" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#064e3b" stopOpacity="0.75" />
          </linearGradient>
        </defs>
        {/* Large Botanical Palm / Sal Leaf Silhouette */}
        <path
          d="M150 280 C 150 180, 140 100, 150 20"
          stroke="#064e3b"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M150 50 C 90 20, 40 60, 20 100 C 60 110, 110 90, 150 70 Z"
          fill="url(#watermarkGrad)"
        />
        <path
          d="M150 50 C 210 20, 260 60, 280 100 C 240 110, 190 90, 150 70 Z"
          fill="url(#watermarkGrad)"
        />
        <path
          d="M150 110 C 80 80, 30 130, 25 180 C 70 180, 120 150, 150 130 Z"
          fill="url(#watermarkGrad)"
        />
        <path
          d="M150 110 C 220 80, 270 130, 275 180 C 230 180, 180 150, 150 130 Z"
          fill="url(#watermarkGrad)"
        />
        <path
          d="M150 170 C 90 150, 50 190, 45 240 C 90 230, 130 210, 150 190 Z"
          fill="url(#watermarkGrad)"
        />
        <path
          d="M150 170 C 210 150, 250 190, 255 240 C 210 230, 170 210, 150 190 Z"
          fill="url(#watermarkGrad)"
        />
      </svg>
    </div>
  );
}

/**
 * Forest Sunlight Crepuscular God Rays
 * Simulates sunlight streaming diagonally through dense jungle canopy
 */
export function JungleGodRays({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-godrays"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="godRayGrad" x1="0%" y1="0%" x2="55%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.28" />
            <stop offset="35%" stopColor="#a7f3d0" stopOpacity="0.16" />
            <stop offset="75%" stopColor="#ecfdf5" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="80,0 240,0 520,700 340,700" fill="url(#godRayGrad)" />
        <polygon points="320,0 440,0 800,700 660,700" fill="url(#godRayGrad)" />
        <polygon points="560,0 700,0 1140,700 980,700" fill="url(#godRayGrad)" />
      </svg>
    </div>
  );
}

/**
 * Distant Misty Jungle Treeline & Aravalli Ridges Backdrop
 * Evokes the ancient deciduous forest and hills of Ranthambore
 */
export function JungleTreelineBackdrop({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 inset-x-0 h-36 sm:h-52 overflow-hidden select-none z-0 opacity-25 sm:opacity-30 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="forestMistGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#047857" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#064e3b" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#082318" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="farHillsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {/* Layer 1: Distant Hill Ridges */}
        <path d="M0,110 Q220,50 440,95 T880,65 T1300,105 T1440,85 L1440,220 L0,220 Z" fill="url(#farHillsGrad)" />
        {/* Layer 2: Dense Jungle Canopy Crown Silhouette */}
        <path
          d="M0,145 C40,125 70,120 100,135 C130,105 180,100 220,130 C260,110 310,115 340,140 C380,95 440,105 480,135 C520,120 570,110 620,140 C660,100 720,95 770,130 C820,115 870,110 910,140 C950,90 1020,100 1060,135 C1100,115 1150,110 1190,140 C1240,95 1310,105 1350,130 C1390,115 1420,125 1440,135 L1440,220 L0,220 Z"
          fill="url(#forestMistGrad)"
        />
      </svg>
    </div>
  );
}

/**
 * Tall Wild Elephant Grass (Kas Grass) Swaying along Bottom Borders
 */
export function JungleSavannahGrass({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 inset-x-0 h-16 sm:h-24 overflow-hidden select-none z-10 opacity-75 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Cluster 1: Left */}
        <g className="animate-grass-sway origin-bottom" style={{ transformOrigin: '100px 90px' }}>
          <path d="M30 90 Q 45 35 20 8" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M55 90 Q 70 25 60 4" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
          <path d="M80 90 Q 90 40 105 12" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
          <path d="M105 90 Q 115 30 135 8" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M130 90 Q 135 45 155 20" stroke="#65a30d" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Cluster 2: Mid-Left */}
        <g className="animate-grass-sway-slow origin-bottom" style={{ transformOrigin: '360px 90px' }}>
          <path d="M310 90 Q 320 35 305 12" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M335 90 Q 350 25 370 4" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
          <path d="M365 90 Q 370 40 355 16" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M390 90 Q 410 30 430 12" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Cluster 3: Mid-Right */}
        <g className="animate-grass-sway origin-bottom" style={{ transformOrigin: '1080px 90px' }}>
          <path d="M1030 90 Q 1045 35 1020 10" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M1060 90 Q 1075 22 1100 6" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
          <path d="M1090 90 Q 1095 40 1080 16" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
          <path d="M1120 90 Q 1140 30 1160 12" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        {/* Cluster 4: Right */}
        <g className="animate-grass-sway-slow origin-bottom" style={{ transformOrigin: '1350px 90px' }}>
          <path d="M1310 90 Q 1325 35 1305 12" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
          <path d="M1340 90 Q 1355 25 1380 8" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M1370 90 Q 1380 40 1405 15" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Regal Bengal Tiger Stalking Silhouette in Distant Mist
 */
export function TigerProwlSilhouette({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute select-none z-0 opacity-20 sm:opacity-25 ${className}`}
      aria-hidden="true"
    >
      <svg
        width="210"
        height="85"
        viewBox="0 0 220 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#082318]"
      >
        <path
          d="M10 65 C 15 50, 25 48, 38 48 C 50 48, 62 42, 75 40 C 95 36, 120 37, 138 42 C 155 35, 175 32, 190 38 C 198 34, 208 36, 212 44 C 215 48, 210 55, 202 56 C 196 60, 192 68, 190 78 C 188 82, 183 82, 180 76 C 178 70, 180 62, 175 60 C 165 58, 150 60, 140 65 C 135 72, 132 80, 130 84 C 127 86, 122 84, 123 78 C 124 70, 128 64, 125 60 C 110 58, 95 58, 85 62 C 80 68, 76 76, 74 82 C 71 85, 66 84, 66 77 C 67 70, 71 63, 68 60 C 58 60, 48 64, 40 70 C 36 76, 33 82, 30 84 C 27 85, 24 82, 25 76 C 26 70, 30 65, 27 60 C 20 62, 12 70, 8 75 C 6 78, 2 76, 3 70 C 4 64, 8 60, 10 65 Z"
          fill="currentColor"
        />
        <path
          d="M38 48 C 28 42, 18 30, 8 20 C 4 15, 0 10, 4 6 C 8 2, 14 6, 18 14 C 24 24, 32 35, 42 44"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/**
 * Morning Jungle Mist Layer (Early Morning Safari Atmosphere)
 */
export function JungleMorningMist({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-44 overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-mist-drift"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mistGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="45%" stopColor="#d1fae5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <path d="M0,60 C320,10 640,90 960,30 C1200,60 1340,20 1440,50 L1440,140 L0,140 Z" fill="url(#mistGrad1)" />
      </svg>
    </div>
  );
}

/**
 * Giant Ancient Banyan Tree with Hanging Prop Roots
 * Matches the iconic centuries-old Ranthambore Banyan Tree
 */
export function GiantBanyanTree({
  position = 'left',
  className = '',
}: {
  position?: 'left' | 'right';
  className?: string;
}) {
  const isLeft = position === 'left';
  return (
    <div
      className={`pointer-events-none absolute ${
        isLeft ? '-left-16 sm:-left-8 lg:left-0' : '-right-16 sm:-right-8 lg:right-0'
      } top-0 bottom-0 w-64 sm:w-80 lg:w-96 select-none z-0 overflow-hidden opacity-35 sm:opacity-45 ${className}`}
      aria-hidden="true"
    >
      <div
        className={`relative w-full h-full ${
          isLeft ? '' : 'scale-x-[-1]'
        } animate-jungle-sway-slow origin-bottom`}
      >
        <Image
          src="/images/ancient_banyan_tree.jpg"
          alt="" aria-hidden
          fill
          className="object-contain object-bottom mix-blend-multiply"
          sizes="(max-width: 768px) 250px, 380px"
        />
      </div>
    </div>
  );
}

/**
 * Historic Ranthambore Lake Ruin & Sandstone Pavilion Backdrop
 * Matches Padam Talao and Rajbagh Palace ruins surrounded by forest
 */
export function RanthamboreRuinsBackdrop({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 select-none z-0 overflow-hidden opacity-20 sm:opacity-25 ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-full h-full">
        <Image
          src="/images/ranthambore_ancient_ruin.jpg"
          alt="" aria-hidden
          fill
          className="object-cover object-center mix-blend-multiply"
        />
        {/* Soft edge feathering so it blends into white/light section background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
      </div>
    </div>
  );
}

/**
 * Panoramic Aravalli Cliffs & Safari Savannah Valley Backdrop
 * Matches the sweeping Ranthambore mountain plateaus and tiger grassland tracks
 */
export function AravalliLandscapeBackdrop({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 select-none z-0 overflow-hidden opacity-20 sm:opacity-25 ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-full h-full">
        <Image
          src="/images/aravalli_safari_plateau.jpg"
          alt="" aria-hidden
          fill
          className="object-cover object-center mix-blend-multiply"
        />
        {/* Soft edge feathering */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f8f5] via-transparent to-[#f4f8f5]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f8f5] via-transparent to-[#f4f8f5]" />
      </div>
    </div>
  );
}

