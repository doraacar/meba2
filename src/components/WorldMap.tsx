import { motion } from 'framer-motion';

interface Region {
  id: number;
  name: string;
  key: string;
  color: string;
  x: number;
  y: number;
  isHub: boolean;
}

interface WorldMapProps {
  regions: Region[];
  activeRegion: number | null;
  isMobile: boolean;
}

export default function WorldMap({ regions, activeRegion, isMobile }: WorldMapProps) {
  const brazilHub = regions.find(r => r.isHub);
  const destinations = regions.filter(r => !r.isHub);

  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.6" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>

        <rect width="1000" height="600" fill="#0f172a" />
        <rect width="1000" height="600" fill="url(#gridPattern)" />

        <g opacity="0.6">
          <path
            d="M 200 50 L 220 45 L 240 48 L 260 52 L 280 55 L 300 58 L 320 60 L 340 62 L 360 64 L 380 65 L 400 66 L 420 67 L 440 68 L 460 70 L 480 72 L 500 75 L 520 78 L 540 82 L 560 85 L 580 88 L 600 90 L 620 88 L 640 85 L 660 82 L 680 78 L 700 75 L 720 72 L 740 70 L 760 68 L 780 65 L 800 60"
            fill="none"
            stroke="#334155"
            strokeWidth="0.5"
          />
          <path
            d="M 200 300 L 220 298 L 240 296 L 260 294 L 280 292 L 300 290 L 320 288 L 340 286 L 360 284 L 380 282 L 400 280 L 420 282 L 440 284 L 460 286 L 480 288 L 500 290 L 520 292 L 540 294 L 560 296 L 580 298 L 600 300 L 620 298 L 640 296 L 660 294 L 680 292 L 700 290 L 720 288 L 740 286 L 760 284 L 780 282 L 800 280"
            fill="none"
            stroke="#334155"
            strokeWidth="0.5"
          />
        </g>

        <g id="worldMap" opacity="0.5" fill="url(#mapGradient)" stroke="#475569" strokeWidth="1">
          <path d="M 180 220 L 200 210 L 220 205 L 250 200 L 280 205 L 300 210 L 310 230 L 305 250 L 290 260 L 270 265 L 250 268 L 230 265 L 210 255 L 190 240 Z" />

          <path d="M 240 320 L 260 310 L 280 308 L 300 312 L 320 320 L 330 340 L 340 360 L 350 380 L 355 400 L 350 420 L 340 430 L 320 435 L 300 438 L 280 435 L 260 428 L 245 415 L 235 395 L 232 375 L 235 355 L 238 335 Z" />

          <path d="M 280 350 L 295 345 L 310 343 L 325 345 L 340 350 L 350 365 L 355 380 L 352 395 L 345 405 L 330 410 L 315 412 L 300 410 L 285 405 L 275 390 L 272 375 L 275 360 Z" />

          <path d="M 420 160 L 450 155 L 480 158 L 510 165 L 540 175 L 560 185 L 575 200 L 580 220 L 575 240 L 560 255 L 540 265 L 515 270 L 490 268 L 465 260 L 445 248 L 430 230 L 422 210 L 420 190 Z" />

          <path d="M 450 250 L 470 245 L 490 243 L 510 245 L 530 250 L 545 260 L 555 275 L 560 295 L 555 315 L 545 330 L 530 340 L 510 345 L 490 343 L 470 335 L 455 320 L 448 300 L 448 280 Z" />

          <path d="M 570 250 L 590 248 L 610 250 L 625 255 L 635 265 L 640 280 L 638 295 L 630 305 L 615 310 L 595 308 L 580 300 L 572 285 L 570 270 Z" />

          <path d="M 650 200 L 670 198 L 690 200 L 710 205 L 730 212 L 748 220 L 760 232 L 768 248 L 770 265 L 765 282 L 755 295 L 740 305 L 720 310 L 700 312 L 680 310 L 665 303 L 652 290 L 645 275 L 642 258 L 645 240 L 648 220 Z" />

          <path d="M 720 240 L 740 235 L 760 233 L 780 235 L 800 240 L 815 250 L 825 265 L 828 282 L 825 300 L 815 315 L 800 325 L 780 330 L 760 328 L 740 320 L 728 305 L 722 288 L 720 270 L 720 255 Z" />

          <path d="M 775 270 L 795 268 L 815 270 L 830 277 L 840 288 L 843 302 L 840 316 L 830 326 L 815 330 L 795 328 L 780 320 L 773 305 L 772 290 Z" />

          <path d="M 340 420 L 360 415 L 380 418 L 395 425 L 405 438 L 408 452 L 405 466 L 395 475 L 380 478 L 360 475 L 345 468 L 338 455 L 337 440 Z" />

          <path d="M 500 350 L 520 348 L 540 352 L 555 360 L 565 372 L 568 388 L 565 402 L 555 413 L 540 418 L 520 415 L 505 408 L 498 395 L 497 378 L 500 363 Z" />
        </g>

        {brazilHub && destinations.map((dest) => {
          const isActive = activeRegion === null || activeRegion === brazilHub.id || activeRegion === dest.id;
          const isHighlighted = activeRegion === dest.id;

          return (
            <g key={dest.key}>
              <motion.path
                d={`M ${brazilHub.x} ${brazilHub.y} Q ${(brazilHub.x + dest.x) / 2} ${Math.min(brazilHub.y, dest.y) - 80} ${dest.x} ${dest.y}`}
                fill="none"
                stroke={isHighlighted ? dest.color : brazilHub.color}
                strokeWidth={isHighlighted ? 3 : 2}
                opacity={isActive ? 0.6 : 0.15}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: isActive ? 0.6 : 0.15,
                  strokeWidth: isHighlighted ? 3 : 2,
                }}
                transition={{
                  pathLength: { duration: isMobile ? 1 : 2, delay: isMobile ? 0 : (dest.id * 0.3) },
                  opacity: { duration: 0.4 },
                  strokeWidth: { duration: 0.3 },
                }}
                strokeDasharray="8 4"
                filter="url(#glow)"
              />

              {!isMobile && (
                <motion.circle
                  r="3"
                  fill={isHighlighted ? dest.color : brazilHub.color}
                  opacity={isActive ? 0.8 : 0.2}
                  filter="url(#glow)"
                >
                  <animateMotion
                    dur={`${4 + dest.id}s`}
                    repeatCount="indefinite"
                    path={`M ${brazilHub.x} ${brazilHub.y} Q ${(brazilHub.x + dest.x) / 2} ${Math.min(brazilHub.y, dest.y) - 80} ${dest.x} ${dest.y}`}
                  />
                </motion.circle>
              )}
            </g>
          );
        })}

        {regions.map((region) => {
          const isActive = activeRegion === null || activeRegion === region.id;
          const isHighlighted = activeRegion === region.id;

          return (
            <g key={region.key}>
              <motion.circle
                cx={region.x}
                cy={region.y}
                r={isHighlighted ? 14 : region.isHub ? 12 : 10}
                fill={region.color}
                opacity={isActive ? 0.9 : 0.3}
                animate={!isMobile ? {
                  r: isHighlighted ? [14, 18, 14] : region.isHub ? [12, 15, 12] : [10, 12, 10],
                  opacity: isActive ? [0.9, 1, 0.9] : 0.3,
                } : undefined}
                transition={!isMobile ? {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                } : undefined}
                filter={isHighlighted ? 'url(#strongGlow)' : 'url(#glow)'}
              />

              {!isMobile && isHighlighted && (
                <motion.circle
                  cx={region.x}
                  cy={region.y}
                  r={14}
                  fill="none"
                  stroke={region.color}
                  strokeWidth="2"
                  opacity="0.6"
                  animate={{ r: [14, 30], opacity: [0.6, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              )}

              <motion.circle
                cx={region.x}
                cy={region.y}
                r={region.isHub ? 18 : 15}
                fill="none"
                stroke={region.color}
                strokeWidth="1.5"
                opacity={isActive ? 0.4 : 0.1}
                animate={{
                  opacity: isActive ? 0.4 : 0.1,
                }}
                transition={{ duration: 0.4 }}
              />

              <motion.g
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isActive ? 1 : 0.3,
                }}
                transition={{ delay: isMobile ? 0 : (0.5 + region.id * 0.1), duration: 0.5 }}
              >
                <rect
                  x={region.x - 55}
                  y={region.y - 45}
                  width="110"
                  height="28"
                  rx="6"
                  fill="rgba(15, 23, 42, 0.95)"
                  stroke={isHighlighted ? region.color : '#475569'}
                  strokeWidth={isHighlighted ? 2 : 1}
                  filter="url(#glow)"
                />
                <text
                  x={region.x}
                  y={region.y - 26}
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="600"
                  className="select-none"
                >
                  {region.name}
                </text>
              </motion.g>

              {region.isHub && (
                <motion.text
                  x={region.x}
                  y={region.y + 5}
                  textAnchor="middle"
                  fill="white"
                  fontSize="8"
                  fontWeight="700"
                  opacity={isActive ? 0.9 : 0.3}
                  className="select-none"
                >
                  HUB
                </motion.text>
              )}
            </g>
          );
        })}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: isMobile ? 0 : 1, duration: isMobile ? 0.3 : 1 }}
        >
          <text x="20" y="30" fill="#64748b" fontSize="11" fontWeight="500">
            Global Trade Network
          </text>
          <text x="20" y="580" fill="#475569" fontSize="9">
            Meba Brasil - Sugar Export Routes
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
