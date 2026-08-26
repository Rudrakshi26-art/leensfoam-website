import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal.js';
import StatsMarquee from '../components/StatsMarquee.jsx';
import BrandCarousel from '../components/BrandCarousel.jsx';

function FeatureIcon({ type }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 28 28',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
  };

  if (type === 'roller') {
    return (
      <svg {...common}>
        <rect x="4" y="6" width="16" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 9.5h4M10 13v8M7.5 21h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'paint') {
    return (
      <svg {...common}>
        <path d="M7 7h11a3 3 0 0 1 3 3v2H7V7Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 12v9M12 12v5c0 2 2 3 4 1v-3c0-2 2-3 4-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'durable') {
    return (
      <svg {...common}>
        <path d="m9 18 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M8 12 6 10a4 4 0 0 1 6-6l2 2M20 16l2 2a4 4 0 0 1-6 6l-2-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M9 13v9H6v-9h3Zm0 2h4l2-6c.3-1-.4-2-1.4-2h-.5L12 11H9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M15 10h4c1.5 0 2.5 1.2 2.1 2.6l-1 4.2c-.3 1.3-1.4 2.2-2.7 2.2H15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  useReveal();

  return (
    <>
      <section className="hero hero-light" id="home">
        <div className="hero-grid">

          <div className="hero-text">
           <h1 className="reveal">
  Every stroke starts{' '}
  <span className="logo-gradient">with the roller.</span>
</h1>

            <p className="hero-sub reveal">
              Leensfoam builds foam and fabric paint rollers for the painters,
              contractors and dealers who can't afford a bad finish. 140+ products,
              engineered in-house, shipped across 15+ Indian states.
            </p>

            <div className="hero-features reveal">
              <div className="hero-feature">
                <span className="feature-icon"><FeatureIcon type="roller" /></span>
                <span>Smooth<br />Finish</span>
              </div>

              <div className="feature-divider" />

              <div className="hero-feature">
                <span className="feature-icon"><FeatureIcon type="paint" /></span>
                <span>High Paint<br />Absorption</span>
              </div>

              <div className="feature-divider" />

              <div className="hero-feature">
                <span className="feature-icon"><FeatureIcon type="durable" /></span>
                <span>Durable &amp;<br />Long Lasting</span>
              </div>

              <div className="feature-divider" />

              <div className="hero-feature">
                <span className="feature-icon"><FeatureIcon type="thumb" /></span>
                <span>Comfortable<br />Grip</span>
              </div>
            </div>

            <div className="hero-actions reveal">
              <Link to="/products" className="btn-solid">
                Explore the range →
              </Link>

              <Link to="/about" className="btn-ghost">
                Our story ↓
              </Link>
            </div>

            <div className="scroll-cue">
              <div className="scroll-line" />
              SCROLL
            </div>
          </div>

          <div className="hero-visual reveal">
            <img
              src="/assets/roller-hero.png"
              alt="Two Leensfoam paint rollers"
              className="hero-roller-img"
            />
          </div>
        </div>
      </section>

      <StatsMarquee />

      <section>
        <div className="section-head reveal">
          <div>
            <span className="section-eyebrow">THE FULL RANGE</span>
            <h2>Rollers built for every surface, every job.</h2>
          </div>

          <p>
            From soft foam finishes on drywall to heavy-nap fabric rollers
            for textured exteriors — see the full catalogue and filter by
            category.
          </p>
        </div>

        <div className="reveal">
          <Link to="/products" className="btn-solid">
            View all products
          </Link>
        </div>
      </section>

      <section id="craft">
        <div className="craft reveal">
          <div className="craft-grid">
            <div>
              <h2>
                Built on experience. <em>Driven by quality.</em>
              </h2>

              <p>
                Founded in 2000, Leensfoam was shaped by expertise going back
                to 1982 — long before it was a company, it was a craft. We
                import raw materials from Bengaluru, Mumbai and Istanbul, and
                manufacture every roller in-house.
              </p>

              <p>
                67+ staff, 40+ years of experience, 500 + products,
                distribution across 20 Indian states.
              </p>

              <div style={{ marginTop: '30px' }}>
                <Link to="/about" className="btn-ghost">
                  Read our full story →
                </Link>
              </div>
            </div>

            <div className="craft-list">
              <div className="craft-item">
                <span className="num mono">01</span>
                <div>
                  <h4>Premium raw materials</h4>
                  <p>Sourced from trusted global suppliers, checked before production begins.</p>
                </div>
              </div>

              <div className="craft-item">
                <span className="num mono">02</span>
                <div>
                  <h4>Advanced manufacturing</h4>
                  <p>Modern machinery with quality checks at every stage of the line.</p>
                </div>
              </div>

              <div className="craft-item">
                <span className="num mono">03</span>
                <div>
                  <h4>Pan-India distribution</h4>
                  <p>Reaching dealers and contractors through a trusted network nationwide.</p>
                </div>
              </div>

              <div className="craft-item">
                <span className="num mono">04</span>
                <div>
                  <h4>Customer-first approach</h4>
                  <p>Same-day availability for standard products, backed by real relationships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandCarousel />

      <section className="cta-band">
        <div className="reveal">
          <span className="section-eyebrow cta-eyebrow">GET IN TOUCH</span>

          <h2>
            Ready to stock rollers that{' '}
            <em>actually perform?</em>
          </h2>

          <Link to="/contact" className="btn-solid">
            Request the dealer catalogue
          </Link>
        </div>
      </section>
    </>
  );
}