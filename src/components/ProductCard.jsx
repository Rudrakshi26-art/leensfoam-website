const IMAGE_MAP = {
  'textured-exterior-roller-1788614148971.JPG': 'Textured Exterior Roller.JPG',
  'microfibre-interior-roller-1788614203451.JPG': 'Microfibre Interior Roller.JPG',
  'high-density-foam-roller-1788614352935.JPG': 'High-Density Foam Roller.JPG',
  'specialty-rollers-1788614335430.JPG': 'Specialty Rollers.JPG',
  'exterior-fabric-roller-1788614319070.JPG': 'Exterior Fabric Roller.JPG',
  'interior-fabric-roller-1788614298280.JPG': 'Interior Fabric Roller.JPG',
  'polyether-foam-roller-1788614272980.JPG': 'Polyether Foam Roller.JPG',
  'polyster-foam-roller-1788614397949.JPG': 'Polyster Foam Roller.JPG',
};

export default function ProductCard({ product, index = 0 }) {
  const {
    id,
    tag,
    name,
    description,
    desc,
    image,
    c1,
    c2,
  } = product;

  const frontendImage = IMAGE_MAP[image] || image || '';

  return (
    <div
      className="product-card reveal"
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div
        className="product-visual"
        style={{
          background: `linear-gradient(135deg, ${c1 || '#f5f5f5'}22, ${
            c2 || '#ffffff'
          }33)`,
        }}
      >
        {frontendImage && (
          <img
            src={`/assets/products/${encodeURIComponent(frontendImage)}`}
            alt={name || 'Product'}
            className="product-image"
          />
        )}
      </div>

      <span
        className="product-tag mono"
        style={{ background: c1 }}
      >
        {tag}
      </span>

      <span className="product-code mono">
        {String(id || '').toUpperCase()}
      </span>

      <h3>{name}</h3>

      <p>{description || desc}</p>

      <span className="product-link">
        View details
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  );
}