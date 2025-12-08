import { Link, useLocation } from 'react-router-dom'

function Resume2() {
  const location = useLocation()

  return (
    <div className="container">
      <header>
        <h1>MD Nihal Rahman</h1>
        <p className="subtitle">Front-End Developer | AI & Full-Stack Development</p>
      </header>

      <nav>
        <Link to="/" className={`nav-btn ${location.pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>
        <Link to="/resume/asadullah" className={`nav-btn ${location.pathname === '/resume/asadullah' ? 'active' : ''}`}>
          Mohammed Asadullah
        </Link>
        <Link to="/resume/nihal" className={`nav-btn ${location.pathname === '/resume/nihal' ? 'active' : ''}`}>
          MD Nihal Rahman
        </Link>
      </nav>

      <main className="resume-content">
        <section className="resume-section" id="contact">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <p><strong>Institution:</strong> CMR Institute of Technology, Bengaluru</p>
            <p><strong>Mobile:</strong> +91 7550883806</p>
            <p><strong>Email:</strong> rahmannihal72@gmail.com</p>
            <p><strong>Portfolio:</strong> <a href="https://nihal-coded.vercel.app/" target="_blank" rel="noopener noreferrer">nihal-coded.vercel.app</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nihaliscoding/" target="_blank" rel="noopener noreferrer">linkedin.com/in/nihaliscoding</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/amorex" target="_blank" rel="noopener noreferrer">github.com/amorex</a></p>
          </div>
        </section>

        <section className="resume-section" id="education">
          <h2>Education Qualification</h2>
          <div className="education-item">
            <h3>B.Tech in Computer Science and Engineering</h3>
            <p>CMR Institute of Technology, Bengaluru</p>
            <p><strong>GPA:</strong> 8.5 | <strong>Year:</strong> Sept 2023 – Expected Dec 2027</p>
          </div>
        </section>

        <section className="resume-section" id="experience">
          <h2>Experience</h2>
          <div className="education-item">
            <h3>Front-End Freelancer</h3>
            <p>Beacon, Bangalore, IN</p>
            <p><strong>Duration:</strong> May 2024 - June 2024</p>
            <ul>
              <li>Migrated the codebase from HTML to React.</li>
              <li>Used Figma to design and implement landing page.</li>
            </ul>
          </div>
        </section>

        <section className="resume-section" id="skills">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <p>JavaScript/TypeScript, Rust, Java, Python, C/C++, Go, HTML/CSS</p>
            </div>
            <div className="skill-category">
              <h4>Frameworks & Tools</h4>
              <p>React, Next.js, Node.js, Express, MongoDB, Tauri, Tailwind CSS, Framer Motion, Next Auth, Prisma ORM, Zod, GraphQL</p>
            </div>
            <div className="skill-category">
              <h4>AI & System Tools</h4>
              <p>MCP (Model Context Protocol), Multi-Agent Systems, AI Tool Calling, Screen Analysis APIs</p>
            </div>
            <div className="skill-category">
              <h4>Developer Tools</h4>
              <p>Git, Docker, VS Code, Visual Studio, Android Studio</p>
            </div>
            <div className="skill-category">
              <h4>Libraries</h4>
              <p>Framer Motion, GSAP, Numpy, Matplotlib</p>
            </div>
          </div>
        </section>

        <section className="resume-section" id="projects">
          <h2>Projects</h2>
          
          <div className="project-item">
            <h3>Rae - The first true AI Assistant</h3>
            <p className="project-event">August 2025</p>
            <ul>
              <li>Co-founded a startup with 250+ onboarded users, offering a Rust + Tauri-powered desktop app for AI-driven productivity.</li>
              <li>Implemented a true multi-agent AI system using MCP protocol for tool calling, contextual understanding, and screen analysis.</li>
              <li>Integrated infinite chat history with supermemory for contextual persistence and seamless continuity.</li>
              <li>Developed intelligent "Insert Text" feature that automatically finds appropriate locations to modify content.</li>
              <li>Built using Rust, React, TypeScript, Tailwind CSS, and Tauri.</li>
            </ul>
          </div>

          <div className="project-item">
            <h3>Recipe Verse</h3>
            <p className="project-event">April 2025</p>
            <ul>
              <li>Built a responsive recipe sharing site and App with user authentication.</li>
              <li>Utilized zustand for state management and prisma ORM for database queries.</li>
              <li>Visually appealing and responsive interface using Tailwind CSS, ensuring consistent theming and styling across components.</li>
            </ul>
          </div>

          <div className="project-item">
            <h3>LeetBuddy</h3>
            <p className="project-event">November 2024</p>
            <ul>
              <li>Developed a platform where LeetCode users can add friends and check profile stats side-by-side.</li>
              <li>Solved LeetCode's lack of social features with username-based lookups.</li>
              <li>Built using Next.js App Router, MongoDB, and Google OAuth.</li>
              <li>Designed with responsive SASS-based UI for mobile and desktop.</li>
            </ul>
          </div>

          <div className="project-item">
            <h3>Travelgo</h3>
            <p className="project-event">January 2025</p>
            <ul>
              <li>Developed a Travel assistant using MERN stack.</li>
              <li>Used open-source APIs for weather and geolocation data.</li>
              <li>Integrated Google Gemini API to provide location-based insights.</li>
              <li>Used Figma to design and implement the service.</li>
              <li>Used Pexels API to fetch related images.</li>
            </ul>
          </div>
        </section>

        <section className="resume-section" id="awards">
          <h2>Achievements</h2>
          <ul>
            <li>2nd Runner up - Odoo X NMIT Hackathon, Bangalore (September 2025)</li>
            <li>Runner up - CMRIT Social Hackathon, Bangalore (June 2025)</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 MD Nihal Rahman | Web Lab Assignment</p>
      </footer>
    </div>
  )
}

export default Resume2

