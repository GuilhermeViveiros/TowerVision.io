import React from 'react';
import './App.css';

import Abstract from './components/Abstract';
import ResultsSection from './components/ResultsSection';
import ModelStructureSection from './components/ModelStructureSection';
import DataSection from './components/DataSection';
import AblationSection from './components/AblationSection';

function App() {
  return (
    <div className="App">
      <Abstract />
      <ResultsSection />
      <ModelStructureSection />
      <DataSection />
      <AblationSection />
    </div>
  );
}

export default App;
