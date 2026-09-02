import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal.js';

const TIMELINE = [
  {
    yr: '1982',
    title: 'Where the expertise began',
    body: 'Long before Leensfoam existed as a company, the foundational know-how in foam and fabric roller manufacturing was already being built — the craft that everything since is rooted in.',
  },
  {
    yr: '2000',
    title: 'Leensfoam Private Limited founded',
    body: 'Leensfoam was established in Vasai, Maharashtra, turning two decades of hands-on expertise into a dedicated roller manufacturing business.',
  },
  {
    yr: 'Today',
    title:  '140+ products, 15+ states',
    body: 'A full range of foam and fabric rollers, manufactured in-house with imported raw materials and distributed to dealers and contractors across India.',
  },
];

export default function About() {
  useReveal();

  return (
    <>
      {/* PAGE HEADER */}

      <div className="page-header">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <span>Why Leensfoam</span>
        </div>

        <h1>Built on experience. Driven by quality.</h1>

        <p>
          Every Leensfoam roller carries expertise going back to 1982 — long
          before it was a company, it was a craft.
        </p>
      </div>

{/* =====================================================
    ENGINEERED FOR BETTER PERFORMANCE
===================================================== */}

<section className="precision-section">
  <div className="precision-container">

    <div className="precision-intro reveal">
      <span className="section-eyebrow">
        MADE WITH PRECISION
      </span>

      <h2>
        Engineered for Better Performance.
      </h2>

      <p>
        Every component of a Leensfoam roller is designed with
        purpose — from the handle and frame to the core and
        premium fabric.
      </p>
    </div>

    <div className="precision-image reveal">
      <img
        src="/assets/roller expload.png"
        alt="Leensfoam roller components"
      />
    </div>

  </div>
</section>

{/* =====================================================
    OUR STORY — COMMENTED OUT
=====================================================

<section style={{ paddingTop: 0 }}>
  <div className="section-head reveal">
    <div>
      <span className="section-eyebrow">OUR STORY</span>
      <h2>From craft to company.</h2>
    </div>

    <p>
      We import raw materials from Bengaluru, Mumbai and Istanbul, and
      manufacture every roller in-house — so quality is checked at
      every stage, not just the last one.
    </p>
  </div>

  <div className="reveal">
    <div className="timeline">
      {TIMELINE.map((t) => (
        <div className="timeline-item" key={t.yr}>
          <span className="yr">{t.yr}</span>

          <div>
            <h4>{t.title}</h4>
            <p>{t.body}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

===================================================== */}

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section>
        <div className="section-head reveal">
          <div>
            <span className="section-eyebrow">WHY LEENSFOAM</span>
            <h2>Why choose us</h2>
          </div>
        </div>

        <div className="why-grid reveal">

          {/* PREMIUM QUALITY FABRICS */}

          <div className="why-card">
            <div className="ic">
              <img
                src="/assets/icon/premium-quality.png"
                alt=""
              />
            </div>

            <h4>Premium Quality Fabrics</h4>

            <p>
              Engineered for excellent paint pickup, smooth application and a
              professional finish.
            </p>
          </div>

          {/* MADE WITH PRIDE */}

          <div className="why-card">
            <div className="ic">
              <img
                src="/assets/icon/made-with-pride.png"
                alt=""
              />
            </div>

            <h4>Made with Pride</h4>

            <p>
              Every roller is manufactured with care, precision and a
              commitment to delivering dependable quality.
            </p>
          </div>

          {/* CONSISTENT PERFORMANCE */}

          <div className="why-card">
            <div className="ic">
              <img
                src="/assets/icon/consistent-performance.png"
                alt=""
              />
            </div>

            <h4>Consistent Performance</h4>

            <p>
              Strict quality control ensures uniform performance and
              consistency from batch to batch.
            </p>
          </div>

          {/* BUILT FOR PROFESSIONALS */}

          <div className="why-card">
            <div className="ic">
              <img
                src="/assets/icon/trusted-partner.png"
                alt=""
              />
            </div>

            <h4>Built for Professionals</h4>

            <p>
              Designed to meet the demanding requirements of painters,
              contractors, retailers and paint companies.
            </p>
          </div>

          {/* RELIABLE SUPPLY */}

          <div className="why-card">
            <div className="ic">
              <img
                src="/assets/icon/reliable-supply.png"
                alt=""
              />
            </div>

            <h4>Reliable Supply</h4>

            <p>
              Strong manufacturing capabilities help us deliver quality
              products on time, across India.
            </p>
          </div>

          {/* MANUFACTURING EXPERTISE */}

          <div className="why-card">
            <div className="ic">
              <img
                src="/assets/icon/manufacturing.png"
                alt=""
              />
            </div>

            <h4>Manufacturing Expertise</h4>

            <p>
              Our experience and manufacturing know-how allow us to
              continuously improve our products and processes.
            </p>
          </div>

          {/* MADE IN INDIA */}

          <div className="why-card">
            <div className="ic">
              <img
                src="/assets/icon/made-in-india.png"
                alt=""
              />
            </div>

            <h4>Made in India</h4>

            <p>
              Proudly manufactured in India, combining local expertise with
              professional manufacturing standards.
            </p>
          </div>

          {/* TRUSTED PARTNER */}

          <div className="why-card">
            <div className="ic">
              <img
                src="/assets/icon/partnership.png"
                alt=""
              />
            </div>

            <h4>Your Trusted Manufacturing Partner</h4>

            <p>
              We don't just supply painting rollers—we build long-term
              partnerships through quality, consistency and service.
            </p>
          </div>

        </div>
      </section>

{/* =====================================================
    BUILT TO SUPPLY. BUILT TO SCALE.
===================================================== */}

<section className="supply-section">
  <div className="supply-container">

    {/* LEFT SIDE */}
    <div className="supply-intro reveal">
      <span className="section-eyebrow">
        BUILT TO SUPPLY. BUILT TO SCALE.
      </span>

      <h2>
        Your Reliable Manufacturing
        <br className="desktop-break" />
        Partner for Growth.
      </h2>

      <Link to="/contact" className="supply-btn">
        <span>TALK TO OUR TEAM</span>
        <span className="supply-arrow">→</span>
      </Link>
    </div>

    {/* RIGHT SIDE */}
    <div className="supply-grid reveal">

      <div className="supply-card">
        <div className="supply-icon">
          <img
            src="/assets/icon/consistent-production.png"
            alt="Consistent production"
          />
        </div>

        <div className="supply-content">
          <h4>CONSISTENT<br />PRODUCTION</h4>
          <p>
            Reliable manufacturing for recurring requirements.
          </p>
        </div>
      </div>

      <div className="supply-card">
        <div className="supply-icon">
          <img
            src="/assets/icon/bulk-capability.png"
            alt="Bulk capability"
          />
        </div>

        <div className="supply-content">
          <h4>BULK<br />CAPABILITY</h4>
          <p>
            Designed to support distributors, paint companies
            and large-volume customers.
          </p>
        </div>
      </div>

      <div className="supply-card">
        <div className="supply-icon">
          <img
            src="/assets/icon/pan-india-supply.png"
            alt="Pan India supply"
          />
        </div>

        <div className="supply-content">
          <h4>PAN-INDIA<br />SUPPLY</h4>
          <p>
            Dependable dispatch & logistics to customers
            across India.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

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