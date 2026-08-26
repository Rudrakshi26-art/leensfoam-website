const STATS = [
  { n: '40+', l: 'Years of Experience', icon: 'shield' },
  { n: '500+', l: 'Total Products', icon: 'roller' },
  { n: '20', l: 'Sales in States', icon: 'money' },
  { n: '1982', l: 'Where it Began', icon: 'factory' },
  { n: '67+', l: 'Staff Members', icon: 'people' },
];

function StatIcon({ type }) {
  const common = {
    width: 34,
    height: 34,
    viewBox: '0 0 34 34',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
  };

  if (type === 'shield') {
    return (
      <svg {...common}>
        <path d="M17 3 28 7v8c0 7-4.7 12.7-11 16C10.7 27.7 6 22 6 15V7l11-4Z" stroke="currentColor" strokeWidth="2" />
        <path d="m11.5 16.5 3.2 3.2 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'roller') {
    return (
      <svg {...common}>
        <rect x="5" y="8" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M25 12h4M12 16v12M9 28h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'money') {
    return (
      <svg {...common}>
        <path d="M26 13a10 10 0 1 0-1 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 7v7h-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 9v12M20 12.5c0-1.5-1.3-2.5-3-2.5s-3 1-3 2.5 1.3 2.3 3 2.5 3 1 3 2.5-1.3 2.5-3 2.5-3-1-3-2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === 'factory') {
    return (
      <svg {...common}>
        <path d="M5 28V13l8 5v-5l8 5v-5l8 5v10H5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 23h3M16 23h3M23 23h3M10 8h3M21 5h3v8h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'people') {
    return (
      <svg {...common}>
        <circle cx="17" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M9 28c.5-6 3.2-9 8-9s7.5 3 8 9M7 16a3 3 0 1 0 0 6M27 16a3 3 0 1 1 0 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="m17 4 3.2 7 7.8.8-5.8 5.1 1.7 7.6-6.9-4-6.9 4 1.7-7.6L6 11.8l7.8-.8L17 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export default function StatsMarquee() {
  const items = [...STATS, ...STATS];

  return (
    <div className="stats-strip">
      <div className="stats-track">
        {items.map((s, i) => (
          <div className="stat-item" key={`${s.n}-${s.l}-${i}`}>
            <span className="stat-icon">
              <StatIcon type={s.icon} />
            </span>
            <b>{s.n}</b>
            <span className="stat-label">{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}