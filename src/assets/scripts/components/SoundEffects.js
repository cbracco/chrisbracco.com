export default class SoundEffects {
    constructor() {
        window.addEventListener('click', this.handleClick);
    }

    handleClick = (event) => {
        const el = event.target.closest('[data-sound-effect]');
        let audio;

        if (el) {
            audio = document.createElement('audio');
            audio.src = event.target
                .closest('[data-sound-effect]')
                .getAttribute('data-sound-effect');
        }

        if (audio) {
            // If target is an anchor, wait until audio is finished playing and then
            // redirect to its href
            if (event.target.tagName === 'A') {
                event.preventDefault();

                audio.addEventListener(
                    'ended',
                    () => (window.location = event.target.href),
                    false
                );
            }

            audio.addEventListener('canplaythrough', () => {
                audio.play();
                audio.removeEventListener('canplaythrough', null);
            });
        }
    };
}
