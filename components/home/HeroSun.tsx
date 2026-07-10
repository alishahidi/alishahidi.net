/**
 * The persistent Star, rendered as the hero centerpiece:
 * a breathing gold Sun with layered corona and dashed orbit rings, with
 * small bodies riding the rings. Pure CSS/SVG so it renders statically and
 * animates without JS — the same star that sits at the center of /explore.
 */
export function HeroSun({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative aspect-square w-full ${className}`}
    >
      {/* orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="-210 -130 420 260" className="h-auto w-full">
          {[74, 116, 162, 205].map((rx, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="0"
              rx={rx}
              ry={rx * 0.34}
              fill="none"
              stroke="#FDB813"
              strokeOpacity={0.5 - i * 0.09}
              strokeWidth={1.1 - i * 0.15}
              strokeDasharray="2 7"
              className={i % 2 === 0 ? 'orbit-spin' : 'orbit-spin-rev'}
              style={{
                ['--orbit-dur' as string]: `${42 + i * 14}s`,
                transformBox: 'fill-box',
                transformOrigin: 'center',
              }}
            />
          ))}
          {/* small bodies riding the rings */}
          <circle cx="116" cy="0" r="3.2" fill="#9D7BFF">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="-162" cy="0" r="2.6" fill="#48DFE3" />
          <circle cx="0" cy="-70" r="2.4" fill="#57D9A3" />
          <circle cx="74" cy="0" r="2.2" fill="#FFC24B" />
        </svg>
      </div>

      {/* sun glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="sun-breathe relative">
          <div
            className="h-28 w-28 rounded-full sm:h-36 sm:w-36"
            style={{
              background:
                'radial-gradient(circle at 38% 34%, #FFF3CE 0%, #FFE08A 24%, #FDB813 52%, #FF8C00 82%, #E8760B 100%)',
              boxShadow:
                '0 0 50px 12px rgba(253,184,19,0.55), 0 0 130px 36px rgba(253,184,19,0.30), 0 0 260px 96px rgba(253,184,19,0.12)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
