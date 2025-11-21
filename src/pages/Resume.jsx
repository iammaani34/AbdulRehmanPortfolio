import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 ABDUL REHMAN
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc" }}>
              MERN Stack Developer | BSCS Graduate
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 ShakarGarh, Pakistan
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ iammaani31@gmail.com | 📞 (+92) 3134726210
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 360,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Motivated MERN Stack Developer who kickstarted a professional career
              at Dev Valley Software House. Experienced in developing and deploying 
              diverse web projects from scratch using MongoDB, Express.js, React, 
              and Node.js. Known for a strong work ethic and writing clean, 
              efficient code.
            </p>
          </motion.div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Work Experience
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li style={{ marginBottom: 16 }}>
              <strong>Internship (MERN Stack)</strong> — Dev Valley Software House (Gujranwala)
              <br />
              <span style={{ color: "#aaa", fontSize: "14px" }}>Sep 2025 - Current</span>
              <p style={{ color: "#ccc", margin: "4px 0 0 0", fontSize: "14px" }}>
                Developed and deployed responsive web applications using the MERN stack. 
                Successfully planned and executed multiple end-to-end projects.
              </p>
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Web Application Developer</strong> — Alshifa Institute Health Science
              <br />
              <span style={{ color: "#aaa", fontSize: "14px" }}>Sep 2024 - Apr 2025</span>
              <p style={{ color: "#ccc", margin: "4px 0 0 0", fontSize: "14px" }}>
                Initiated Final Year Project (FYP) focused on B2B2C Multi-Vendor E-Commerce.
              </p>
            </li>
            <li>
              <strong>Private Tutor</strong> — Global Unique School System
              <br />
              <span style={{ color: "#aaa", fontSize: "14px" }}>Sep 2019 - Jun 2021</span>
            </li>
          </ul>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>BSCS (Bachelor of Science in Computer Science)</strong> — Government College University Faisalabad
              <br />
              <span style={{ color: "#aaa" }}>2021–2025</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>FSC Pre-Engineering</strong> — BISE Gujranwala
              <br />
              <span style={{ color: "#aaa" }}>2019-2021</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Matriculation in Science</strong> — BISE Gujranwala
              <br />
              <span style={{ color: "#aaa" }}>2017-2019</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🚀 Key Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
                1️⃣ <strong>B2B2C Multi-Vendor E-Commerce (FYP)</strong>: Integrated supply chain enabling stores to source from factories and sell to end-users.
            </li>
            <li>2️⃣ <strong>Inventory Synchronization Logic</strong>: Automated stock updates based on factory deliveries and user purchases.</li>
            <li>3️⃣ <strong>Centralized Admin Governance</strong>: Super Admin dashboard for KYC verification of stores and factories.</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "MERN Stack",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "TypeScript",
              "Tailwind CSS",
              "MySQL",
              "PostgreSQL",
              "Docker",
              "Git / GitHub",
              "RESTful APIs",
              "MS Office",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/iammaani34" },
            { name: "💼 LinkedIn", link: "http://www.linkedin.com/in/abdul-rehman-41059732b" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/AbdulRehmanCV.pdf"
            title="Abdul Rehman Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/AbdulRehmanCV.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>

      </motion.div>
    </section>
  );
}