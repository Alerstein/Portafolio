import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Analytics',
            description: 'Plataforma centrada en métricas de rendimiento y conversión. Ayuda a vendedores a entender su tráfico en tiempo real y optimizar embudos de venta.',
            tech: ['React', 'Node.js', 'PostgreSQL', 'Recharts'],
            github: '#',
            demo: '#',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
        },
        {
            title: 'FinTech Dashboard',
            description: 'Interfaz financiera para seguimiento de criptomonedas y portafolios de inversión con gráficos interactivos y alertas.',
            tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
            github: '#',
            demo: '#',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop'
        },
        {
            title: 'SaaS Productivity App',
            description: 'Herramienta de colaboración en tiempo real con tableros Kanban, chat integrado y gestión de documentos para equipos remotos.',
            tech: ['Vue', 'Express', 'MongoDB', 'Socket.io'],
            github: '#',
            demo: '#',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Mis <span className="text-accent">Proyectos</span></h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} className="project-link" aria-label="GitHub Repository">
                                            <Github size={24} />
                                        </a>
                                        <a href={project.demo} className="project-link" aria-label="Live Demo">
                                            <ExternalLink size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
