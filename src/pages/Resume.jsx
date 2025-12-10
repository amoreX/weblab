import profileImg from '../assets/profile.jpeg'

function Resume() {
  return (
    <div className="container">
      <header className="resume-header">
        <div className="header-left">
          <img src={profileImg} alt="Ronish Rohan" className="profile-img" />
          <div className="header-info">
            <h1>Ronish Rohan</h1>
            <div className="header-links">
              <a href="https://ronish.dev/" target="_blank" rel="noopener noreferrer">ronish.dev</a>
              <a href="https://github.com/ronishrohan/" target="_blank" rel="noopener noreferrer">github.com/ronishrohan</a>
            </div>
          </div>
        </div>
        <div className="header-right">
          <p><strong>Email:</strong> <a href="mailto:ronish.rohan@gmail.com">ronish.rohan@gmail.com</a></p>
          <p><strong>Mobile:</strong> +91 9741292710</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ronishrohan/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ronishrohan</a></p>
        </div>
      </header>

      <main className="resume-content">
        {/* Education */}
        <section className="resume-section">
          <h2>Education</h2>
          <div className="education-item">
            <div className="item-header">
              <h3>CMR Institute of Technology</h3>
              <span className="location">Bengaluru, IN</span>
            </div>
            <div className="item-subheader">
              <p><em>Bachelor of Technology in Computer Science and Engineering; GPA: 8.75</em></p>
              <span className="date">Sept 2023 – Expected Dec 2027</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2>Experience</h2>
          
          <div className="experience-item">
            <div className="item-header">
              <h3>Rae</h3>
              <span className="location">Remote</span>
            </div>
            <div className="item-subheader">
              <p><em>Co-founder</em></p>
              <span className="date">July 2025 – Present</span>
            </div>
            <ul>
              <li>Co-founded an AI startup developing a <strong>desktop assistant</strong> that automates daily workflows and integrates with popular productivity tools.</li>
              <li>Designed and built the entire <strong>UI/UX</strong> using <strong>Tauri</strong> and <strong>React</strong>, focusing on a modern, minimal interface optimized for responsiveness and accessibility.</li>
              <li>Developed the core AI interaction layer using <strong>LLM APIs</strong>, enabling natural language task automation and intelligent system control.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="item-header">
              <h3>Optacloud</h3>
              <span className="location">Remote, SG</span>
            </div>
            <div className="item-subheader">
              <p><em>Full Stack Developer Intern</em></p>
              <span className="date">Dec 2024 – June 2025</span>
            </div>
            <ul>
              <li>Built and maintained three web applications using <strong>React</strong>, <strong>Firebase</strong>, <strong>Material UI</strong>, and <strong>Google Cloud Platform</strong>.</li>
              <li>Developed a freelance/internship marketplace with user auth, profiles, and listings.</li>
              <li>Created a team management tool with daily check-ins via <strong>Telegram</strong>, <strong>Slack</strong>, and <strong>Google Chat</strong> using <strong>n8n</strong>, <strong>Cloud Functions</strong>, and <strong>Google Calendar API</strong>.</li>
              <li>Implemented a bot platform for automated research tasks using <strong>n8n</strong>, <strong>SERP API</strong>, <strong>BrightData</strong>, and <strong>Gemini AI</strong>.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="item-header">
              <h3>Naolito</h3>
              <span className="location">Barcelona, ES</span>
            </div>
            <div className="item-subheader">
              <p><em>Junior Environment Artist</em></p>
              <span className="date">Jan 2022 – Feb 2022</span>
            </div>
            <ul>
              <li>Learned to use Blender, a 3D software, to create assets for short films.</li>
              <li>Created various graphics and posters in Photoshop for the 3D environments.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h2>Projects</h2>
          
          <div className="project-item">
            <div className="item-header">
              <h3>Waffle</h3>
              <span className="date">March 2024</span>
            </div>
            <ul>
              <li>Developed a full-stack web application using Next.js App Router, functioning as a Twitter clone with features like posting, reposting, commenting, liking, and saving.</li>
              <li>Utilized MongoDB for data storage, WebSockets for real-time messaging, Tailwind CSS for styling, and Google OAuth for user authentication.</li>
              <li>Designed to be fully responsive, ensuring a seamless experience across devices, including mobile.</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="item-header">
              <h3>Paypeek</h3>
              <span className="date">June 2024</span>
            </div>
            <ul>
              <li>Built a full-stack Next.js App Router website for managing invoices, with data storage in MongoDB.</li>
              <li>Implemented multiple OAuth options (Google, Discord, Reddit) for user authentication.</li>
              <li>Styled with Styled Components, using Jotai and React Context for state management.</li>
              <li>Fully responsive design, supporting all screen sizes, including mobile.</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="item-header">
              <h3>Reddit Clone</h3>
              <span className="date">Dec 2023</span>
            </div>
            <ul>
              <li>Developed a MERN stack Reddit clone using MongoDB, Express, Node.js, and React for frontend functionality.</li>
              <li>Deployed on Render.com for accessible online hosting.</li>
              <li>Responsive design ensures usability on any screen size, including mobile devices.</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="item-header">
              <h3>3D Calculator</h3>
              <span className="date">Apr 2024</span>
            </div>
            <ul>
              <li>Created an interactive 3D calculator using Three.js for rendering, with a UI built in React.js and styled using Tailwind CSS.</li>
              <li>Enhanced animations with Framer Motion and Framer Motion 3D for a smooth, immersive experience.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="resume-section">
          <h2>Technical Skills</h2>
          <div className="skills-list">
            <p><strong>Languages:</strong> JavaScript/TypeScript, Java, Python, C/C++, HTML/CSS</p>
            <p><strong>Frameworks:</strong> React, Next.js, Node.js, Express, MongoDB, WebSockets, Tailwind CSS, Framer Motion, Next Auth, Flutter</p>
            <p><strong>Developer Tools:</strong> Git, Docker, VS Code, Visual Studio, Android Studio</p>
            <p><strong>Libraries:</strong> React Three Fiber, Framer Motion, GSAP, Numpy, Matplotlib</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Ronish Rohan</p>
      </footer>
    </div>
  )
}

export default Resume

