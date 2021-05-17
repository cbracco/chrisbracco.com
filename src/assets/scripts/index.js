import Navigation from './components/Navigation.js';
import ColorSchemeSwitcher from './components/ColorSchemeSwitcher.js';
import Battery from './components/Battery.js';
import SoundEffects from './components/SoundEffects.js';
import FeelingLucky from './components/FeelingLucky.js';
import BreakOut from './components/BreakOut.js';
import 'lightgallery.js';
import 'lazysizes';

// Initialize components on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const initNav = new Navigation({
        navigationMenuOffsetEl: document.getElementById('content'),
    });
    const initSchemeSwitcher = new ColorSchemeSwitcher();
    const initBattery = new Battery();
    const initSoundEffects = new SoundEffects();
    const initFeelingLucky = new FeelingLucky();
    const initBreakOut = new BreakOut();

    // Lazyload images and iframes

    const photoGrid = document.getElementById('photoGrid');
    if (lightGallery && photoGrid) {
        lightGallery(photoGrid, {
            thumbnail: true,
        });
    }
});
