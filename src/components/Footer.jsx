import { Github, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <a href="#home" className="footer-logo">
                        Dev<span className="text-accent">.</span>
                    </a>
                    <p className="footer-tagline">
                        Construyendo soluciones web modernas e interactivas.
                    </p>
                </div>

                <div className="footer-social">
                    <a href="#" className="social-link" aria-label="Github">
                        <Github size={20} />
                    </a>
                    <a href="#" className="social-link" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="social-link" aria-label="Twitter">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Martín Palma. Todos los derechos reservados.</p>
                <p className="footer-credit">
                    Diseñado y desarrollado con <span className="text-accent">♥</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
