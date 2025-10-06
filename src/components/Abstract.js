import React, { useState, useEffect } from 'react';
import './Abstract.css';

const HeroSection = () => {
  const [currentExample, setCurrentExample] = useState(0);
  const [examples, setExamples] = useState([]);

  useEffect(() => {
    // Fetch the cultural examples data
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setExamples(data))
      .catch(error => console.error('Error loading examples:', error));
  }, []);

  useEffect(() => {
    // Auto-rotate carousel every 5 seconds
    if (examples.length > 0) {
      const interval = setInterval(() => {
        setCurrentExample(prev => (prev + 1) % examples.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [examples]);

  const getAnswerClass = (modelName, answer, correctAnswer) => {
    if (modelName === 'TowerVision9B') {
      return answer === correctAnswer ? 'answer-correct-tower' : 'answer-wrong-tower';
    }
    return answer === correctAnswer ? 'answer-correct-other' : 'answer-wrong-other';
  };

  const getFlagEmoji = (country) => {
    const flags = {
      'portugal': '🇵🇹',
      'cs': '🇨🇿',
      'spain': '🇪🇸',
      'france': '🇫🇷',
      'germany': '🇩🇪',
      'italy': '🇮🇹',
      'brazil': '🇧🇷',
      'china': '🇨🇳',
      'japan': '🇯🇵',
      'korea': '🇰🇷'
    };
    return flags[country] || '🌍';
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-main-content">
          <div className="hero-content">
            <div className="paper-title">
                <div className="tower-container-title">
                  <img src="/Tower.png" alt="Tower" className="tower-image-title" />
                  <div className="eye-overlay-title">
                    <div className="custom-eye">
                      <div className="eye-white">
                        <div className="eye-pupil">
                          <div className="eye-shine"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <h1 className="paper-title-text">
                TowerVision
              </h1>
              <h2 className="paper-subtitle-text">
                Understanding and Improving Multilinguality in Vision-Language Models
              </h2>
            </div>

            <div className="model-descriptions">
              <div className="model-item">
                <div className="model-text">
                  <span className="model-name">TowerVision2B:</span>
                  <span className="model-desc">a compact multilingual multimodal LLM optimized for efficiency while maintaining strong performance across 20 languages.</span>
                </div>
              </div>

              <div className="model-item">
                <div className="model-text">
                  <span className="model-name">TowerVision9B:</span>
                  <span className="model-desc">a strong multilingual multimodal LLM capable of advanced visual understanding and reasoning across 20 languages.</span>
                </div>
              </div>

              <div className="model-item">
                <div className="model-text">
                  <span className="model-name">VisionBlocks:</span>
                  <span className="model-desc">a comprehensive multilingual multimodal instruction tuning dataset spanning 20 languages with cultural awareness.</span>
                </div>
              </div>
            </div>

            <div className="hero-buttons">
              <button className="btn-primary">
                📄 arXiv
              </button>
              <button className="btn-secondary">
                📋 PDF
              </button>
              <button className="btn-secondary">
                💻 Code
              </button>
              <button className="btn-secondary">
                🤗 Checkpoints
              </button>
              <button className="btn-secondary">
                📊 VisionBlocks
              </button>
        
            </div>
          </div>

          <div className="hero-visual">
            <div className="examples-carousel">
              {examples.length > 0 && (
                <div className="example-card">
                  <div className="example-header">
                    <div className="country-flag">
                      {getFlagEmoji(examples[currentExample].country)}
                    </div>
                    <div className="example-title">Cultural Understanding</div>
                    <div className="example-counter">
                      {currentExample + 1} / {examples.length}
                    </div>
                  </div>
                  
                  <div className="example-image">
                    <img 
                      src={`/cultural_examples/${examples[currentExample].image}`} 
                      alt="Cultural example" 
                      className="cultural-image"
                    />
                  </div>

                  <div className="example-question">
                    <p>{examples[currentExample].question}</p>
                  </div>

                  <div className="model-answers-compact">
                    {Object.entries(examples[currentExample].answer).map(([model, answer]) => (
                      <div 
                        key={model} 
                        className={`model-answer-compact ${getAnswerClass(model, answer, examples[currentExample].correct_answer)}`}
                      >
                        <span className="model-name-compact">{model.replace('TowerVision9B', 'TowerVision')}:</span>
                        <span className="model-response-compact">{answer}</span>
                        {model === 'TowerVision9B' && answer === examples[currentExample].correct_answer && (
                          <span className="correct-badge">✓</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="carousel-indicators">
                {examples.map((_, index) => (
                  <div 
                    key={index} 
                    className={`indicator ${index === currentExample ? 'active' : ''}`}
                    onClick={() => setCurrentExample(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="full-width-separator">
          <div className="separator-bar"></div>
        </div>

        <div className="authors-section">
            <div className="authors-container">
              <div className="authors-group">
                <a 
                  href="https://www.gviveiros.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="author-name author-link"
                >
                  Andre G. Viveiros <sup>*1,2</sup>
                </a>
                <a 
                  href="https://patricksf.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="author-name author-link"
                >
                  Patrick Fernandes <sup>1,2,4</sup>
                </a>
                <a 
                  href="https://ssantos97.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="author-name author-link"
                >
                  Saul Santos <sup>1,2</sup>
                </a>
              </div>
              
              <div className="authors-group">
                <a 
                  href="https://sonalsannigrahi.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="author-name author-link"
                >
                  Sonal Sannigrahi <sup>1,2</sup>
                </a>
                <a 
                  href="https://manzar96.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="author-name author-link"
                >
                  Emmanouil Zaranis <sup>1,2</sup>
                </a>
                <a 
                  href="https://nunonmg.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="author-name author-link"
                >
                  Nuno M Guerreiro <sup>3</sup>
                </a>
                <a 
                  href="https://scholar.google.com/citations?user=b3LCxaYAAAAJ&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="author-name author-link"
                >
                  Amin Farajian <sup>3</sup>
                </a>
              </div>
              
              <div className="authors-group">
                <a 
                  href="https://andre-martins.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="author-name author-link"
                >
                  Andre Martins <sup>1,2,3</sup>
                </a>
                <a 
                  href="https://www.phontron.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="author-name author-link"
                >
                  Graham Neubig <sup>4</sup>
                </a>
              </div>
            </div>
          
          <div className="affiliations">
            <div className="affiliation-group">
              <img src="/institution_logos/IT.png" alt="IT" className="affiliation-logo" />
              <img src="/institution_logos/IST.jpg" alt="IST" className="affiliation-logo" />
              <img src="/institution_logos/Unbabel.png" alt="Unbabel" className="affiliation-logo" />
              <img src="/institution_logos/cmu.png" alt="CMU" className="affiliation-logo" />
            </div>
          </div>
          
          <div className="corresponding-authors">
            <div className="corresponding-text">
              Corresponding to: <a 
                href="mailto:andre.viveiros@tecnico.ulisboa.pt?subject=Question regarding TowerVision&body=Hey, I have a question regarding TowerVision ..." 
                className="email-addresses"
              >
                (andre.viveiros, andre.martins)@tecnico.ulisboa.pt
              </a>
            </div>
          </div>
        </div>

        <div className="hero-description">
          <p className="hero-text">
            We introduce TowerVision, a fully open multilingual multimodal language model (MLLM) designed to bridge 
            multilingual and multicultural gaps in visual understanding tasks. TowerVision is trained on VisionBlocks, a diverse 
            multilingual multimodal instruction tuning dataset spanning 20 languages with cultural awareness and cross-lingual capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;