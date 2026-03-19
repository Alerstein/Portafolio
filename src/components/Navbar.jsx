import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Inicio', href: '#home' },
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#home" className="logo">
                    Alerstech<span>.</span>
                </a>

                {/* Desktop Menu */}
                <nav className="desktop-menu">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={24} color="var(--text-primary)" /> : <Menu size={24} color="var(--text-primary)" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu animate-fade-in">
                    <nav className="mobile-nav">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
