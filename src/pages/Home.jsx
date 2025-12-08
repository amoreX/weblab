import { Link, useLocation } from 'react-router-dom'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'

function Home() {
  const location = useLocation()

  return (
    <div className="container">
      <header>
        <h1>Resume Portfolio</h1>
        <p>Web Lab Assignment - Programming Assignment 1</p>
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

      <main>
        <section className="intro">
          <h2>Welcome to Our Portfolio</h2>
          <p>This website contains our professional resumes. Click on the navigation buttons above to view individual resumes.</p>
        </section>

        <section className="team-cards">
          <div className="card">
            <img src={avatar1} alt="Mohammed Asadullah" />
            <h3>Mohammed Asadullah</h3>
            <p>B.Tech CSE Student</p>
            <p>CMR Institute of Technology</p>
            <Link to="/resume/asadullah" className="view-btn">View Resume</Link>
          </div>
          <div className="card">
            <img src={avatar2} alt="MD Nihal Rahman" />
            <h3>MD Nihal Rahman</h3>
            <p>B.Tech CSE Student</p>
            <p>CMR Institute of Technology</p>
            <Link to="/resume/nihal" className="view-btn">View Resume</Link>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Web Lab Assignment | CMR Institute of Technology</p>
      </footer>
    </div>
  )
}

export default Home

