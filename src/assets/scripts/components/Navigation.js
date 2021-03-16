//
// Navigation
//
// A basic, toggle-able navigation menu.
//

import { debounce } from '../utils/debounce.js';
import { getDistanceFromTop } from '../utils/getDistanceFromTop.js';

export default class Navigation {
    constructor(options) {
        // Set defaults
        const defaults = {
            rootEl: document.documentElement,
            toggleEl: document.querySelector('[data-navigation-toggle]'),
            navigationMenuEl: document.querySelector('[data-navigation-menu]'),
            navigationMenuPosition: null,
            navigationMenuOffsetEl: document.documentElement,
            enabled: false,
        };

        // Merge defaults and user settings
        const settings = {
            ...defaults,
            ...options,
        };

        // Bind settings to instance
        this.rootEl = settings.rootEl;
        this.navigationMenuEl = settings.navigationMenuEl;
        this.navigationMenuOffsetEl = settings.navigationMenuOffsetEl;
        this.toggleEl = settings.toggleEl;

        // Set some initial state
        this.navigationMenuOffset = this.getDistanceFromTopRem(
            this.navigationMenuOffsetEl
        );

        // If nav is `position: fixed` on init, listen for toggle button clicks
        if (this.getPositionStyleValue(this.navigationMenuEl) === 'fixed') {
            this.enableToggle();
        } else {
            // Otherwise, disable the toggle button
            this.disableToggle();
        }

        // Listen for when navigation menu transition ends
        this.navigationMenuEl.addEventListener(
            this.transitionEndEvent(),
            this.handleTransitionEnd,
            false
        );

        // Listen for window resize events (debounced for performance)
        window.addEventListener(
            'resize',
            debounce(this.handleWindowResize, 50)
        );
    }

    // Builds the transitionend event string
    transitionEndEvent = () => {
        const transitions = {
            transition: 'transitionend',
            OTransition: 'oTransitionEnd',
            MozTransition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd',
        };

        for (var t in transitions) {
            if (this.rootEl.style[t] !== undefined) {
                return transitions[t];
            }
        }

        return undefined;
    };

    // Removes `is-transitioning` class after each transitionend event
    handleTransitionEnd = (event) => {
        if (event.propertyName === 'opacity') {
            this.navigationMenuEl.classList.remove('is-transitioning');
        }
    };

    // Get the current position style value for the navigation menu
    getPositionStyleValue = (element) => {
        return getComputedStyle(element).position;
    };

    handleWindowResize = () => {
        // Update navigation menu styles
        this.navigationMenuOffset = this.getDistanceFromTopRem(
            this.navigationMenuOffsetEl
        );
        this.navigationMenuEl.style.top = this.navigationMenuOffset;

        // Decide whether to enable or disable navigation menu toggle feature
        // based on its position style value at any given viewport size
        //
        // fixed = enabled
        // anything else = disabled
        if (this.getPositionStyleValue(this.navigationMenuEl) === 'fixed') {
            this.enableToggle();
        } else {
            this.disableToggle();
        }
    };

    handleClick = () => {
        this.toggleNavigationMenu();
    };

    toggleNavigationMenu = () => {
        this.rootEl.classList.toggle('scroll-lock');

        this.navigationMenuEl.classList.add('is-transitioning');
        this.navigationMenuEl.classList.toggle('is-visible');

        this.toggleEl.classList.toggle('is-active');
        if (this.toggleEl.getAttribute('aria-expanded') === 'true') {
            this.toggleEl.setAttribute('aria-expanded', 'false');
        } else {
            this.toggleEl.setAttribute('aria-expanded', 'true');
        }
    };

    // Enable toggle features
    enableToggle = () => {
        // Update navigation menu styles
        this.navigationMenuOffset = this.getDistanceFromTopRem(
            this.navigationMenuOffsetEl
        );
        this.navigationMenuEl.style.top = this.navigationMenuOffset;
        if (!this.enabled) {
            this.toggleEl.addEventListener('click', this.handleClick, false);
            this.toggleEl.setAttribute('aria-expanded', 'false');
            this.toggleEl.disabled = null;
            this.enabled = true;
        }
    };

    // Disable toggle features
    disableToggle = () => {
        this.navigationTopValue = null;

        this.rootEl.classList.remove('scroll-lock');

        this.navigationMenuEl.classList.remove('is-visible');
        // Update navigation menu styles
        this.navigationMenuOffset = '';
        this.navigationMenuEl.style.top = this.navigationMenuOffset;

        this.toggleEl.removeAttribute('data-event-click');
        this.toggleEl.removeEventListener('click', this.handleClick);
        this.toggleEl.removeAttribute('aria-expanded');
        this.toggleEl.classList.remove('is-active');
        this.toggleEl.disabled = true;

        this.enabled = false;
    };

    getDistanceFromTopRem = (element) => {
        return `${(getDistanceFromTop(element) / 16).toFixed(3)}rem`;
    };
}
