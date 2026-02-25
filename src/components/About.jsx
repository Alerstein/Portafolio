import { motion } from 'framer-motion';
import { Terminal, Layout, Code2, Database } from 'lucide-react';
import './About.css';

const About = () => {
    const skills = [
        { name: 'React', icon: <Layout size={20} /> },
        { name: 'Node.js', icon: <Terminal size={20} /> },
        { name: 'UI/UX', icon: <Code2 size={20} /> },
        { name: 'Bases de Datos', icon: <Database size={20} /> },
        { name: 'TypeScript', icon: <Terminal size={20} /> },
        { name: 'CSS/Tailwind', icon: <Layout size={20} /> },
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Sobre <span className="text-accent">Mí</span></h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            Soy un apasionado de la tecnología y el diseño. Me especializo en transformar problemas complejos en soluciones web elegantes e intuitivas.
                        </p>
                        <p>
                            Mi enfoque es la creación de interfaces de usuario rápidas, accesibles y estéticamente atractivas, respaldadas por código escalable. Cuando no estoy programando, me encontrarás explorando las últimas tendencias de la industria, leyendo ciencia ficción o tomando un buen café de especialidad.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-skills"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3>Mi Stack</h3>
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-tag">
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
