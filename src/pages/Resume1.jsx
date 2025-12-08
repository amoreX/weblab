import { Link, useLocation } from 'react-router-dom'

function Resume1() {
  const location = useLocation()

  return (
    <div className="container">
      <header>
        <h1>Mohammed Asadullah</h1>
        <p className="subtitle">Aspiring Software Engineer | AI/ML & Full-Stack Development</p>
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
            <p><strong>Institution:</strong> CMR Institute of Technology, Whitefield, Bangalore - 560043</p>
            <p><strong>Mobile:</strong> +91 9148969749</p>
            <p><strong>Email:</strong> moas23cs@cmrit.ac.in / asad92k5@gmail.com</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mohammed-asadullah/" target="_blank" rel="noopener noreferrer">linkedin.com/in/mohammed-asadullah</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/asad-Md" target="_blank" rel="noopener noreferrer">github.com/asad-Md</a></p>
            <p><strong>LeetCode:</strong> <a href="https://leetcode.com/u/KdeUljAX7p/" target="_blank" rel="noopener noreferrer">leetcode.com/u/KdeUljAX7p</a></p>
          </div>
        </section>

        <section className="resume-section" id="objectives">
          <h2>Career Objectives</h2>
          <p>Aspiring Software Engineer in AI/ML and Full-Stack Development, with strong skills in Python, JavaScript, Flutter, AI/ML model fine-tuning, and full-stack web development. Experienced in building AI-powered applications and deploying scalable solutions, I am seeking opportunities at innovative tech companies in domains such as Artificial Intelligence, Machine Learning, and Scalable Web/Mobile Applications, while aiming for growth in a dynamic environment that fosters mentorship, continuous learning, and professional development.</p>
        </section>

        <section className="resume-section" id="education">
          <h2>Education Qualification</h2>
          <div className="education-item">
            <h3>B.Tech in Computer Science and Engineering</h3>
            <p>CMR Institute of Technology, Bengaluru</p>
            <p><strong>CGPA:</strong> 9.27 | <strong>Year:</strong> 2027 (Pursuing)</p>
          </div>
          <div className="education-item">
            <h3>Class XII CBSE - Science</h3>
            <p>Presidency School Bangalore South, Bengaluru</p>
            <p><strong>Percentage:</strong> 92.2% | <strong>Year:</strong> May 2023</p>
          </div>
          <div className="education-item">
            <h3>Class X CBSE</h3>
            <p>Presidency School Bangalore South, Bengaluru</p>
            <p><strong>Percentage:</strong> 96.0% | <strong>Year:</strong> Aug 2021</p>
          </div>
        </section>

        <section className="resume-section" id="skills">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <p>Python, JavaScript, Java, C/C++, Dart, HTML/CSS</p>
            </div>
            <div className="skill-category">
              <h4>Frameworks</h4>
              <p>React, Next.js, Node.js, Express, Flutter</p>
            </div>
            <div className="skill-category">
              <h4>AI/ML Tools</h4>
              <p>Regression, LLM/Tabular Model Fine-tuning, Flask Deployment, Prompt Engineering, GenAI APIs</p>
            </div>
            <div className="skill-category">
              <h4>Databases</h4>
              <p>MongoDB, PostgreSQL, SQLite</p>
            </div>
            <div className="skill-category">
              <h4>Libraries & Styling</h4>
              <p>Tailwind CSS, Prisma, NextAuth, NumPy, Matplotlib, Scikit-Learn</p>
            </div>
            <div className="skill-category">
              <h4>Developer Tools</h4>
              <p>Git, VS Code, Android Studio, Postman, Firebase, Vercel</p>
            </div>
            <div className="skill-category">
              <h4>UI/UX & Design</h4>
              <p>Figma</p>
            </div>
          </div>
        </section>

        <section className="resume-section" id="projects">
          <h2>Projects</h2>
          
          <div className="project-item">
            <h3>EcoFinds - Manufacturing ERP</h3>
            <p className="project-event">Odoo x NMIT Hackathon, Sep 2025</p>
            <ul>
              <li>Constructed a modular Node.js and Express backend with TypeScript, integrating manufacturing orders and BOM management to replace fragmented spreadsheets with a unified digital workflow.</li>
              <li>Developed a responsive Next.js and Tailwind CSS dashboard utilizing Zustand for global state management, enabling real-time tracking of production stages and inventory movement.</li>
              <li>Designed a normalized PostgreSQL database with optimized indexing and JWT authentication, ensuring secure role-based access.</li>
            </ul>
          </div>

          <div className="project-item">
            <h3>Pawverse: The All-in-One AI Platform for Smarter Pet Care</h3>
            <p className="project-event">CMRIT Social Hackathon, May 2025</p>
            <ul>
              <li>Fine-tuned a large language model (Phi-2) for natural-language Q&A on pet care.</li>
              <li>Built and trained a tabular regression model (TabNet) on adoption data to predict adoption probability.</li>
              <li>Engineered a scalable Flask backend with modular endpoints and GPU-accelerated inference.</li>
              <li>Deployed frontend with robust features using Next.js and Vercel.</li>
            </ul>
          </div>

          <div className="project-item">
            <h3>Bean's Coffee: E-Commerce Web App</h3>
            <p className="project-event">Feb 2025</p>
            <ul>
              <li>Created a complete e-commerce app with product listing, cart, and admin dashboard.</li>
              <li>Used Next.js, Tailwind CSS, PostgreSQL via Prisma ORM, and Google OAuth for authentication.</li>
              <li>Enabled session-based user management and real-time cart updates with persistent login.</li>
            </ul>
          </div>
        </section>

        <section className="resume-section" id="activities">
          <h2>Co-Curricular & Extra-Curricular Activities</h2>
          
          <h3>Hackathons</h3>
          <ul>
            <li>Secured 2nd Runner Up in the Odoo x NMIT Hackathon 2025 for creating an end-to-end digital manufacturing management application.</li>
            <li>Participated in SIH organised by Govt. of India, 2025.</li>
            <li>Achieved Runner up in the CMRIT Social Hackathon 2025, contributing to the development of innovative AI-driven projects such as Pawverse.</li>
            <li>Competed in the Fantomcode RVITM Hackathon 2024 and BMSCE Hackathon 2024.</li>
          </ul>

          <h3>Online Courses and Certifications</h3>
          <ul>
            <li>Completed "React – The Complete Guide (incl. Redux)" by Maximilian Schwarzmüller on Udemy, mastering React, Redux, React Router, and modern UI development patterns.</li>
            <li>Completed the "Full Stack Web Development Course" by Angela Yu on Udemy.</li>
          </ul>

          <h3>Seminars and Workshops</h3>
          <ul>
            <li>Participated as a Delegate in the Bengaluru Eco Summit 2025, organized by Haritvam, Yuvaka Sangha at IISc Bangalore, engaging in discussions on sustainability and environmental innovation.</li>
          </ul>

          <h3>Technical Club Activities</h3>
          <ul>
            <li>Member of Technical Team, "DSC Club".</li>
          </ul>

          <h3>Additional Responsibilities</h3>
          <ul>
            <li>Senator of Technical and Research Bureau, CSE Student Senate</li>
          </ul>

          <h3>Industrial Visits</h3>
          <ul>
            <li>Visited Newtech Aerospace Pvt. Ltd, 2025.</li>
          </ul>
        </section>

        <section className="resume-section" id="awards">
          <h2>Awards and Achievements</h2>
          <ul>
            <li>Secured 2nd Runner Up in the Odoo x NMIT Hackathon 2025</li>
            <li>Secured Runner Up in CMRIT Social Hackathon 2025</li>
            <li>Ranked First Place in Mini Project Exhibition Semester 1</li>
          </ul>
        </section>

        <section className="resume-section" id="personal">
          <h2>Personal Details</h2>
          <div className="personal-info">
            <p><strong>Date of Birth:</strong> 09/09/2005</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Nationality:</strong> Indian</p>
            <p><strong>Languages:</strong> English, Hindi</p>
            <p><strong>Hobbies:</strong> Building Projects with New Technologies, Reading novels</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Mohammed Asadullah | Web Lab Assignment</p>
      </footer>
    </div>
  )
}

export default Resume1

