import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="paper-title">
            
                <div className="tower-container-title">
                   <img src="/tower.png" alt="Tower" className="tower-image-title" />
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
              <div className="model-icon-inline">
                <div className="tower-container-inline">
                  <img src="/tower.png" alt="Tower" className="tower-image-inline" />
                </div>
              </div>
              <div className="model-text">
                <span className="model-name">TowerVision2B:</span>
                <span className="model-desc">a compact multilingual multimodal LLM optimized for efficiency while maintaining strong performance across 20 languages.</span>
              </div>
            </div>

            <div className="model-item">
              <div className="model-icon-inline vision-blocks">
                📊
              </div>
              <div className="model-text">
                <span className="model-name">TowerVision9B:</span>
                <span className="model-desc">a strong multilingual multimodal LLM capable of advanced visual understanding and reasoning across 20 languages.</span>
              </div>
            </div>

            <div className="model-item">
              <div className="model-icon-inline vision-blocks">
                📊
              </div>
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
            <button className="btn-secondary">
              📈 TowerVisionBench
            </button>
            <button className="btn-secondary">
              🎮 Demo
            </button>
          </div>

          <div className="separator-line"></div>

          <div className="authors-section">
            <div className="authors-grid">
              <div className="author-name">Xiang Yue<sup>*</sup></div>
              <div className="author-name">Yueqi Song<sup>*</sup></div>
              <div className="author-name">Akari Asai</div>
              <div className="author-name">Seungone Kim</div>
              <div className="author-name">Jean de Dieu Nyandwi</div>
              <div className="author-name">Simran Khanuja</div>
              <div className="author-name">Anjali Kantharuban</div>
              <div className="author-name">Lintang Sutawika</div>
              <div className="author-name">Sathyanarayanan Ramamoorthy</div>
              <div className="author-name">Graham Neubig</div>
            </div>
            <div className="university">Sardine Group</div>
            <div className="footnote">*Equal Contributions</div>
          </div>

          <div className="hero-description">
            <p className="hero-text">
              We introduce TowerVision, a fully open multilingual multimodal language model (MLLM) designed to bridge 
              multilingual and multicultural gaps in visual understanding tasks. TowerVision is trained on VisionBlocks, a diverse 
              multilingual multimodal instruction tuning dataset spanning 20 languages with cultural awareness and cross-lingual capabilities.
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-elements">
            <div className="floating-card card-1">
              <span className="flag">🇺🇸</span>
              <span className="text">English</span>
            </div>
            <div className="floating-card card-2">
              <span className="flag">🇩🇪</span>
              <span className="text">German</span>
            </div>
            <div className="floating-card card-3">
              <span className="flag">🇳🇱</span>
              <span className="text">Dutch</span>
            </div>
            <div className="floating-card card-4">
              <span className="flag">🇲🇽</span>
              <span className="text">Español (LATAM)</span>
            </div>
            <div className="floating-card card-5">
              <span className="flag">🇫🇷</span>
              <span className="text">Français</span>
            </div>
            <div className="floating-card card-6">
              <span className="flag">🇵🇹</span>
              <span className="text">Português</span>
            </div>
            <div className="floating-card card-7">
              <span className="flag">🇧🇷</span>
              <span className="text">Português (BR)</span>
            </div>
            <div className="floating-card card-8">
              <span className="flag">🇺🇦</span>
              <span className="text">Ukrainian</span>
            </div>
            <div className="floating-card card-9">
              <span className="flag">🇮🇳</span>
              <span className="text">हिंदी</span>
            </div>
            <div className="floating-card card-10">
              <span className="flag">🇨🇳</span>
              <span className="text">中文 (简体)</span>
            </div>
            <div className="floating-card card-11">
              <span className="flag">🇹🇼</span>
              <span className="text">中文 (繁體)</span>
            </div>
            <div className="floating-card card-12">
              <span className="flag">🇷🇺</span>
              <span className="text">Русский</span>
            </div>
            <div className="floating-card card-13">
              <span className="flag">🇨🇿</span>
              <span className="text">Čeština</span>
            </div>
            <div className="floating-card card-14">
              <span className="flag">🇰🇷</span>
              <span className="text">한국어</span>
            </div>
            <div className="floating-card card-15">
              <span className="flag">🇯🇵</span>
              <span className="text">日本語</span>
            </div>
            <div className="floating-card card-16">
              <span className="flag">🇮🇹</span>
              <span className="text">Italiano</span>
            </div>
            <div className="floating-card card-17">
              <span className="flag">🇵🇱</span>
              <span className="text">Polski</span>
            </div>
            <div className="floating-card card-18">
              <span className="flag">🇷🇴</span>
              <span className="text">Română</span>
            </div>
            <div className="floating-card card-19">
              <span className="flag">🇳🇴</span>
              <span className="text">Norsk (Nynorsk)</span>
            </div>
            <div className="floating-card card-20">
              <span className="flag">🇳🇴</span>
              <span className="text">Norsk (Bokmål)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-gradient"></div>
    </section>
  );
};

export default HeroSection;