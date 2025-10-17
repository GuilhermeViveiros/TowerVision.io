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

  // Video Multilingual Performance data
  const videoData = [
    { model: "ViMUL-7B", ar: "41.5", bn: "35.4", zh: "37.0", en: "48.6", fr: "48.3", de: "43.9", hi: "39.2", ja: "37.8", ru: "45.7", si: "21.2", es: "44.3", sv: "41.4", ta: "23.3", ur: "36.8", hasBest: true },
    { model: "LLaVA-Video-7B", ar: "38.8", bn: "30.4", zh: "43.2", en: "53.3", fr: "49.2", de: "45.4", hi: "34.2", ja: "33.4", ru: "38.2", si: "18.1", es: "45.7", sv: "39.8", ta: "21.9", ur: "33.8", hasBest: true },
    { model: "VideoLLaMA3-7B", ar: "45.6", bn: "36.6", zh: "48.0", en: "52.9", fr: "47.1", de: "43.8", hi: "37.5", ja: "39.4", ru: "44.8", si: "25.1", es: "45.4", sv: "38.5", ta: "22.8", ur: "32.1", hasBest: true },
    { model: "TowerVision-2B", ar: "18.9", bn: "19.5", zh: "21.7", en: "34.2", fr: "28.9", de: "28.3", hi: "25.1", ja: "22.2", ru: "24.8", si: "16.3", es: "30.4", sv: "27.1", ta: "16.1", ur: "19.9", isTower: true },
    { model: "TowerVideo-2B", ar: "23.0", bn: "18.9", zh: "35.9", en: "45.2", fr: "39.6", de: "39.7", hi: "37.2", ja: "34.1", ru: "38.0", si: "17.1", es: "37.4", sv: "38.0", ta: "17.7", ur: "18.7", isTower: true },
    { model: "TowerVision-9B", ar: "34.2", bn: "25.4", zh: "35.3", en: "46.7", fr: "41.1", de: "40.8", hi: "34.2", ja: "28.1", ru: "40.3", si: "19.8", es: "40.5", sv: "39.6", ta: "21.6", ur: "26.4", isTower: true },
    { model: "TowerVideo-9B", ar: "38.6", bn: "22.1", zh: "44.8", en: "51.9", fr: "49.1", de: "47.1", hi: "32.2", ja: "42.3", ru: "40.9", si: "20.8", es: "46.0", sv: "44.8", ta: "24.1", ur: "19.5", isTower: true, hasBest: true }
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

        <div className="key-insights">
          <h3 className="insights-title">Key Insights</h3>
         
          <div className="insights-grid">

            <div className="insight-card">
              <div className="insight-icon">🔤</div>
              <h4 className="insight-heading">Translation Quality</h4>
              <p className="insight-text">
                Strong performance across multimodal translation tasks, with TowerVision-9B 
                leading in Multi30K benchmarks for multiple language pairs.
              </p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">🌍</div>
              <h4 className="insight-heading">Cultural Excellence</h4>
              <p className="insight-text">
                TowerVision-9B achieves the best culturally aware multimodal multilingual performance on ALM-Bench, 
                demonstrating superior cross-lingual understanding capabilities.
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

         <div className="radar-chart-container">
           <img 
             src={`${process.env.PUBLIC_URL}/results.png`}
             alt="Benchmark Performance Comparison - Radar Chart showing TowerVision model performance across multiple benchmarks"
             className="radar-chart-image"
           />
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
              </button>: We present the architecture and design choices behind TowerVision and TowerVideo, detailing how we adapt vision-language models for multilingual capabilities.
            </p>
            <p className="navigation-sentence">
              <button 
                className="nav-title-link"
                onClick={() => document.getElementById('data').scrollIntoView({ behavior: 'smooth' })}
              >
                Data
              </button>: We introduce VisionBlocks, our comprehensive multilingual multimodal instruction tuning dataset spanning 20 languages with cultural awareness.
            </p>           
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default ResultsSection;
