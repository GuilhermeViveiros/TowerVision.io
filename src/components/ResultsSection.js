import React from 'react';
import './ResultsSection.css';

const ResultsSection = () => {
  // Vision-Language Model Performance data
  const vlmData = [
    { model: "Qwen2.5-VL-3B-Instruct", textVQA: "77.8", ocrBench: "78.7", ccOCR: "76.4", almEn: "81.0", almMulti: "76.2" },
    { model: "Qwen2.5-VL-7B-Instruct", textVQA: "82.5", ocrBench: "84.5", ccOCR: "78.6", almEn: "83.1", almMulti: "83.6", hasBest: true },
    { model: "Gemma3-4B-it", textVQA: "65.2", ocrBench: "74.2", ccOCR: "69.1", almEn: "79.7", almMulti: "80.0" },
    { model: "Gemma3-12B-it", textVQA: "73.2", ocrBench: "74.7", ccOCR: "73.8", almEn: "83.5", almMulti: "84.5" },
    { model: "CulturalPangea7B", textVQA: "69.8", ocrBench: "63.5", ccOCR: "51.7", almEn: "61.3", almMulti: "65.2" },
    { model: "Llama3-Llava-Next-8B", textVQA: "64.8", ocrBench: "54.4", ccOCR: "40.9", almEn: "76.5", almMulti: "73.4" },
    { model: "Aya-Vision-8B", textVQA: "66.9", ocrBench: "61.0", ccOCR: "46.3", almEn: "78.2", almMulti: "77.3" },
    { model: "TowerVision-2B", textVQA: "68.1", ocrBench: "58.6", ccOCR: "46.1", almEn: "77.1", almMulti: "81.1", isTower: true },
    { model: "TowerVision-9B", textVQA: "73.6", ocrBench: "69.7", ccOCR: "56.3", almEn: "83.6", almMulti: "85.2", isTower: true, hasBest: true }
  ];

  // Multimodal Translation data
  const mtData = [
    { model: "Qwen2.5-VL-3B-Instruct", enCs: "83.3", enDe: "96.7", enFr: "92.6", enDeCom: "71.6", enFrCom: "74.4", enRuCom: "77.5", enZhCom: "81.5" },
    { model: "Qwen2.5-VL-7B-Instruct", enCs: "83.9", enDe: "97.1", enFr: "93.2", enDeCom: "74.7", enFrCom: "76.9", enRuCom: "77.2", enZhCom: "82.4", hasBest: true },
    { model: "Gemma3-4B-it", enCs: "33.4", enDe: "44.0", enFr: "33.2", enDeCom: "76.7", enFrCom: "78.2", enRuCom: "79.0", enZhCom: "74.4", hasBest: true },
    { model: "CulturalPangea7B", enCs: "80.0", enDe: "95.8", enFr: "92.1", enDeCom: "68.3", enFrCom: "77.3", enRuCom: "75.3", enZhCom: "79.3" },
    { model: "Llama3-Llava-Next-8B", enCs: "79.1", enDe: "93.3", enFr: "88.1", enDeCom: "72.0", enFrCom: "74.4", enRuCom: "74.4", enZhCom: "73.5" },
    { model: "Aya-Vision-8B", enCs: "94.4", enDe: "97.9", enFr: "95.3", enDeCom: "69.3", enFrCom: "76.9", enRuCom: "74.4", enZhCom: "76.2" },
    { model: "TowerVision-2B", enCs: "90.3", enDe: "97.5", enFr: "94.7", enDeCom: "70.0", enFrCom: "74.3", enRuCom: "73.2", enZhCom: "76.6", isTower: true },
    { model: "TowerVision-9B", enCs: "95.1", enDe: "98.1", enFr: "95.6", enDeCom: "72.0", enFrCom: "78.8", enRuCom: "75.6", enZhCom: "77.4", isTower: true, hasBest: true }
  ];

  const getBestInColumn = (data, column) => {
    return Math.max(...data.map(row => parseFloat(row[column])));
  };

  const isBestScore = (data, value, column) => {
    return parseFloat(value) === getBestInColumn(data, column);
  };

  return (
    <section className="results-section">
      <div className="results-container">

        <div className="tables-container">
          {/* Vision-Language Model Performance Table */}
          <div className="table-section">
            <div className="table-header">
              <div className="table-title-container">
                <h3 className="table-title">VLMs Performance on several benchmarks</h3>
                <p className="table-subtitle">Reported values correspond to final accuracy (↑)</p>
              </div>
            </div>
            
            <div className="table-wrapper">
              <table className="performance-table">
                <colgroup>
                  <col style={{width: '25%'}} />
                  <col style={{width: '12.5%'}} />
                  <col style={{width: '12.5%'}} />
                  <col style={{width: '12.5%'}} />
                  <col style={{width: '18.75%'}} />
                  <col style={{width: '18.75%'}} />
                </colgroup>
                <thead>
                  <tr>
                    <th rowSpan={2} className="model-header">Model</th>
                    <th colSpan={2} className="category-header english-header">English (↑)</th>
                    <th colSpan={3} className="category-header multilingual-header">Multilingual (↑)</th>
                  </tr>
                  <tr>
                    <th className="metric-header">TextVQA</th>
                    <th className="metric-header">OCRBench</th>
                    <th className="metric-header">CC-OCR</th>
                    <th className="metric-header">ALM-Bench (en)</th>
                    <th className="metric-header">ALM-Bench (multi)</th>
                  </tr>
                </thead>
                <tbody>
                  {vlmData.map((row, index) => (
                    <tr key={index} className={`table-row ${row.isTower ? 'tower-row' : ''}`}>
                      <td className="model-cell">{row.model}</td>
                      <td className={`score-cell ${isBestScore(vlmData, row.textVQA, 'textVQA') ? 'best-score' : ''}`}>{row.textVQA}</td>
                      <td className={`score-cell ${isBestScore(vlmData, row.ocrBench, 'ocrBench') ? 'best-score' : ''}`}>{row.ocrBench}</td>
                      <td className={`score-cell ${isBestScore(vlmData, row.ccOCR, 'ccOCR') ? 'best-score' : ''}`}>{row.ccOCR}</td>
                      <td className={`score-cell ${isBestScore(vlmData, row.almEn, 'almEn') ? 'best-score' : ''}`}>{row.almEn}</td>
                      <td className={`score-cell ${isBestScore(vlmData, row.almMulti, 'almMulti') ? 'best-score' : ''}`}>{row.almMulti}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Multimodal Translation Table */}
          <div className="table-section">
            <div className="table-header">
              <div className="table-title-container">
                <h3 className="table-title">Multimodal Translation Benchmarks</h3>
                <p className="table-subtitle">We report xComet for Multi30K and contrastive pairwise accuracy for CoMMuTE.</p>
              </div>
            </div>
            
            <div className="table-wrapper">
              <table className="performance-table">
                <colgroup>
                  <col style={{width: '25%'}} />
                  <col style={{width: '9.375%'}} />
                  <col style={{width: '9.375%'}} />
                  <col style={{width: '9.375%'}} />
                  <col style={{width: '11.875%'}} />
                  <col style={{width: '11.875%'}} />
                  <col style={{width: '11.875%'}} />
                  <col style={{width: '11.875%'}} />
                </colgroup>
                <thead>
                  <tr>
                    <th rowSpan={2} className="model-header">Model</th>
                    <th colSpan={3} className="category-header multi30k-header">Multi30K (↑)</th>
                    <th colSpan={4} className="category-header commute-header">CoMMuTE (↑)</th>
                  </tr>
                  <tr>
                    <th className="metric-header">en→cs</th>
                    <th className="metric-header">en→de</th>
                    <th className="metric-header">en→fr</th>
                    <th className="metric-header">en→de</th>
                    <th className="metric-header">en→fr</th>
                    <th className="metric-header">en→ru</th>
                    <th className="metric-header">en→zh</th>
                  </tr>
                </thead>
                <tbody>
                  {mtData.map((row, index) => (
                    <tr key={index} className={`table-row ${row.isTower ? 'tower-row' : ''}`}>
                      <td className="model-cell">{row.model}</td>
                      <td className={`score-cell ${isBestScore(mtData, row.enCs, 'enCs') ? 'best-score' : ''}`}>{row.enCs}</td>
                      <td className={`score-cell ${isBestScore(mtData, row.enDe, 'enDe') ? 'best-score' : ''}`}>{row.enDe}</td>
                      <td className={`score-cell ${isBestScore(mtData, row.enFr, 'enFr') ? 'best-score' : ''}`}>{row.enFr}</td>
                      <td className={`score-cell ${isBestScore(mtData, row.enDeCom, 'enDeCom') ? 'best-score' : ''}`}>{row.enDeCom}</td>
                      <td className={`score-cell ${isBestScore(mtData, row.enFrCom, 'enFrCom') ? 'best-score' : ''}`}>{row.enFrCom}</td>
                      <td className={`score-cell ${isBestScore(mtData, row.enRuCom, 'enRuCom') ? 'best-score' : ''}`}>{row.enRuCom}</td>
                      <td className={`score-cell ${isBestScore(mtData, row.enZhCom, 'enZhCom') ? 'best-score' : ''}`}>{row.enZhCom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="key-insights">
          <h3 className="insights-title">Key Insights</h3>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">🌍</div>
              <h4 className="insight-heading">Multilingual Excellence</h4>
              <p className="insight-text">
                TowerVision-9B achieves the best multilingual performance on ALM-Bench, 
                demonstrating superior cross-lingual understanding capabilities.
              </p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">🔤</div>
              <h4 className="insight-heading">Translation Quality</h4>
              <p className="insight-text">
                Strong performance across multimodal translation tasks, with TowerVision-9B 
                leading in Multi30K benchmarks for multiple language pairs.
              </p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">⚡</div>
              <h4 className="insight-heading">Efficiency & Scale</h4>
              <p className="insight-text">
                TowerVision-2B achieves competitive performance with significantly fewer parameters, 
                making it ideal for resource-constrained environments.
              </p>
            </div>
          </div>
        </div>

        <div className="navigation-section">
          <p className="navigation-intro">
            The rest of this document is divided into three sections:
          </p>
          <div className="navigation-sentences">
            <p className="navigation-sentence">
              <button 
                className="nav-title-link"
                onClick={() => document.getElementById('model-structure').scrollIntoView({ behavior: 'smooth' })}
              >
                Model Structure
              </button>: We present the architecture and design choices behind TowerVision, detailing how we adapt vision-language models for multilingual capabilities.
            </p>
            <p className="navigation-sentence">
              <button 
                className="nav-title-link"
                onClick={() => document.getElementById('data').scrollIntoView({ behavior: 'smooth' })}
              >
                Data
              </button>: We introduce VisionBlocks, our comprehensive multilingual multimodal instruction tuning dataset spanning 20 languages with cultural awareness.
            </p>
            <p className="navigation-sentence">
              <button 
                className="nav-title-link"
                onClick={() => document.getElementById('ablation').scrollIntoView({ behavior: 'smooth' })}
              >
                Ablation
              </button>: We analyze the impact of different training strategies and architectural choices on multilingual performance across various benchmarks.
            </p>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default ResultsSection;
