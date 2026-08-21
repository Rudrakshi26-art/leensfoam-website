import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal.js';

import StatsMarquee from '../components/StatsMarquee.jsx';
import BrandCarousel from '../components/BrandCarousel.jsx';

export default function Home() {
  useReveal();

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero" id="home">

        {/* =================================================
            TWO-COLUMN HERO LAYOUT
            Left  = text (always unobstructed)
            Right = 3D roller + orbit visual (contained,
                    can never overlap the left column)
        ================================================= */}

        <div className="hero-grid">

          {/* ----------------- LEFT: TEXT ----------------- */}

          <div className="hero-text">

            <div className="hero-eyebrow mono">
              MANUFACTURING SINCE 1982 · VASAI, MAHARASHTRA
            </div>

            <h1 className="reveal">
              Every stroke starts <em>with the roller.</em>
            </h1>

            <p className="hero-sub reveal">
              Leensfoam builds foam and fabric paint rollers for the painters,
              contractors and dealers who can't afford a bad finish. 140+ products,
              engineered in-house, shipped across 15+ Indian states.
            </p>

            <div className="hero-actions reveal">

              <Link
                to="/products"
                className="btn-solid"
              >
                Explore the range →
              </Link>

              <Link
                to="/about"
                className="btn-ghost"
              >
                Our story ↓
              </Link>

            </div>

          </div>


          {/* ----------------- RIGHT: 3D VISUAL ----------------- */}

          <div className="hero-visual">

            {/* =============================================
                ROLLER VISUAL (static image, light CSS motion)
            ============================================= */}

            <img
              src="/assets/roller-hero.png"
              alt="Leensfoam premium foam paint roller"
              className="hero-roller-img"
            />

          </div>

        </div>


        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <div className="scroll-cue">

          <div className="scroll-line"></div>

          SCROLL

        </div>

      </section>


      {/* =====================================================
          STATS MARQUEE
      ===================================================== */}

      <StatsMarquee />


      {/* =====================================================
          FULL RANGE
      ===================================================== */}

      <section>

        <div className="section-head reveal">

          <div>

            <span className="section-eyebrow">
              THE FULL RANGE
            </span>

            <h2>
              Rollers built for every surface, every job.
            </h2>

          </div>

          <p>
            From soft foam finishes on drywall to heavy-nap fabric rollers
            for textured exteriors — see the full catalogue and filter by
            category.
          </p>

        </div>


        <div className="reveal">

          <Link
            to="/products"
            className="btn-solid"
          >
            View all products
          </Link>

        </div>

      </section>


      {/* =====================================================
          CRAFT / ABOUT PREVIEW
      ===================================================== */}

      <section id="craft">

        <div className="craft reveal">

          <div className="craft-grid">

            {/* LEFT CONTENT */}

            <div>

              <h2>
                Built on experience.{' '}
                <em>Driven by quality.</em>
              </h2>

              <p>
                Founded in 2000, Leensfoam was shaped by expertise going back
                to 1982 — long before it was a company, it was a craft. We
                import raw materials from Bengaluru, Mumbai and Istanbul, and
                manufacture every roller in-house.
              </p>

              <p>
                67+ staff, 22+ years of experience, 140+ products,
                distribution across 15+ Indian states.
              </p>

              <div style={{ marginTop: '30px' }}>

                <Link
                  to="/about"
                  className="btn-ghost"
                >
                  Read our full story →
                </Link>

              </div>

            </div>


            {/* RIGHT CRAFT LIST */}

            <div className="craft-list">

              <div className="craft-item">

                <span className="num mono">
                  01
                </span>

                <div>

                  <h4>
                    Premium raw materials
                  </h4>

                  <p>
                    Sourced from trusted global suppliers,
                    checked before production begins.
                  </p>

                </div>

              </div>


              <div className="craft-item">

                <span className="num mono">
                  02
                </span>

                <div>

                  <h4>
                    Advanced manufacturing
                  </h4>

                  <p>
                    Modern machinery with quality checks
                    at every stage of the line.
                  </p>

                </div>

              </div>


              <div className="craft-item">

                <span className="num mono">
                  03
                </span>

                <div>

                  <h4>
                    Pan-India distribution
                  </h4>

                  <p>
                    Reaching dealers and contractors through
                    a trusted network nationwide.
                  </p>

                </div>

              </div>


              <div className="craft-item">

                <span className="num mono">
                  04
                </span>

                <div>

                  <h4>
                    Customer-first approach
                  </h4>

                  <p>
                    Same-day availability for standard products,
                    backed by real relationships.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BRANDS WE'VE EMPOWERED
      ===================================================== */}

      <BrandCarousel />


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="cta-band">

        <div className="reveal">

          <span
            className="section-eyebrow"
            style={{
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            GET IN TOUCH
          </span>


          <h2>

            Ready to stock rollers that{' '}

            <em
              style={{
                color: 'var(--orange)',
                fontStyle: 'normal',
              }}
            >
              actually perform?
            </em>

          </h2>


          <Link
            to="/contact"
            className="btn-solid"
          >
            Request the dealer catalogue
          </Link>

        </div>

      </section>

    </>
  );
}