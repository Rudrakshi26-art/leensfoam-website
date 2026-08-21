import { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal.js';
import ProductCard from '../components/ProductCard.jsx';
import products from '../data/products.js';

const FILTERS = [
  { key: 'all', label: 'All Products' },
  { key: 'foam', label: 'Foam Rollers' },
  { key: 'interior', label: 'Fabric — Interior' },
  { key: 'exterior', label: 'Fabric — Exterior' },
  { key: 'specialty', label: 'Specialty' },
];

export default function Products() {
  const [filter, setFilter] = useState('all');

  // re-run reveal whenever the filtered list changes so new cards animate in
  useReveal([filter]);

  const visible = products.filter((p) => filter === 'all' || p.cat === filter);

  return (
    <>
      <div className="page-header">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <span>Products</span>
        </div>
        <h1>Rollers built for every surface, every job.</h1>
        <p>
          From soft foam finishes on drywall to heavy-nap fabric rollers for
          textured exteriors — filter by category to find the right nap for
          the job.
        </p>
      </div>

      <section style={{ paddingTop: 0 }}>
        <div className="filter-row reveal">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${filter === f.key ? ' active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {visible.map((p, i) => (
            <ProductCard product={p} index={i} key={p.id} />
          ))}
        </div>

        {visible.length === 0 && (
          <p style={{ color: 'var(--muted)' }}>No products in this category yet.</p>
        )}
      </section>
    </>
  );
}
