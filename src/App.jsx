import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Home from './components/Home';
import Publication from './components/Publication';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <LanguageProvider>
      <div className="app">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="main-content">
          {activeTab === 'home' && <Home />}
          {activeTab === 'publication' && <Publication />}
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
