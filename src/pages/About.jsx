import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background:
              "linear-gradient(90deg, #00b4ff, #0077ff)", // Updated accent color to match resume blue
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Abdul Rehman</strong> — a passionate{" "}
          <strong>MERN Stack Developer</strong>. I love turning complex ideas into
          scalable, user-friendly web applications. I’m deeply fascinated by
          building robust systems using <strong>React.js</strong>,{" "}
          <strong>Node.js</strong>, <strong>Express.js</strong>, and{" "}
          <strong>MongoDB</strong>, backed by modern tools like{" "}
          <strong>Docker</strong> and <strong>Git</strong>.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
          Beyond code, I enjoy exploring design and finding ways to blend{" "}
          <strong>technical precision</strong> with{" "}
          <strong>creative problem-solving</strong>. My goal is to build solutions
          that not only perform — but also deliver real business value.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", marginTop: "1rem" }}>
          I am currently completing my <strong>Bachelor’s in Computer Science (BSCS)</strong>, 
          where I developed a sophisticated <strong>B2B2C Multi-Vendor E-Commerce System</strong> as 
          my Final Year Project. This platform integrates supply chains between factories and stores 
          while providing a seamless marketplace for end-users, featuring dynamic inventory 
          synchronization and real-time order tracking.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, #00b4ff, #0077ff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 (BSCS) --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0, 153, 255, 0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0, 153, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="#00b4ff" />
              <div>
                <h4
                  style={{
                    color: "#00b4ff",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  BSCS (Bachelor of Science in Computer Science)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Government College University Faisalabad</strong> — Narowal, Pakistan
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  EQF Level 6
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Nov 2021 – Oct 2025</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 (FSC) --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0, 153, 255, 0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0, 153, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="#00b4ff" />
              <div>
                <h4
                  style={{
                    color: "#00b4ff",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  FSc Pre-Engineering (Intermediate)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>BISE Gujranwala</strong> — ShakarGarh, Pakistan
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                   EQF Level 4
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Jul 2019 – Aug 2021
                </p>
              </div>
            </motion.div>

            {/* --- Education Card 3 (Matric) --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0, 153, 255, 0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0, 153, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="#00b4ff" />
              <div>
                <h4
                  style={{
                    color: "#00b4ff",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Matriculation in Science
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>BISE Gujranwala</strong> — ShakarGarh, Pakistan
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                   EQF Level 3
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Apr 2017 – May 2019
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;