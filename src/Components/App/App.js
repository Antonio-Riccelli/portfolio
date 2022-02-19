import './App.css';
import { useState } from "react";
import Header from '../Header';
import AboutSection from '../AboutSection';
import TechStackSection from '../TechStackSection';
import Footer from '../Footer';

function App() {
  const [mode, setMode] = useState("dark");

  return (
    <div className="App">
     <Header />
     <AboutSection />
     <TechStackSection />
     <Footer />
    </div>
  );
}

export default App;
