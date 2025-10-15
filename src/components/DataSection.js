import React from 'react';
import './DataSection.css';

const DataSection = () => {
  return (
    <section id="data" className="data-section">
      <div className="data-container">
        <div className="section-header">
          <h2 className="section-title">Data</h2>
          <p className="section-subtitle">
            VisionBlocks: A comprehensive multilingual multimodal instruction tuning dataset spanning 20 languages with cultural awareness
          </p>
        </div>
        
        <div className="data-content">
          <div className="visionblocks-overview">
            <div className="overview-image">
              <img src={`${process.env.PUBLIC_URL}/vision-blocks.png`} alt="VisionBlocks Dataset Overview" className="visionblocks-image" />
              <p className="image-caption">
                <strong>Overview of the VisionBlocks dataset.</strong> Synthetic data are generated with Gemini 2.5 API, while translated augmented ones use Tower models. The dataset aggregates 6M multilingual samples across diverse visual tasks.
              </p>
            </div>
          </div>

          <div className="data-challenges">
            <h3 className="subsection-title">Dataset Construction Challenges</h3>
            <p className="challenge-intro">
              Creating a large-scale, high-quality, multilingual multimodal dataset for training visual language models presents several intertwined challenges:
            </p>
            <div className="challenges-grid">
              <div className="challenge-item">
                <div className="challenge-icon">👥</div>
                <div className="challenge-content">
                  <h4 className="challenge-title">Limited Human-Written Data</h4>
                  <p className="challenge-text">
                    Human-written vision-text data featuring user-model interactions is severely limited, while large-scale captioning datasets prioritize scale over quality.
                  </p>
                </div>
              </div>
              <div className="challenge-item">
                <div className="challenge-icon">🌍</div>
                <div className="challenge-content">
                  <h4 className="challenge-title">Multilingual Scarcity</h4>
                  <p className="challenge-text">
                    High-quality multilingual vision-text data is scarce, and the lack of open multilingual VLMs makes controlled synthetic data generation challenging.
                  </p>
                </div>
              </div>
              <div className="challenge-item">
                <div className="challenge-icon">🔍</div>
                <div className="challenge-content">
                  <h4 className="challenge-title">Quality Filtering</h4>
                  <p className="challenge-text">
                    Filtering techniques like reward model scoring are significantly more challenging for vision-text data, where even state-of-the-art VLMs struggle with reliable preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="data-composition">
            <h3 className="subsection-title">Dataset Composition</h3>
            <div className="composition-text">
              <p className="composition-paragraph">
                <strong>Existing VLM Data Collection:</strong> For English vision-text data, we leverage the PixMo mixture with selective filtering. For multilingual content, we incorporate high-quality subsets from CulturalGround and PangeaIns, focusing on culturally-relevant multilingual contexts and filtered samples to ensure maximum quality.
              </p>
              <p className="composition-paragraph">
                <strong>Translated & Synthetic Data:</strong> We translate curated PixMo-Cap captions using Tower models, scored with CometKiwi (threshold 0.85). Synthetic captions are generated via Gemini 2.5 API with diverse system prompts to improve coverage of fine-grained visual details, spatial relations, and contextual cues.
              </p>
              <p className="composition-paragraph">
                <strong>Multilingual Video Data:</strong> We employ the LLaVA-Video-178k dataset, retaining half in English and translating the remainder uniformly across all supported languages using Tower 9B, ensuring balanced cross-lingual coverage for video understanding tasks.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DataSection;
