import "./App.css";

function App() {
  return (
    <div className="app">
      <nav>
        <h2>Rishabh Nishad</h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Hi, I'm Rishabh Nishad</h1>
        <h3>Frontend Developer | React.js | JavaScript</h3>
        <p>
          I build responsive and user-friendly websites using HTML, CSS,
          JavaScript and React.js.
        </p>
        <a className="btn" href="#projects">View My Work</a>
      </section>

      <section id="about" className="card">
        <h2>About Me</h2>
        <p>
          I am a B.Sc graduate and aspiring Frontend Developer. I enjoy creating
          clean, responsive and modern web applications. I am learning React.js
          and improving my frontend development skills.
        </p>
      </section>

      <section id="skills" className="card">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>GitHub</span>
          <span>Responsive Design</span>
        </div>
      </section>

      <section id="projects" className="card">
        <h2>Projects</h2>

        <div className="project">
          <h3>To-Do List App</h3>
          <p>A task management app with add, delete and completed features.</p>
        </div>

        <div className="project">
          <h3>Stopwatch App</h3>
          <p>A simple stopwatch app built using JavaScript.</p>
        </div>

        <div className="project">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio website built using React.js.</p>
        </div>
      </section>

      <section id="contact" className="card">
        <h2>Contact</h2>
        <p>Email: your-email@gmail.com</p>
        <p>GitHub: github.com/rishabhh-dot</p>
        <p>LinkedIn: Add your LinkedIn profile link here</p>
      </section>

      <footer>
        <p>© 2026 Rishabh Nishad | Frontend Developer</p>
      </footer>
    </div>
  );
}

export default App;
