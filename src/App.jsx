import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/Projects/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
