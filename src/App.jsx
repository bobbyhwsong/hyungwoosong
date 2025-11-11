import Navigation from './components/Navigation';
import About from './components/About';
import Research from './components/Research';
import Projects from './components/Projects';
import CV from './components/CV';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
