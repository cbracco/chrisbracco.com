//
// Break Out
//
// Simple component that breaks any element with the included class out from its
// container and extends its width to the righthand side of the browser viewport.
//
import { debounce } from '../utils/debounce.js';

export default class BreakOut {
    constructor(options) {
        // Set defaults
        const defaults = {
            bodyEl: document.body,
            parentEl: document.querySelector('[data-breakout-parent]'),
            elementsToBreakOut: document.querySelectorAll('[data-breakout]'),
        };

        // Merge defaults with user settings
        const settings = {
            ...defaults,
            ...options,
        };

        // Bind settings to instance
        this.bodyEl = settings.bodyEl;
        this.parentEl = settings.parentEl;
        this.elementsToBreakOut = settings.elementsToBreakOut;

        // Init
        this.initBreakOut();

        // Set event handlers
        window.addEventListener('resize', debounce(this.initBreakOut, 50));
    }

    initBreakOut = () => {
        // Get viewport width minus scrollbar
        let viewportWidth = this.bodyEl.clientWidth;
        // Loop through elements, get each element width and righthand position,
        // and set width style accordingly
        this.elementsToBreakOut.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().right;
            const elementWidth = element.clientWidth;
            element.style.width = `${Math.floor(
                elementWidth + (viewportWidth - elementPosition)
            )}px`;
        });
    };
}
