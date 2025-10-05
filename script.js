/**
 * HueCraft - Color Palette Generator
 * A modern web app for creating and managing color palettes
 */

class HueCraft {
    constructor() {
        this.colors = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
        this.lockedColors = [false, false, false, false, false];
        this.savedPalettes = this.loadSavedPalettes();
        
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        this.setupEventListeners();
        this.generatePalette();
        this.renderSavedPalettes();
    }

    /**
     * Set up all event listeners
     */
    setupEventListeners() {
        // Generate palette button
        document.getElementById('generateBtn').addEventListener('click', () => {
            this.generatePalette();
        });

        // Save palette button
        document.getElementById('savePaletteBtn').addEventListener('click', () => {
            this.savePalette();
        });

        // Image upload
        document.getElementById('uploadBtn').addEventListener('click', () => {
            document.getElementById('imageUpload').click();
        });

        document.getElementById('imageUpload').addEventListener('change', (e) => {
            this.extractColorsFromImage(e.target.files[0]);
        });

        // Export PNG button
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportPalettePNG();
        });

        // Color block interactions
        document.querySelectorAll('.color-block').forEach((block, index) => {
            // Copy hex code on click
            block.addEventListener('click', (e) => {
                if (!e.target.classList.contains('lock-btn')) {
                    this.copyToClipboard(this.colors[index], e);
                }
            });

            // Lock button
            const lockBtn = block.querySelector('.lock-btn');
            lockBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleLock(index);
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                this.generatePalette();
            }
        });
    }

    /**
     * Generate a premium color palette with harmony
     */
    generatePalette() {
        const generateBtn = document.getElementById('generateBtn');
        generateBtn.classList.add('loading');

        // Add animation class
        document.querySelectorAll('.color-block').forEach(block => {
            block.classList.add('color-changing');
        });

        setTimeout(() => {
            // Generate harmonious palette
            const paletteType = this.getRandomPaletteType();
            const newColors = this.generateHarmoniousPalette(paletteType);
            
            // Update palette type display
            this.updatePaletteTypeDisplay(paletteType);
            
            for (let i = 0; i < 5; i++) {
                if (!this.lockedColors[i]) {
                    this.colors[i] = newColors[i] || this.generateRandomColor();
                    this.updateColorBlock(i);
                }
            }

            // Remove animation class
            document.querySelectorAll('.color-block').forEach(block => {
                block.classList.remove('color-changing');
            });

            generateBtn.classList.remove('loading');
        }, 300);
    }

    /**
     * Get random palette type for generation
     * @returns {string} Palette type
     */
    getRandomPaletteType() {
        const types = [
            'monochromatic',
            'analogous', 
            'complementary',
            'triadic',
            'tetradic',
            'split-complementary'
        ];
        return types[Math.floor(Math.random() * types.length)];
    }

    /**
     * Generate harmonious color palette based on color theory
     * @param {string} type - Palette type
     * @returns {Array} Array of hex colors
     */
    generateHarmoniousPalette(type) {
        const baseHue = Math.floor(Math.random() * 360);
        const colors = [];
        
        switch (type) {
            case 'monochromatic':
                // Same hue, different saturation and lightness
                const baseSat = 60 + Math.random() * 30;
                const baseLit = 45 + Math.random() * 20;
                
                for (let i = 0; i < 5; i++) {
                    const s = Math.max(20, Math.min(90, baseSat + (Math.random() - 0.5) * 40));
                    const l = Math.max(20, Math.min(80, baseLit + (i - 2) * 15 + (Math.random() - 0.5) * 10));
                    colors.push(this.hslToHex(baseHue, s, l));
                }
                break;
                
            case 'analogous':
                // Adjacent colors on color wheel
                for (let i = 0; i < 5; i++) {
                    const h = (baseHue + i * 30) % 360;
                    const s = 60 + Math.random() * 25;
                    const l = 45 + Math.random() * 30;
                    colors.push(this.hslToHex(h, s, l));
                }
                break;
                
            case 'complementary':
                // Opposite colors + variations
                const comp = (baseHue + 180) % 360;
                for (let i = 0; i < 5; i++) {
                    const h = i < 3 ? baseHue + (i * 15) : comp + ((i - 3) * 15);
                    const s = 65 + Math.random() * 25;
                    const l = 40 + Math.random() * 35;
                    colors.push(this.hslToHex(h, s, l));
                }
                break;
                
            case 'triadic':
                // Three colors equally spaced
                for (let i = 0; i < 5; i++) {
                    const h = (baseHue + (i % 3) * 120 + (i > 2 ? 20 : 0)) % 360;
                    const s = 60 + Math.random() * 30;
                    const l = 40 + Math.random() * 35;
                    colors.push(this.hslToHex(h, s, l));
                }
                break;
                
            case 'tetradic':
                // Four colors in rectangle
                const hues = [baseHue, (baseHue + 90) % 360, (baseHue + 180) % 360, (baseHue + 270) % 360];
                for (let i = 0; i < 5; i++) {
                    const h = hues[i % 4] + (i === 4 ? 30 : 0);
                    const s = 65 + Math.random() * 25;
                    const l = 45 + Math.random() * 30;
                    colors.push(this.hslToHex(h, s, l));
                }
                break;
                
            case 'split-complementary':
                // Base + two colors adjacent to complement
                const splitComp1 = (baseHue + 150) % 360;
                const splitComp2 = (baseHue + 210) % 360;
                colors.push(this.hslToHex(baseHue, 70, 50));
                colors.push(this.hslToHex(splitComp1, 70, 50));
                colors.push(this.hslToHex(splitComp2, 70, 50));
                colors.push(this.hslToHex(baseHue + 30, 60, 60));
                colors.push(this.hslToHex(splitComp1 + 15, 60, 60));
                break;
                
            default:
                // Fallback to individual premium colors
                for (let i = 0; i < 5; i++) {
                    colors.push(this.generateRandomColor());
                }
        }
        
        return colors;
    }

    /**
     * Update palette type display
     * @param {string} type - Palette type
     */
    updatePaletteTypeDisplay(type) {
        const paletteTypeElement = document.getElementById('paletteType');
        if (paletteTypeElement) {
            const displayNames = {
                'monochromatic': '🎨 Monochromatic Harmony',
                'analogous': '🌈 Analogous Harmony', 
                'complementary': '⚡ Complementary Harmony',
                'triadic': '🔺 Triadic Harmony',
                'tetradic': '⬜ Tetradic Harmony',
                'split-complementary': '💫 Split-Complementary'
            };
            
            paletteTypeElement.textContent = displayNames[type] || '✨ Premium Palette';
        }
    }

    /**
     * Generate a premium quality color using advanced algorithms
     * @returns {string} Hex color code
     */
    generateRandomColor() {
        const colorTypes = [
            'vibrant',
            'pastel', 
            'deep',
            'muted',
            'bright',
            'earthy',
            'jewel'
        ];
        
        const randomType = colorTypes[Math.floor(Math.random() * colorTypes.length)];
        return this.generateColorByType(randomType);
    }

    /**
     * Generate color based on specific type/mood
     * @param {string} type - Color type (vibrant, pastel, etc.)
     * @returns {string} Hex color code
     */
    generateColorByType(type) {
        let h, s, l;
        
        switch (type) {
            case 'vibrant':
                h = Math.floor(Math.random() * 360);
                s = 70 + Math.random() * 30; // 70-100%
                l = 45 + Math.random() * 20; // 45-65%
                break;
                
            case 'pastel':
                h = Math.floor(Math.random() * 360);
                s = 25 + Math.random() * 40; // 25-65%
                l = 75 + Math.random() * 20; // 75-95%
                break;
                
            case 'deep':
                h = Math.floor(Math.random() * 360);
                s = 60 + Math.random() * 40; // 60-100%
                l = 15 + Math.random() * 30; // 15-45%
                break;
                
            case 'muted':
                h = Math.floor(Math.random() * 360);
                s = 20 + Math.random() * 40; // 20-60%
                l = 40 + Math.random() * 40; // 40-80%
                break;
                
            case 'bright':
                h = Math.floor(Math.random() * 360);
                s = 80 + Math.random() * 20; // 80-100%
                l = 60 + Math.random() * 25; // 60-85%
                break;
                
            case 'earthy':
                // Browns, oranges, greens
                const earthyHues = [20, 30, 35, 40, 60, 80, 100, 120];
                h = earthyHues[Math.floor(Math.random() * earthyHues.length)] + (Math.random() - 0.5) * 20;
                s = 30 + Math.random() * 50; // 30-80%
                l = 25 + Math.random() * 50; // 25-75%
                break;
                
            case 'jewel':
                // Rich, saturated colors like emerald, ruby, sapphire
                const jewelHues = [0, 30, 60, 120, 180, 240, 280, 320];
                h = jewelHues[Math.floor(Math.random() * jewelHues.length)] + (Math.random() - 0.5) * 15;
                s = 70 + Math.random() * 30; // 70-100%
                l = 30 + Math.random() * 25; // 30-55%
                break;
                
            default:
                h = Math.floor(Math.random() * 360);
                s = 50 + Math.random() * 50;
                l = 40 + Math.random() * 40;
        }
        
        return this.hslToHex(h, s, l);
    }

    /**
     * Convert HSL to Hex
     * @param {number} h - Hue (0-360)
     * @param {number} s - Saturation (0-100)
     * @param {number} l - Lightness (0-100)
     * @returns {string} Hex color code
     */
    hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
    }

    /**
     * Update a color block display
     * @param {number} index - Color block index
     */
    updateColorBlock(index) {
        const block = document.querySelector(`[data-index="${index}"]`);
        const colorDisplay = block.querySelector('.color-display');
        const hexCode = block.querySelector('.hex-code');

        if (!block || !colorDisplay || !hexCode) {
            console.error(`Could not find elements for color block ${index}`);
            return;
        }

        // Set color with animation
        colorDisplay.style.backgroundColor = this.colors[index];
        hexCode.textContent = this.colors[index];

        // Force all hex codes to be black color
        hexCode.style.color = '#000000';
        
        // Ensure hex code is visible and properly styled
        hexCode.style.opacity = '1';
        hexCode.style.visibility = 'visible';
        hexCode.style.display = 'inline-block';
        
        // Add consistent text shadow for better readability on white background
        hexCode.style.textShadow = '0 1px 2px rgba(255, 255, 255, 0.8)';
    }

    /**
     * Get contrasting color for text (black or white)
     * @param {string} hexColor - Hex color code
     * @returns {string} Contrasting color
     */
    getContrastColor(hexColor) {
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? '#333333' : '#FFFFFF';
    }

    /**
     * Toggle lock state for a color
     * @param {number} index - Color index
     */
    toggleLock(index) {
        this.lockedColors[index] = !this.lockedColors[index];
        const lockBtn = document.querySelector(`[data-index="${index}"] .lock-btn`);
        
        if (this.lockedColors[index]) {
            lockBtn.textContent = '🔒';
            lockBtn.classList.add('locked');
            lockBtn.setAttribute('aria-label', 'Unlock color');
        } else {
            lockBtn.textContent = '🔓';
            lockBtn.classList.remove('locked');
            lockBtn.setAttribute('aria-label', 'Lock color');
        }
    }

    /**
     * Copy hex code to clipboard with visual feedback
     * @param {string} hexCode - Color hex code
     * @param {Event} event - Click event
     */
    async copyToClipboard(hexCode, event) {
        try {
            await navigator.clipboard.writeText(hexCode);
            this.showTooltip('Copied!', event);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = hexCode;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showTooltip('Copied!', event);
        }
    }

    /**
     * Show tooltip with feedback
     * @param {string} message - Tooltip message
     * @param {Event} event - Click event for positioning
     */
    showTooltip(message, event) {
        const tooltip = document.getElementById('tooltip');
        tooltip.textContent = message;
        tooltip.style.left = event.pageX + 'px';
        tooltip.style.top = (event.pageY - 40) + 'px';
        tooltip.classList.add('show');

        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 1500);
    }

    /**
     * Save current palette to localStorage
     */
    savePalette() {
        const palette = {
            id: Date.now(),
            colors: [...this.colors],
            date: new Date().toLocaleDateString()
        };

        this.savedPalettes.unshift(palette);
        this.savePalettesToStorage();
        this.renderSavedPalettes();

        // Show feedback
        const saveBtn = document.getElementById('savePaletteBtn');
        const originalText = saveBtn.textContent;
        saveBtn.textContent = 'Saved!';
        saveBtn.style.backgroundColor = '#10ac84';
        
        setTimeout(() => {
            saveBtn.textContent = originalText;
            saveBtn.style.backgroundColor = '';
        }, 1500);
    }

    /**
     * Load saved palettes from localStorage
     * @returns {Array} Saved palettes array
     */
    loadSavedPalettes() {
        try {
            const saved = localStorage.getItem('huecraft-palettes');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Error loading saved palettes:', error);
            return [];
        }
    }

    /**
     * Save palettes to localStorage
     */
    savePalettesToStorage() {
        try {
            localStorage.setItem('huecraft-palettes', JSON.stringify(this.savedPalettes));
        } catch (error) {
            console.error('Error saving palettes:', error);
        }
    }

    /**
     * Render saved palettes in the UI
     */
    renderSavedPalettes() {
        const savedList = document.getElementById('savedList');
        
        if (this.savedPalettes.length === 0) {
            savedList.innerHTML = '<p class="empty-state">No saved palettes yet. Generate and save your first palette!</p>';
            return;
        }

        savedList.innerHTML = this.savedPalettes.map(palette => `
            <div class="saved-palette" data-palette-id="${palette.id}">
                <div class="saved-palette-colors">
                    ${palette.colors.map(color => `
                        <div class="saved-color" 
                             style="background-color: ${color}" 
                             title="${color}"
                             onclick="hueCraft.copyToClipboard('${color}', event)">
                        </div>
                    `).join('')}
                </div>
                <div class="saved-palette-info">
                    <span class="saved-date">${palette.date}</span>
                    <button class="delete-palette" onclick="hueCraft.deletePalette(${palette.id})">
                        Delete
                    </button>
                </div>
            </div>
        `).join('');
    }

    /**
     * Delete a saved palette
     * @param {number} paletteId - Palette ID to delete
     */
    deletePalette(paletteId) {
        this.savedPalettes = this.savedPalettes.filter(p => p.id !== paletteId);
        this.savePalettesToStorage();
        this.renderSavedPalettes();
    }

    /**
     * Extract colors from uploaded image
     * @param {File} file - Image file
     */
    extractColorsFromImage(file) {
        if (!file || !file.type.startsWith('image/')) {
            alert('Please select a valid image file.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const colors = this.getDominantColors(img);
                
                // Update palette with extracted colors
                for (let i = 0; i < Math.min(colors.length, 5); i++) {
                    if (!this.lockedColors[i]) {
                        this.colors[i] = colors[i];
                        this.updateColorBlock(i);
                    }
                }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    /**
     * Extract dominant colors from image using canvas
     * @param {HTMLImageElement} img - Image element
     * @returns {Array} Array of hex colors
     */
    getDominantColors(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Resize for performance
        const maxSize = 150;
        const scale = Math.min(maxSize / img.width, maxSize / img.height);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const colorMap = new Map();
        
        // Sample every 4th pixel for performance
        for (let i = 0; i < data.length; i += 16) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const alpha = data[i + 3];
            
            // Skip transparent pixels
            if (alpha < 128) continue;
            
            // Group similar colors
            const key = `${Math.floor(r/20)*20},${Math.floor(g/20)*20},${Math.floor(b/20)*20}`;
            colorMap.set(key, (colorMap.get(key) || 0) + 1);
        }
        
        // Sort by frequency and get top 5
        const sortedColors = Array.from(colorMap.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([key]) => {
                const [r, g, b] = key.split(',').map(Number);
                return this.rgbToHex(r, g, b);
            });
        
        return sortedColors.length > 0 ? sortedColors : [this.generateRandomColor()];
    }

    /**
     * Convert RGB to hex
     * @param {number} r - Red value
     * @param {number} g - Green value
     * @param {number} b - Blue value
     * @returns {string} Hex color code
     */
    rgbToHex(r, g, b) {
        return "#" + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }).join("");
    }

    /**
     * Export palette as PNG image
     */
    exportPalettePNG() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions
        canvas.width = 1000;
        canvas.height = 200;
        
        // Draw color blocks
        const blockWidth = canvas.width / 5;
        this.colors.forEach((color, index) => {
            ctx.fillStyle = color;
            ctx.fillRect(index * blockWidth, 0, blockWidth, canvas.height);
            
            // Add hex code text
            ctx.fillStyle = this.getContrastColor(color);
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(
                color,
                index * blockWidth + blockWidth / 2,
                canvas.height / 2 + 8
            );
        });
        
        // Download the image
        const link = document.createElement('a');
        link.download = `huecraft-palette-${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.hueCraft = new HueCraft();
});

// Add some useful keyboard shortcuts info (could be shown in a help modal)
console.log('HueCraft Keyboard Shortcuts:');
console.log('Space: Generate new palette');
console.log('Click any color to copy hex code');
console.log('Use lock buttons to preserve colors during generation');