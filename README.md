# 🏗️ TowerVision.io

<div align="center">

![TowerVision Logo](public/Tower.png)

**Understanding and Improving Multilinguality in Vision-Language Models**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

*A comprehensive research website showcasing TowerVision: multilingual multimodal language models with cultural awareness*

[🌐 Live Demo](https://towervision.io) • [📄 Paper](https://arxiv.org) • [💻 Code](https://github.com) • [🤗 Models](https://huggingface.co)

</div>

---

## 🎯 Overview

TowerVision.io is an interactive research website presenting groundbreaking work in multilingual multimodal AI. The site showcases **TowerVision**, a family of vision-language models designed to bridge multilingual and multicultural gaps in visual understanding tasks.

### 🌟 Key Features

- **🎨 Interactive Design**: Modern, responsive interface with smooth animations
- **📊 Dynamic Results**: Live performance tables with real benchmark data
- **🌍 Cultural Examples**: Interactive carousel showcasing multilingual capabilities
- **📱 Mobile-First**: Fully responsive design optimized for all devices
- **🎭 Professional UI**: Academic-grade presentation with elegant typography

---

## 🚀 Models & Performance

### TowerVision Family

| Model | Parameters | Specialty | Performance Highlights |
|-------|------------|-----------|----------------------|
| **TowerVision-2B** | 2B | Efficiency | Competitive performance with 75% fewer parameters |
| **TowerVision-9B** | 9B | Performance | State-of-the-art multilingual multimodal understanding |
| **TowerVideo** | 9B | Video | Extended capabilities for video understanding |

### 📈 Benchmark Results

- **20 Languages** supported with cultural awareness
- **6M+ Training Samples** in VisionBlocks dataset
- **SOTA Performance** on multilingual VLM benchmarks
- **Cultural Understanding** across diverse contexts

---

## 🛠️ Technical Stack

### Frontend Architecture
```
src/
├── components/
│   ├── Abstract.js          # Hero section with interactive carousel
│   ├── ResultsSection.js    # Performance tables and insights
│   ├── DataSection.js       # VisionBlocks dataset overview
│   ├── ModelStructureSection.js  # Architecture details
│   └── AblationSection.js   # Experimental analysis
├── App.js                   # Main application component
└── index.js                 # Application entry point
```

### 🎨 Design System

- **Typography**: Libre Baskerville (headings) + Inter (body)
- **Color Palette**: TowerVision Blue (#2d5a87) + Professional grays
- **Layout**: CSS Grid + Flexbox for responsive design
- **Animations**: Smooth CSS transitions and hover effects

### 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.1",
  "@heroicons/react": "^2.0.16",
  "lucide-react": "^0.544.0"
}
```

---

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/towervision-io.git
cd towervision-io

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### 🌐 Development Server
```bash
npm start
# Opens http://localhost:3000
```

### 🏗️ Production Build
```bash
npm run build
# Creates optimized build in ./build/
```

---

## 📁 Project Structure

### Core Components

#### 🎭 **Abstract Section**
- Interactive hero with animated TowerVision logo
- Cultural examples carousel with live data
- Author information with institutional affiliations
- Responsive button grid for resources

#### 📊 **Results Section** 
- Dynamic performance tables with hover effects
- Best score highlighting and visual indicators
- Key insights cards with statistics
- Navigation to other sections

#### 📚 **Data Section**
- VisionBlocks dataset visualization
- Construction challenges explanation
- Dataset composition breakdown
- Interactive statistics cards

#### 🏗️ **Model Structure Section**
- Three-stage training process timeline
- Core component explanations
- Key innovations showcase
- Links to ablation studies

### 🎨 Styling Architecture

```css
/* Modern CSS Features Used */
- CSS Grid & Flexbox layouts
- Custom properties (CSS variables)
- Smooth transitions & animations
- Responsive typography (clamp, rem units)
- Modern color functions (hsl, rgba)
- Advanced selectors (:hover, :focus-within)
```

---

## 🌍 Cultural Examples System

### Interactive Carousel
The site features a dynamic carousel showcasing TowerVision's cultural understanding:

```javascript
// Example data structure
{
  "country": "portugal",
  "question": "Para que servia originalmente a Torre de Belém?",
  "correct_answer": "D) Um forte defensivo primário",
  "answer": {
    "TowerVision9B": "D) Um forte defensivo primário",
    "Qwen2.5-7B": "A) Um ponto de embarque...",
    // ... other models
  }
}
```

### Features
- **Auto-rotation**: 5-second intervals
- **Manual navigation**: Click indicators
- **Performance comparison**: Real-time model comparison
- **Cultural context**: Authentic cultural questions

---

## 🎯 Performance Optimization

### 🚀 Speed Optimizations
- **Code splitting**: React.lazy() for route-based splitting
- **Image optimization**: WebP format with fallbacks
- **CSS optimization**: Minimal, scoped stylesheets
- **Bundle analysis**: Webpack bundle analyzer integration

### 📱 Responsive Design
```css
/* Breakpoint Strategy */
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px+
- Large: 1400px+
```

### ♿ Accessibility
- **WCAG 2.1 AA** compliance
- **Semantic HTML** structure
- **Keyboard navigation** support
- **Screen reader** optimization
- **Color contrast** ratios > 4.5:1

---

## 🧪 Research Team

### 👥 Contributors

<table>
<tr>
<td align="center">
<strong>Andre G. Viveiros</strong><br/>
<sub>IT, IST</sub><br/>
<a href="https://www.gviveiros.com/">🌐</a>
</td>
<td align="center">
<strong>Patrick Fernandes</strong><br/>
<sub>IT, IST, CMU</sub><br/>
<a href="https://patricksf.dev/">🌐</a>
</td>
<td align="center">
<strong>Andre Martins</strong><br/>
<sub>IT, IST, Unbabel</sub><br/>
<a href="https://andre-martins.github.io/">🌐</a>
</td>
<td align="center">
<strong>Graham Neubig</strong><br/>
<sub>CMU</sub><br/>
<a href="https://www.phontron.com/">🌐</a>
</td>
</tr>
</table>

### 🏛️ Institutions
- **IT** - Instituto de Telecomunicações
- **IST** - Instituto Superior Técnico
- **Unbabel** - Unbabel
- **CMU** - Carnegie Mellon University

---

## 📊 Analytics & Insights

### 🔍 Key Metrics
- **Performance Tables**: Real-time benchmark comparisons
- **Cultural Examples**: 20+ language demonstrations  
- **Model Variants**: 2B, 9B, and Video models
- **Dataset Scale**: 6M+ multilingual samples

### 📈 Benchmark Coverage
- **TextVQA**: Visual question answering
- **OCRBench**: Optical character recognition
- **CC-OCR**: Cross-cultural OCR tasks
- **ALM-Bench**: Multilingual understanding
- **Multi30K**: Multimodal translation
- **CoMMuTE**: Contrastive evaluation

---

## 🚀 Deployment

### 🌐 Hosting Options

#### Netlify (Recommended)
```bash
# Build and deploy
npm run build
netlify deploy --prod --dir=build
```

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://yourusername.github.io/towervision-io"

# Deploy
npm run build
npm run deploy
```

### 🔧 Environment Variables
```bash
# .env.local
REACT_APP_API_URL=https://api.towervision.io
REACT_APP_GA_TRACKING_ID=GA_MEASUREMENT_ID
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md).

### 🐛 Bug Reports
- Use GitHub Issues
- Include browser/device info
- Provide reproduction steps

### 💡 Feature Requests  
- Describe the use case
- Explain the expected behavior
- Consider implementation complexity

### 🔧 Development Workflow
```bash
# 1. Fork the repository
# 2. Create feature branch
git checkout -b feature/amazing-feature

# 3. Make changes and commit
git commit -m 'Add amazing feature'

# 4. Push to branch
git push origin feature/amazing-feature

# 5. Open Pull Request
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Research Community**: For advancing multilingual AI
- **Open Source**: React, Node.js, and web technologies
- **Design Inspiration**: Modern academic websites
- **Cultural Data**: Community-contributed examples

---

## 📞 Contact & Support

- **📧 Email**: [andre.viveiros@tecnico.ulisboa.pt](mailto:andre.viveiros@tecnico.ulisboa.pt)
- **🐛 Issues**: [GitHub Issues](https://github.com/your-org/towervision-io/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/your-org/towervision-io/discussions)
- **🐦 Twitter**: [@TowerVisionAI](https://twitter.com/towervisionai)

---

<div align="center">

**Built with ❤️ by the TowerVision Research Team**

*Advancing multilingual AI for a more inclusive future*

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Powered by Research](https://img.shields.io/badge/Powered%20by-Research-FF6B6B?style=for-the-badge&logo=academia&logoColor=white)](https://towervision.io)

</div>