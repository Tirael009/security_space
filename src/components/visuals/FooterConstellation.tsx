export default function FooterConstellation() {
  return (
    <div className="footer-constellation" aria-hidden="true">
      <svg className="footer-constellation__svg" viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(34,211,238,0.9)" />
            <stop offset="100%" stopColor="rgba(217,70,239,0.8)" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="rgba(34,211,238,0.7)" />
          </filter>
        </defs>

        {/* линии-соединения */}
        <g className="footer-constellation__lines" stroke="url(#g)" strokeWidth="1.2" fill="none">
          <line x1="80" y1="220" x2="260" y2="160" />
          <line x1="260" y1="160" x2="420" y2="210" />
          <line x1="420" y1="210" x2="620" y2="140" />
          <line x1="620" y1="140" x2="840" y2="180" />
          <line x1="840" y1="180" x2="1080" y2="120" />
        </g>

        {/* узлы */}
        <g className="footer-constellation__nodes" filter="url(#glow)">
          {[{x:80,y:220},{x:260,y:160},{x:420,y:210},{x:620,y:140},{x:840,y:180},{x:1080,y:120}]
            .map((n) => (
              <circle key={`${n.x}-${n.y}`} cx={n.x} cy={n.y} r="3.2" fill="url(#g)" />
          ))}
        </g>
      </svg>
    </div>
  );
}
