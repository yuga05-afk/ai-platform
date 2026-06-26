import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#hero" className="footer-logo" aria-label="NeuralOps home">
            NEURAL<span>OPS</span>
          </a>
          <p className="footer-tagline">
            Autonomous AI infrastructure for teams that ship.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="footer-col">
            <h4 className="footer-heading">Product</h4>
            <ul role="list">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Roadmap</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Developers</h4>
            <ul role="list">
              <li><a href="#">Docs</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">SDKs</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul role="list">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-legal">
            © {new Date().getFullYear()} NeuralOps Inc. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
