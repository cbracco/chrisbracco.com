//
// ColorSchemeToggle
//
// A manual override toggle switch for user color scheme preferences.
// Also toggles an emoji favicon based on preference.
//
// Influenced by:
// https://github.com/levimcg/themur/blob/master/src/index.js
// https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode
// https://koddsson.com/posts/emoji-favicon/
//

export default class ColorSchemeSwitcher {
    constructor(options) {
        // Set defaults
        const defaults = {
            rootEl: document.documentElement,
            toggleEl: document.querySelector('[data-color-scheme-toggle]'),
            schemeAttribute: 'data-color-scheme',
            storageKey: 'color-scheme',
        };

        // Merge defaults with user settings
        const settings = {
            ...defaults,
            ...options,
        };

        // Bind settings to instance
        this.rootEl = settings.rootEl;
        this.toggleEl = settings.toggleEl;
        this.schemeAttribute = settings.schemeAttribute;
        this.storageKey = settings.storageKey;

        // Set event handlers
        this.toggleEl.addEventListener('click', this.handleClick, false);

        // Apply any overrides already in localStorage on init
        this.overrideSystemPreference();

        // Listen for changes to user system preference
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', this.handleSystemPreferenceChange);
    }

    handleClick = () => {
        this.overrideSystemPreference(this.setColorScheme());
    };

    getSystemPreference = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    };

    overrideSystemPreference = (newScheme) => {
        const scheme = newScheme || localStorage.getItem(this.storageKey);
        if (scheme) {
            this.rootEl.setAttribute(this.schemeAttribute, scheme);
        }
    };

    setColorScheme = () => {
        let scheme = localStorage.getItem(this.storageKey);
        switch (scheme) {
            case null:
                scheme =
                    this.getSystemPreference() === 'dark' ? 'light' : 'dark';
                break;
            case 'light':
                scheme = 'dark';
                break;
            case 'dark':
                scheme = 'light';
                break;
        }
        localStorage.setItem(this.storageKey, scheme);
        return scheme;
    };
}
