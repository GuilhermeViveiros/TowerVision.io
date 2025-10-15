import React, { useState, useEffect } from 'react';
import './Abstract.css';

const HeroSection = () => {
  const [currentExample, setCurrentExample] = useState(0);
  const [examples, setExamples] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Fetch the cultural examples data
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then(response => response.json())
      .then(data => setExamples(data))
      .catch(error => console.error('Error loading examples:', error));
  }, []);

  useEffect(() => {
    // Auto-rotate carousel every 5 seconds
    if (examples.length > 0) {
      const interval = setInterval(() => {
        setCurrentExample(prev => (prev + 1) % examples.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [examples]);

  const getAnswerClass = (modelName, answer, correctAnswer, exampleType) => {
    let isCorrect = false;
    
    if (exampleType === 'translation') {
      // For translation, check if model is in the correct answer array
      isCorrect = correctAnswer.includes(modelName);
    } else {
      // For other types, check exact match or if correct answer is contained in the response
      if (Array.isArray(correctAnswer)) {
        // If correctAnswer is an array, check if any of the correct answers are in the response
        isCorrect = correctAnswer.some(correct => 
          answer === correct || answer.toLowerCase().includes(correct.toLowerCase())
        );
      } else {
        // Single correct answer - check exact match or substring
        isCorrect = answer === correctAnswer || answer.toLowerCase().includes(correctAnswer.toLowerCase());
      }
    }
    
    if (modelName === 'TowerVision9B' || modelName === 'TowerVision-9B') {
      return isCorrect ? 'answer-correct-tower' : 'answer-wrong-tower';
    }
    return isCorrect ? 'answer-correct-other' : 'answer-wrong-other';
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
      'korea': '🇰🇷',
      "usa": "🇺🇸",
      "dutch": "🇳🇱",
      "hindi": "🇮🇳",
      "ukrainian": "🇺🇦",
      "russian": "🇷🇺",
      "polish": "🇵🇱"

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
                  <img src={`${process.env.PUBLIC_URL}/Tower.png`} alt="Tower" className="tower-image-title" />
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
                  <span className="model-name">TowerFamily:</span>
                  <span className="model-desc"> collection of strong multimodal models featuring <a href="https://huggingface.co/utter-project/TowerVision-2B" target="_blank" rel="noopener noreferrer" className="model-link"><strong>TowerVision-2B/9B</strong></a> for advanced image understanding and <a href="https://huggingface.co/utter-project/TowerVideo-2B" target="_blank" rel="noopener noreferrer" className="model-link"><strong>TowerVideo-2B/9B</strong></a> for sophisticated video comprehension, with superior multimodal multilingual translation capabilities and cultural awareness across 20 languages*.</span>
                </div>
              </div>

              <div className="model-item">
                <div className="model-text">
                  <span className="model-name">VisionBlocks:</span>
                  <span className="model-desc">a comprehensive multilingual multimodal instruction tuning dataset spanning 20 languages with cultural awareness.</span>
                </div>
              </div>
            </div>

            <div className="language-footnote">
              <p className="footnote-text">
                *Supported languages/dialetcs: English, German, Dutch, Spanish (Latin America), French, Portuguese (Portugal), Portuguese (Brazilian), Ukrainian, Hindi, Chinese (Simplified), Chinese (Traditional), Russian, Czech, Korean, Japanese, Italian, Polish, Romanian, Norwegian (Nynorsk) and Norwegian (Bokmål)
              </p>
            </div>

            <div className="hero-buttons">
              <button className="btn-primary">
                📄 arXiv
              </button>
              <button 
                className="btn-secondary"
                onClick={() => window.open('https://github.com/GuilhermeViveiros/LLaVA-NeXT', '_blank')}
              >
                💻 Code
              </button>
              <button 
                className="btn-secondary"
                onClick={() => window.open('https://huggingface.co/collections/utter-project/towervision-689a10be35396972889cadba', '_blank')}
              >
                🤗 Checkpoints
              </button>
              <div className="button-with-tooltip">
                <button 
                  className="btn-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowTooltip(true);
                    setTimeout(() => setShowTooltip(false), 3000);
                  }}
                >
                  📊 VisionBlocks
                </button>
                {showTooltip && (
                  <div className="button-tooltip">
                    VisionBlocks dataset will be released in the upcoming weeks!
                  </div>
                )}
              </div>
        
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
                     <div className="example-title">
                       {examples[currentExample].type === 'cultural' ? 'Cultural Understanding' : 'Multilingual Translation'}
                     </div>
                    <div className="example-counter">
                      {currentExample + 1} / {examples.length}
                    </div>
                  </div>
                  
                  <div className="example-image">
                      <img 
                       src={`${process.env.PUBLIC_URL}/${examples[currentExample].type === 'cultural' ? 'cultural_examples' : 'translation_examples'}/${examples[currentExample].image}`} 
                       alt={`${examples[currentExample].type} example`} 
                        className="cultural-image"
                      />
                  </div>

                  <div className="example-question">
                    {examples[currentExample].question.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>

                  {examples[currentExample].type === 'cultural' && examples[currentExample].options && (
                    <div className="example-options">
                      {examples[currentExample].options.map((option, index) => (
                        <div key={index} className="option-item">
                          {option}
                        </div>
                      ))}
                    </div>
                  )}

                   <div className="model-answers-table">
                     {Object.entries(examples[currentExample].answer)
                       .filter(([model, answer]) => {
                         // Filter out LLaVA-Next models and other models we don't want to show
                         const modelsToHide = [
                           'LLaVa-Next7B',
                           'Llama3-Llava-Next-8B',
                           'LLaVa-Next-7B',
                           'Aya-Vision-8B'
                         ];
                         return !modelsToHide.includes(model) && answer !== 'Add';
                       })
                       .map(([model, answer]) => {
                         const answerClass = getAnswerClass(model, answer, examples[currentExample].correct_answer, examples[currentExample].type);
                         const isCorrect = answerClass.includes('correct');
                         
                         return (
                           <div 
                             key={model} 
                             className={`model-answer-row ${answerClass}`}
                           >
                             <div className="model-name-cell">
                               {model.replace('TowerVision9B', 'TowerVision-9B')}
                             </div>
                             <div className="model-response-cell">
                               {answer}
                               {isCorrect && (
                                 <span className="correct-badge">✓</span>
                               )}
                             </div>
                           </div>
                         );
                       })}
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
                
              </div>
              
              <div className="authors-group">
                <a 
                    href="https://ssantos97.github.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="author-name author-link"
                  >
                  Saul Santos <sup>1,2</sup>
                </a>
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
                
              </div>
              
              <div className="authors-group">
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
                <a 
                  href="https://www.phontron.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="author-name author-link"
                >
                  Graham Neubig <sup>4</sup>
                </a>
                <a 
                  href="https://andre-martins.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="author-name author-link"
                >
                  Andre Martins <sup>1,2,3</sup>
                </a>
              </div>
            </div>
          
          <div className="affiliations">
            <div className="affiliation-group">
              <img src={`${process.env.PUBLIC_URL}/institution_logos/it.png`} alt="IT" className="affiliation-logo" />
              <img src={`${process.env.PUBLIC_URL}/institution_logos/ist.jpg`} alt="IST" className="affiliation-logo" />
              <img src={`${process.env.PUBLIC_URL}/institution_logos/unbabel.png`} alt="Unbabel" className="affiliation-logo" />
              <img src={`${process.env.PUBLIC_URL}/institution_logos/cmu.png`} alt="CMU" className="affiliation-logo" />
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