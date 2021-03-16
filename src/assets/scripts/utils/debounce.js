//
// Simple debounce function
// https://davidwalsh.name/javascript-debounce-function
//

export function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        const context = this;
        const args = arguments;
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
