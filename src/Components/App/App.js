import './App.css';
import { useState } from "react";
import Header from '../Header';
import AboutSection from '../AboutSection';
import TechStackSection from '../TechStackSection';
import Footer from '../Footer';
import ProjectSection from '../ProjectSection';
import ContactSection from '../ContactSection';

function App() {
  const [mode, setMode] = useState("dark");

  return (
    <div className="App">
     <Header />
     <AboutSection />
     <TechStackSection />
     <ProjectSection />
     <ContactSection />
     <Footer />
    </div>
  );
}

export default App;
