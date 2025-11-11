import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import About from './components/About';
import Research from './components/Research';
import Projects from './components/Projects';
import CV from './components/CV';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navigation />
        <main>
          <About />
          <Research />
          <Projects />
          <CV />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
