import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact-footer">
      <div className="foot-grid">
        <div className="foot-brand">
          <img src="/assets/logo.png" alt="Leensfoam logo" />
          <p>
            Leading manufacturer of premium fabric and foam painting rollers
            since 2000, built on expertise dating back to 1982.
          </p>
        </div>

        <div>
          <h5>COMPANY</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>

        <div>
          <h5>PRODUCTS</h5>
          <ul>
            <li><Link to="/products">Foam Rollers</Link></li>
            <li><Link to="/products">Fabric Rollers</Link></li>
            <li><Link to="/products">Specialty Rollers</Link></li>
          </ul>
        </div>

        <div>
          <h5>CONTACT</h5>
          <ul>
            <li><a href="tel:+919888887978">+91 98888 87978</a></li>
            <li><a href="mailto:indrajit@leensfoam.com">indrajit@leensfoam.com</a></li>
            <li><a href="#">Village Waliv, Vasai East, Maharashtra 401208</a></li>
          </ul>
        </div>
      </div>

      <div className="foot-bottom">
        <span>© 2026 Leensfoam Private Limited. All rights reserved.</span>
      </div>
    </footer>
  );
}
