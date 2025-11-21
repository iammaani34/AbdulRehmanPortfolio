import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

// UPDATED: Projects based on Abdul Rehman's Resume
const PROJECTS = [
  {
    title: '🛍️ B2B2C Multi-Vendor E-Commerce',
    desc: 'My Final Year Project (FYP). A complete system connecting Factories, Stores, and Users. Features dynamic inventory synchronization, B2B bulk supply chain management, and a B2C retail marketplace with real-time order tracking.',
    ss: 'https://stylemixthemes.com/wp/wp-content/uploads/sites/2/2020/01/multi-vendor-ecommerce-website-660x360.jpg', // ⚠️ Replace with a screenshot of your e-commerce site
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    live: '#',
    code: 'https://github.com/iammaani34/'
  },
  {
    title: '💻 Dev Valley Internship Projects',
    desc: 'Full-stack web applications developed during my internship. Focused on creating responsive UIs, implementing efficient RESTful APIs, and ensuring bug-free deployment for diverse client projects.',
    ss: 'https://media.licdn.com/dms/image/v2/C4D0BAQEQcAHJ4mcwYw/company-logo_200_200/company-logo_200_200/0/1668407559089?e=2147483647&v=beta&t=vGYy3XFR-sPJua6cKUQEpUhJpcQ9FCjnIFswZhF5aeA', // ⚠️ Replace with a screenshot of your work
    tech: ['MERN Stack', 'Tailwind CSS', 'API Integration'],
    live: '#',
    code: 'https://github.com/iammaani34'
  },
  {
    title: '🎨 Personal Portfolio Website',
    desc: 'A modern, responsive portfolio built with React and Framer Motion to showcase my skills, education, and experience. Features smooth animations and an interactive user interface.',
    ss: 'https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-736x414.webp', // ⚠️ Replace with a screenshot of this website
    tech: ['React', 'Framer Motion', 'CSS3'],
    live: '#',
    code: 'https://github.com/iammaani34/'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container mx-auto px-4 md:px-6 py-10" 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      {/* Container Card */}
      <div 
        className="card p-6 md:p-10" 
        style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-cyan-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        
        <p className="text-gray-400 mb-8 text-sm md:text-base">
          A collection of my major works — focusing on the MERN stack and full-stack development.
        </p>

        <div 
          className="projects-grid" 
          style={{ 
            display: 'grid', 
            gap: 24, 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' 
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Project Image */}
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: 12,
                    backgroundColor: '#222' // Fallback color if image is missing
                  }}
                />
              </motion.div>

              {/* Project Details */}
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 12, lineHeight: 1.6, flexGrow: 1 }}>
                  {p.desc}
                </p>

                {/* Tech Stack Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 11,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      flex: 1,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '8px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={16} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      flex: 1,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '8px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={16} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}