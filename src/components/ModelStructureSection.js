import React from 'react';
import './ModelStructureSection.css';

const ModelStructureSection = () => {
  return (
    <section id="model-structure" className="model-structure-section">
      <div className="model-structure-container">
        <div className="section-header">
          <h2 className="section-title">Model Structure</h2>
          <p className="section-subtitle">
            Architecture and training methodology behind TowerVision's multilingual multimodal capabilities
          </p>
        </div>
        
        <div className="model-content">
          <div className="architecture-overview">
            <h3 className="subsection-title">TowerVision: Architecture & Training Details</h3>
            <p className="overview-text">
              TowerVision follows the principle of starting from strong pretrained models and continuing pretraining on carefully curated data, with subsequent post-training. Our approach combines complementary multilingual strengths across both vision and text modalities to achieve superior cross-lingual multimodal understanding.
            </p>
          </div>

          <div className="architecture-components">
            <h3 className="subsection-title">Core Components</h3>
            <div className="components-text">
              <p className="component-paragraph">
                <strong>Language Model Backbone:</strong> TowerVision starts from a strong multilingual <a href="https://huggingface.co/Unbabel/Tower-Plus-9B" target="_blank" rel="noopener noreferrer" className="model-link">Tower-Plus</a> backbone 2B/9B, which achieves strong multilingual general-purpose performance by leveraging a curated high-quality multilingual dataset and a training recipe designed to preserve general capabilities. Starting from this multilingual backbone substantially improves cross-lingual performance compared to starting from standard Gemma models (see <a href="#ablation" className="ablation-link">Where and How Does Multilinguality Matter?</a>).
              </p>
              <p className="component-paragraph">
                <strong>Vision Encoder:</strong> TowerVision is initialized with <a href="https://huggingface.co/google/siglip2-so400m-patch14-384" target="_blank" rel="noopener noreferrer" className="model-link">SigLIP2-so400m/14@384px</a>, a vision transformer operating at 384×384 resolution that extracts image patch representations and produces multilingually-aligned embeddings of size 729. SigLIP2 is trained on a more diverse data mixture compared to alternatives such as CLIP-ViT, Perception Encoder, or SigLIP1, yielding better multilingual understanding (see <a href="#ablation" className="ablation-link">Where and How Does Multilinguality Matter?</a>).
              </p>
              <p className="component-paragraph">
                <strong>Modality Alignment:</strong> To align vision and text modalities, we use a LLaVA-based architecture with a projection layer consisting of a 2-layer MLP that is randomly initialized. This design enables effective multimodal understanding by bridging the gap between visual and textual representations.
              </p>
            </div>
          </div>

          <div className="training-stages">
            <h3 className="subsection-title">Three-Stage Training Process</h3>
            
            <div className="stages-container">
              <div className="stage-item">
                <div className="stage-number">1</div>
                <div className="stage-content">
                  <h4 className="stage-title">Projector Pretraining</h4>
                  <p className="stage-description">
                    We train the model to predict captions given images on the PixMo-Cap dataset, freezing both the vision encoder and language model backbone (only the projector is trained). Each image is encoded once, downscaled to 384×384 if necessary. We focus exclusively on diverse, high-quality English captions, which proves more effective for aligning visual and textual representations (see <a href="#ablation" className="ablation-link">Where and How Does Multilinguality Matter?</a>).
                  </p>
                </div>
              </div>

              <div className="stage-item">
                <div className="stage-number">2</div>
                <div className="stage-content">
                  <h4 className="stage-title">Vision Finetuning</h4>
                  <p className="stage-description">
                    We unfreeze the full model and train it on the complete VisionBlocks dataset, excluding video-text data. This phase uses <strong>high-dynamic resolution</strong>, breaking high-resolution images into a grid of smaller tiles encoded independently (with a global thumbnail tile). We use a maximum of six tiles for optimal trade-off between context length, efficiency, and performance (see <a href="#ablation" className="ablation-link">Where and How Does Multilinguality Matter?</a>). This produces the core <strong><a href="https://huggingface.co/utter-project/TowerVision-2B" target="_blank" rel="noopener noreferrer" className="model-link">TowerVision</a></strong> model.
                  </p>
                </div>
              </div>

              <div className="stage-item">
                <div className="stage-number">3</div>
                <div className="stage-content">
                  <h4 className="stage-title">Video Finetuning</h4>
                  <p className="stage-description">
                    The video portion of VisionBlocks is used to finetune TowerVideo on 32-frame video inputs at the encoder's fixed resolution of 384×384. Unlike the previous stage, we omit tiling for efficiency. This phase produces the <strong><a href="https://huggingface.co/utter-project/TowerVideo-2B" target="_blank" rel="noopener noreferrer" className="model-link">TowerVideo</a></strong> model, extending capabilities to video understanding tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="key-innovations">
            <h3 className="subsection-title">Key Innovations</h3>
            <div className="innovations-grid">
              <div className="innovation-item">
                <div className="innovation-icon">🌍</div>
                <div className="innovation-content">
                  <h4 className="innovation-title">Multilingual Foundation</h4>
                  <p className="innovation-text">
                    Built on Tower backbone with inherent multilingual capabilities, ensuring strong cross-lingual performance from the foundation.
                  </p>
                </div>
              </div>
              <div className="innovation-item">
                <div className="innovation-icon">🔍</div>
                <div className="innovation-content">
                  <h4 className="innovation-title">High-Dynamic Resolution</h4>
                  <p className="innovation-text">
                    Advanced tiling strategy processes high-resolution images efficiently while maintaining detailed visual understanding.
                  </p>
                </div>
              </div>
              <div className="innovation-item">
                <div className="innovation-icon">🎥</div>
                <div className="innovation-content">
                  <h4 className="innovation-title">Video Understanding</h4>
                  <p className="innovation-text">
                    Extended training pipeline supports both static images and dynamic video content across multiple languages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelStructureSection;
