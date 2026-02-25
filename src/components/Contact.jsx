import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title"><span className="text-accent">Contáctame</span></h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>¿Tienes un proyecto en mente?</h3>
                        <p className="contact-description">
                            Actualmente estoy abierto a nuevas oportunidades de trabajo y proyectos freelance.
                            Si tienes una pregunta o simplemente quieres saludar, intentaré responderte lo antes posible.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-wrapper">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:hola@ejemplo.com">hola@ejemplo.com</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-wrapper">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4>Ubicación</h4>
                                    <p>Remoto, Global</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" placeholder="Tu nombre completo" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="tu@email.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" rows="5" placeholder="¿Cómo puedo ayudarte?" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Enviar Mensaje <Send size={20} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
