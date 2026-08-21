import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    isActive ? 'active' : undefined;

  return (
    <header
      style={{
        background: scrolled
          ? 'rgba(10,14,28,0.96)'
          : 'rgba(10,14,28,0.88)',
      }}
    >

      {/* Logo */}
      <NavLink
        to="/"
        className="brand"
        data-cursor="default"
      >
        <img
          src="/assets/logo.png"
          alt="Leensfoam logo"
        />

        <div className="brand-text">
          Leensfoam
          <span>PRIVATE LIMITED</span>
        </div>
      </NavLink>


      {/* Navigation */}
      <nav>

        <NavLink
          to="/"
          end
          className={linkClass}
          data-cursor="default"
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={linkClass}
          data-cursor="products"
        >
          Products
        </NavLink>

        <NavLink
          to="/about"
          className={linkClass}
          data-cursor="about"
        >
          Why Leensfoam
        </NavLink>

        <NavLink
          to="/contact"
          className={linkClass}
          data-cursor="contact"
        >
          Contact
        </NavLink>

      </nav>


      {/* Dealer CTA */}
      <NavLink
        to="/contact"
        className="cta-btn"
        data-cursor="dealer"
      >
        Become a Dealer →
      </NavLink>

    </header>
  );
}