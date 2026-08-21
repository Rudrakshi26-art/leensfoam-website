const STATS = [
  { n: '67+', l: 'Staff Members' },
  { n: '22+', l: 'Years of Experience' },
  { n: '140+', l: 'Total Products' },
  { n: '15+', l: 'Sales in States' },
  { n: '1982', l: 'Where it Began' },
];

export default function StatsMarquee() {
  const items = [...STATS, ...STATS]; // duplicate for seamless loop

  return (
    <div className="stats-strip">
      <div className="stats-track">
        {items.map((s, i) => (
          <div className="stat-item" key={i}>
            <b>{s.n}</b>
            <span>{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
