export default function ProductCard({ product, index = 0 }) {
  const { id, tag, name, desc, c1, c2 } = product;

  return (
    <div className="product-card reveal" style={{ transitionDelay: `${index * 40}ms` }}>
      <div
        className="product-visual"
        style={{ background: `linear-gradient(135deg, ${c1}22, ${c2}33)` }}
      >
        <div
          className="product-roller"
          style={{ background: `linear-gradient(90deg, ${c1}, ${c2})` }}
        />
      </div>
      <span className="product-tag mono" style={{ background: c1 }}>{tag}</span>
      <span className="product-code mono">{id.toUpperCase()}</span>
      <h3>{name}</h3>
      <p>{desc}</p>
      <span className="product-link">
        View details
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  );
}
