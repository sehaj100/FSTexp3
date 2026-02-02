import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page.</p>

      <Link to="/about">
  <img
    src="/photo1.jpg"
    alt="Go to About"
    style={{
      marginTop: "20px",
      cursor: "pointer",
      borderRadius: "10px",
      width: "300px"
    }}
  />
</Link>
  <Link to="/contact">
  <img
    src="/photo2.jpg"
    alt="Go to contacts"
    style={{
      marginTop: "20px",
      cursor: "pointer",
      borderRadius: "10px",
      width: "300px"
    }}
  />
</Link>


      <p>Click the images to open About Page or contact page </p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p><strong>Name:</strong> Sehaj Sukhleen Singh</p>
      <p><strong>University:</strong> Chandigarh University</p>
      <p><strong>CGPA:</strong> 7.7</p>
      <h3>Projects</h3>
      <ul>
        <li>AI Chat Assistant</li>
        <li>E-Commerce Platform</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p><strong>Mobile:</strong> +91-9876543210</p>
      <p><strong>Email:</strong> sehaj@example.com</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>

        <Link to="/about" style={{ marginRight: "20px" }}>About</Link>

        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
