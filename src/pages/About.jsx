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
    title: '67+ staff, 140+ products, 15+ states',
    body: 'A full range of foam and fabric rollers, manufactured in-house with imported raw materials and distributed to dealers and contractors across India.',
  },
];

export default function About() {
  useReveal();

  return (
    <>
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

      <section>
        <div className="section-head reveal">
          <div>
            <span className="section-eyebrow">WHY LEENSFOAM</span>
            <h2>Quality in every roll.</h2>
          </div>
        </div>
        <div className="why-grid reveal">
          <div className="why-card">
            <div className="ic"></div>
            <h4>Quality &amp; Performance</h4>
            <p>Rollers with excellent paint pickup and release, built to hold their shape from the first stroke to the last.</p>
          </div>
          <div className="why-card">
            <div className="ic"></div>
            <h4>Easy to Use</h4>
            <p>Balanced for smoother application and effortless, streak-free coverage on any surface.</p>
          </div>
          <div className="why-card">
            <div className="ic"></div>
            <h4>Premium Raw Materials</h4>
            <p>Sourced from trusted global partners, checked for consistency before they reach the line.</p>
          </div>
          <div className="why-card">
            <div className="ic"></div>
            <h4>Manufacturing Guarantee</h4>
            <p>Every batch is quality-checked — what we manufacture is what we stand behind.</p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="reveal">
          <span className="section-eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
            GET IN TOUCH
          </span>
          <h2>
            Ready to stock rollers that{' '}
            <em style={{ color: 'var(--orange)', fontStyle: 'normal' }}>actually perform?</em>
          </h2>
          <Link to="/contact" className="btn-solid">Request the dealer catalogue</Link>
        </div>
      </section>
    </>
  );
}
