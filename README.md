# 🎨 HueCraft - Premium Color Palette Generator

<div align="center">

![HueCraft Logo](https://img.shields.io/badge/🎨-HueCraft-blueviolet?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)

**Create stunning, professional color palettes with advanced color theory**

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Stars](https://img.shields.io/github/stars/AllMightyMoon/HUECRAFT?style=flat-square)](https://github.com/AllMightyMoon/HUECRAFT/stargazers)

[🚀 Live Demo](https://allmightymoon.github.io/HUECRAFT) • [📖 Documentation](#-features) • [🐛 Report Bug](https://github.com/AllMightyMoon/HUECRAFT/issues) • [💡 Request Feature](https://github.com/AllMightyMoon/HUECRAFT/issues)

</div>

---

## 🌟 Overview

**HueCraft** is a sophisticated web-based color palette generator that creates premium-quality color schemes using advanced color theory and mathematical harmony principles. Unlike basic random color generators, HueCraft produces professional-grade palettes that designers actually want to use.

### ✨ Why HueCraft?

- 🎯 **Professional Quality** - No more muddy or ugly random colors
- 🔬 **Color Theory Based** - Uses mathematical color relationships
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- 🚀 **Zero Dependencies** - Pure HTML, CSS, and JavaScript
- 💾 **Offline Ready** - Works without internet connection
- 🎨 **Multiple Harmonies** - 6 different color harmony systems

---

## 🚀 Features

### 🎨 **Premium Color Generation**
- **7 Color Types**: Vibrant, Pastel, Deep, Muted, Bright, Earthy, Jewel
- **6 Harmony Systems**: Monochromatic, Analogous, Complementary, Triadic, Tetradic, Split-Complementary
- **HSL Color Space** for precise color control and professional results

### 🖱️ **Intuitive User Experience**
- **One-Click Copy** - Click any color to copy hex code to clipboard
- **Lock Colors** - Preserve specific colors while generating new palettes
- **Keyboard Shortcuts** - Press spacebar to generate new palettes
- **Visual Feedback** - Smooth animations and loading states

### 💾 **Palette Management**
- **Save Palettes** - Store your favorite palettes locally
- **Persistent Storage** - Palettes saved across browser sessions
- **Easy Management** - View, use, and delete saved palettes

### 📸 **Advanced Features**
- **Image Color Extraction** - Upload images to extract dominant colors
- **PNG Export** - Download palettes as high-quality images
- **Harmony Indicators** - See which color theory is being applied

### 📱 **Responsive Design**
- **Mobile-First** approach for perfect mobile experience
- **Adaptive Layout** - From 1-column mobile to 5-column desktop
- **Touch-Friendly** - Optimized for touch interactions

---

## 🖼️ Screenshots

<div align="center">

### Desktop View
![Desktop Screenshot](https://via.placeholder.com/800x500/667eea/ffffff?text=Desktop+View+-+HueCraft)

### Mobile View
![Mobile Screenshot](https://via.placeholder.com/300x600/764ba2/ffffff?text=Mobile+View)

### Color Harmonies
![Color Harmonies](https://via.placeholder.com/800x300/667eea/ffffff?text=Different+Color+Harmony+Types)

</div>

---

## 🚀 Quick Start

### Option 1: Direct Download
1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. Start creating beautiful palettes!

### Option 2: Clone Repository
```bash
git clone https://github.com/AllMightyMoon/HUECRAFT.git
cd HUECRAFT
# Open index.html in your browser
```

### Option 3: Local Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

---

## 🎯 Usage

### Basic Usage
1. **Generate Palette** - Click "Generate Palette" or press `Spacebar`
2. **Copy Colors** - Click any color block to copy its hex code
3. **Lock Colors** - Click the lock icon to preserve colors during regeneration
4. **Save Palette** - Click "Save Palette" to store your creation

### Advanced Features
- **Extract from Image** - Upload an image to extract its color scheme
- **Export PNG** - Download your palette as a professional image file
- **View Saved Palettes** - Access your saved creations anytime

### Keyboard Shortcuts
- `Spacebar` - Generate new palette
- `Click` - Copy hex code to clipboard

---

## 🎨 Color Theory Systems

HueCraft implements professional color theory principles:

| Harmony Type | Description | Use Case |
|--------------|-------------|----------|
| **Monochromatic** | Same hue, different saturation/lightness | Elegant, sophisticated designs |
| **Analogous** | Adjacent colors on color wheel | Natural, harmonious feels |
| **Complementary** | Opposite colors + variations | High contrast, vibrant designs |
| **Triadic** | Three equally spaced colors | Balanced, vibrant palettes |
| **Tetradic** | Four colors in rectangle | Complex, rich color schemes |
| **Split-Complementary** | Base + two adjacent to complement | Softer than complementary |

---

## 🛠️ Technical Details

### Architecture
- **Pure Vanilla JavaScript** - No frameworks or dependencies
- **CSS Grid & Flexbox** - Modern responsive layouts
- **localStorage API** - Client-side palette storage
- **Canvas API** - Image processing and PNG export
- **Clipboard API** - Modern copy functionality with fallbacks

### Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

### File Structure
```
HUECRAFT/
├── index.html          # Main HTML structure
├── style.css           # Responsive CSS styles
├── script.js           # Core JavaScript functionality
├── README.md          # Project documentation
└── LICENSE            # MIT License
```

---

## 🎨 Color Types Explained

### Premium Color Categories

| Type | Saturation | Lightness | Best For |
|------|------------|-----------|----------|
| **Vibrant** | 70-100% | 45-65% | Energetic, modern designs |
| **Pastel** | 25-65% | 75-95% | Soft, gentle interfaces |
| **Deep** | 60-100% | 15-45% | Luxury, premium feels |
| **Muted** | 20-60% | 40-80% | Professional, sophisticated |
| **Bright** | 80-100% | 60-85% | Playful, attention-grabbing |
| **Earthy** | 30-80% | 25-75% | Natural, organic themes |
| **Jewel** | 70-100% | 30-55% | Rich, elegant designs |

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute
- 🐛 **Report Bugs** - Found an issue? Let us know!
- 💡 **Suggest Features** - Have ideas for improvements?
- 🔧 **Submit PRs** - Fix bugs or add features
- 📖 **Improve Docs** - Help make documentation better
- ⭐ **Star the Repo** - Show your support!

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Coding Standards
- Use meaningful variable names
- Comment complex algorithms
- Follow existing code style
- Test on multiple browsers
- Ensure mobile responsiveness

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ No warranty
- ❌ No liability

---

## 🙏 Acknowledgments

- **Color Theory** - Based on traditional color wheel principles
- **Design Inspiration** - Modern UI/UX best practices
- **Community** - Thanks to all contributors and users!

---

## 📊 Project Stats

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/AllMightyMoon/HUECRAFT?style=flat-square)
![GitHub code size](https://img.shields.io/github/languages/code-size/AllMightyMoon/HUECRAFT?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/AllMightyMoon/HUECRAFT?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/AllMightyMoon/HUECRAFT?style=flat-square)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AllMightyMoon/HUECRAFT?style=flat-square)

</div>

---

## 🔗 Links

- **🌐 Live Demo**: [HueCraft on GitHub Pages](https://allmightymoon.github.io/HUECRAFT)
- **📂 Repository**: [GitHub Repository](https://github.com/AllMightyMoon/HUECRAFT)
- **🐛 Issues**: [Report Issues](https://github.com/AllMightyMoon/HUECRAFT/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/AllMightyMoon/HUECRAFT/discussions)

---

<div align="center">

**Made with ❤️ by [AllMightyMoon](https://github.com/AllMightyMoon)**

*If you find HueCraft useful, please consider giving it a ⭐ star on GitHub!*

**[⬆ Back to Top](#-huecraft---premium-color-palette-generator)**

</div>