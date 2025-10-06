import React from 'react';
import './Intro.css';

const ResultsSection = () => {
  // Dummy performance data - replace with actual results
  const performanceData = [
    {
      dataset: "MTVQA",
      task: "Visual Question Answering",
      languages: "20 langs",
      towervision2b: "68.5",
      towervision9b: "74.2",
      baseline: "61.3",
      improvement: "+12.9"
    },
    {
      dataset: "CulturalVQA",
      task: "Cultural Understanding",
      languages: "15 langs",
      towervision2b: "71.8",
      towervision9b: "78.4",
      baseline: "64.2",
      improvement: "+14.2"
    },
    {
      dataset: "XM3600",
      task: "Image Captioning",
      languages: "20 langs",
      towervision2b: "65.2",
      towervision9b: "72.1",
      baseline: "58.9",
      improvement: "+13.2"
    },
    {
      dataset: "MaRVL",
      task: "Visual Reasoning",
      languages: "5 langs",
      towervision2b: "69.7",
      towervision9b: "75.8",
      baseline: "62.4",
      improvement: "+13.4"
    },
    {
      dataset: "xGQA",
      task: "Visual Reasoning",
      languages: "8 langs",
      towervision2b: "67.3",
      towervision9b: "73.6",
      baseline: "60.1",
      improvement: "+13.5"
    }
  ];

  return (
    <section className="results-section">
      <div className="results-container">
        
          
          <div className="table-wrapper">
            <table className="performance-table">
              <thead>
                <tr>
                  <th className="dataset-col">Dataset</th>
                  <th className="task-col">Task</th>
                  <th className="lang-col">Languages</th>
                  <th className="model-col tower-col">TowerVision2B</th>
                  <th className="model-col tower-col">TowerVision9B</th>
                  <th className="model-col baseline-col">Best Baseline</th>
                  <th className="improvement-col">Δ Improvement</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((row, index) => (
                  <tr key={index} className="table-row">
                    <td className="dataset-cell">{row.dataset}</td>
                    <td className="task-cell">{row.task}</td>
                    <td className="lang-cell">{row.languages}</td>
                    <td className="score-cell tower-score">{row.towervision2b}</td>
                    <td className="score-cell tower-score best-score">{row.towervision9b}</td>
                    <td className="score-cell baseline-score">{row.baseline}</td>
                    <td className="improvement-cell">
                      <span className="improvement-badge">{row.improvement}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>

        <div className="key-insights">
          <h3 className="insights-title">Key Insights</h3>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">🌍</div>
              <h4 className="insight-heading">Multilingual Excellence</h4>
              <p className="insight-text">
                Consistent performance improvements across 20 languages, with particularly strong results 
                in low-resource and culturally-specific scenarios.
              </p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">🎯</div>
              <h4 className="insight-heading">Cultural Understanding</h4>
              <p className="insight-text">
                Superior performance on cultural knowledge tasks, demonstrating deep understanding 
                of regional contexts and cultural nuances.
              </p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">⚡</div>
              <h4 className="insight-heading">Efficiency & Scale</h4>
              <p className="insight-text">
                TowerVision2B achieves competitive performance with significantly fewer parameters, 
                making it ideal for resource-constrained environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
