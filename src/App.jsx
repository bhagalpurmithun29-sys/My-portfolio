import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Mail, 
  FileDown, 
  ExternalLink, 
  Award, 
  Briefcase, 
  GraduationCap, 
  ArrowRight,
  Send,
  Code,
  Trophy,
  BrainCircuit,
  Heart,
  Phone,
  MapPin,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Loader from './components/Loader';
import Particles from './components/Particles';
import CursorSpotlight from './components/CursorSpotlight';
import TiltCard from './components/TiltCard';
import MagneticButton from './components/MagneticButton';
import StaggeredText from './components/StaggeredText';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      return;
    }

    const prefersLight =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (loading) {
      document.body.classList.add('no-scroll');
      
      const duration = 2500; // 2.5 seconds
      const interval = 20; // Update every 20ms
      const increment = 100 / (duration / interval);
      
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setLoading(false), 500); // Small delay after 100%
            return 100;
          }
          return prev + increment;
        });
      }, interval);

      return () => {
        clearInterval(timer);
        document.body.classList.remove('no-scroll');
      };
    }
  }, [loading]);

  return (
    <>
      <Loader isLoading={loading} progress={Math.round(progress)} />
      
      <AnimatePresence>
        {!loading && (
          <motion.div 
            className="app-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-glow glow-blue" />
            <div className="bg-glow glow-purple" />
            <Particles />
            <CursorSpotlight />
            
            <Sidebar />
      
      <main className="main-content">
        {/* Navbar */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <h2 className="gradient-text" style={{ fontSize: '1.5rem' }}>MITHUN KUMAR</h2>
          </div>
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#home" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Home</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Projects</a>
            <a href="#resume" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Resume</a>
            <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Skills</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
            <button
              className="btn-secondary theme-toggle"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <button className="btn-primary">Hire Me</button>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="home" className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }}>Hi, I'm</h3>
            <StaggeredText text="Mithun Kumar 👋" style={{ fontSize: '4.5rem', marginBottom: '0.5rem', fontWeight: 700 }} />
            <h1 className="gradient-text" style={{ fontSize: '4.5rem', marginBottom: '1.5rem' }}>AI Developer</h1>
            <StaggeredText 
              text="AI Developer specializing in Computer Vision & Machine Learning. Passionate about building intelligent solutions that make a real impact." 
              style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', marginBottom: '2.5rem' }} 
            />
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <MagneticButton className="btn-primary">View My Work <ArrowRight size={20} /></MagneticButton>
              <MagneticButton style={{ background: 'transparent', border: 'none', padding: 0 }}>
                <a href="/mithun.pdf" download className="btn-secondary" style={{ textDecoration: 'none' }}>
                  Download Resume <FileDown size={20} />
                </a>
              </MagneticButton>
            </div>
            
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            <div className="profile-ring">
              {/* Decorative dots */}
              <div style={{ position: 'absolute', top: '10%', right: '15%', width: '8px', height: '8px', background: 'var(--accent-blue)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-blue)' }}></div>
              <div style={{ position: 'absolute', bottom: '20%', left: '10%', width: '6px', height: '6px', background: 'var(--accent-purple)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-purple)' }}></div>
              
              <div className="profile-image-container">
                 <img 
                  src="/profile_real.jpg" 
                  alt="Mithun Kumar" 
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Bar */}
        <section className="glass card-animated" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-around', marginBottom: '6rem' }}>
          {[
            { icon: <Code className="gradient-text" />, value: '10+', label: 'Projects' },
            { icon: <Trophy className="gradient-text" />, value: '5+', label: 'Certifications' },
            { icon: <GraduationCap className="gradient-text" />, value: 'Fresher', label: 'Experience Level' },
            { icon: <Heart className="gradient-text" />, value: '100%', label: 'Passion' },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{ marginBottom: '0.5rem' }}>{stat.icon}</div>
              <h2 style={{ fontSize: '1.5rem' }}>{stat.value}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.label}</p>
            </motion.div>
          ))}
        </section>

        {/* About & Skills */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
          <section id="about">
            <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-blue)' }}>|</span> About Me
            </h2>
            <div className="glass card-animated" style={{ padding: '2rem' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                MCA Student at Central University of Himachal Pradesh. Passionate about solving real-world healthcare problems through Computer Vision and Deep Learning.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Always eager to learn, build, and contribute to meaningful projects.
              </p>
              <button className="btn-secondary">Know More About Me <ArrowRight size={18} /></button>
            </div>
          </section>

          <section id="skills">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--accent-blue)' }}>|</span> My Skills
              </h2>
              <button className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>View All</button>
            </div>
            <div className="skills-grid">
              {[
                { name: 'Python', icon: '🐍' },
                { name: 'Machine Learning', icon: '🤖' },
                { name: 'Deep Learning', icon: '🧠' },
                { name: 'Computer Vision', icon: '👁️' },
                { name: 'YOLO', icon: '🎯' },
                { name: 'OpenCV', icon: '📸' },
                { name: 'TensorFlow', icon: '🔥' },
                { name: 'PyTorch', icon: '⚡' },
              ].map((skill, i) => (
                <motion.div 
                  key={i} 
                  className="glass skill-tag glass-hover card-animated"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span>{skill.icon}</span>
                  <span style={{ fontSize: '0.9rem' }}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Featured Projects */}
        <section id="projects" className="section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-blue)' }}>|</span> Featured Projects
            </h2>
            <button className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>View All Projects</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { 
                title: 'Diabetic Retinopathy Detection', 
                desc: 'Deep learning model to detect diabetic retinopathy using fundus images.',
                tags: ['Python', 'Deep Learning', 'CNN'],
                image: '/project1.png'
              },
              { 
                title: 'Voice Recognition System', 
                desc: 'AI-based voice recognition system using machine learning techniques.',
                tags: ['Python', 'ML', 'Audio Processing'],
                image: '/project2.png'
              },
              { 
                title: 'Doctor Appointment System', 
                desc: 'Full-stack appointment booking system for patients and doctors.',
                tags: ['MERN Stack', 'Web App', 'MongoDB'],
                image: '/project3.png'
              },
            ].map((project, i) => (
              <TiltCard 
                key={i} 
                index={i}
                className="glass project-card glass-hover neon-glow-hover" 
                style={{ padding: '1.5rem' }}
              >
                <img src={project.image} alt={project.title} className="project-image" />
                <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{project.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  {project.tags.map((tag, j) => (
                    <span key={j} style={{ background: 'var(--chip-bg)', padding: '0.2rem 0.6rem', borderRadius: '0.5rem', fontSize: '0.75rem' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <a href="#" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Education & Resume */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
          <section>
            <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-blue)' }}>|</span> Education & Experience
            </h2>
            <div className="glass card-animated" style={{ padding: '2rem' }}>
              <div style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '2rem', position: 'relative' }}>
                <div style={{ marginBottom: '2.5rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-2.7rem', top: '0', background: 'var(--bg-dark)', border: '2px solid var(--accent-blue)', borderRadius: '50%', padding: '0.4rem' }}>
                    <GraduationCap size={20} color="var(--accent-blue)" />
                  </div>
                  <h3>MCA</h3>
                  <p style={{ color: 'var(--accent-blue)', fontWeight: '600' }}>Central University of Himachal Pradesh</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>2024 - 2026 | Currently Pursuing</p>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-2.7rem', top: '0', background: 'var(--bg-dark)', border: '2px solid var(--accent-blue)', borderRadius: '50%', padding: '0.4rem' }}>
                    <Briefcase size={20} color="var(--accent-blue)" />
                  </div>
                  <h3>BCA</h3>
                  <p style={{ color: 'var(--accent-blue)', fontWeight: '600' }}>Bachelor of Computer Application</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>2020 - 2023 | Completed</p>
                </div>
              </div>
            </div>
          </section>

          <section id="resume">
            <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-blue)' }}>|</span> Resume Preview
            </h2>
            <div className="glass card-animated" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div className="glass" style={{ width: '120px', height: '160px', overflow: 'hidden' }}>
                <img src="/resume_thumb.png" alt="Resume Thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h3 style={{ marginBottom: '0.25rem' }}>MITHUN KUMAR</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>AI Developer | ML Engineer</p>
                <ul style={{ listStyle: 'none', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  <li style={{ marginBottom: '0.3rem' }}>✓ AI Developer specializing in CV & ML</li>
                  <li style={{ marginBottom: '0.3rem' }}>✓ MCA Student at Central University of HP</li>
                  <li style={{ marginBottom: '0.3rem' }}>✓ Strong problem-solving skills</li>
                </ul>
                <a href="/mithun.pdf" download className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', textDecoration: 'none' }}>
                  Download Full Resume (PDF) <FileDown size={16} />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="glass card-animated" style={{ padding: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get In Touch</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                Have a project in mind or want to collaborate? Feel free to reach out!
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div className="social-icon" style={{ cursor: 'default', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                    <Mail size={20} className="gradient-text" />
                  </div>
                  <span style={{ fontSize: '1.1rem' }}>bhagalpur.mithun.29@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div className="social-icon" style={{ cursor: 'default', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                    <Phone size={20} className="gradient-text" />
                  </div>
                  <span style={{ fontSize: '1.1rem' }}>+91 74840 06416</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div className="social-icon" style={{ cursor: 'default', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                    <MapPin size={20} className="gradient-text" />
                  </div>
                  <span style={{ fontSize: '1.1rem' }}>Himachal Pradesh, India</span>
                </div>
              </div>
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input type="text" placeholder="Your Name" className="glass" style={{ padding: '1rem', border: '1px solid var(--glass-border)', color: 'var(--text-primary)' }} />
                <input type="email" placeholder="Your Email" className="glass" style={{ padding: '1rem', border: '1px solid var(--glass-border)', color: 'var(--text-primary)' }} />
              </div>
              <textarea placeholder="Your Message" rows="5" className="glass" style={{ padding: '1rem', border: '1px solid var(--glass-border)', color: 'var(--text-primary)' }}></textarea>
              <button className="btn-primary" style={{ justifyContent: 'center' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem', borderTop: '1px solid var(--glass-border)' }}>
          <p>© 2026 Mithun Kumar. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>Made with <Heart size={14} color="red" fill="red" /> and lots of ☕</p>
        </footer>
      </main>
    </motion.div>
  )}
</AnimatePresence>
</>
);
};

export default App;
