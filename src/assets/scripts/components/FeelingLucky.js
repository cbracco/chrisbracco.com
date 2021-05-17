import { emojisplosion } from 'emojisplosion';

export default class FeelingLucky {
    constructor() {
        this.el = document.querySelector('[data-die]');
        this.el.addEventListener('click', this.handleClick, { once: true });
    }

    fetchRandomPost = async () => {
        let response = await fetch('/api/posts.json');

        if (!response.ok) {
            throw new Error(`Network error: ${response.status}`);
        } else {
            return await response.json();
        }
    };

    handleClick = () => {
        this.explode();
        this.fetchRandomPost()
            .then((data) => {
                const random = data[Math.floor(Math.random() * data.length)];
                setTimeout(() => (window.location = random.url), 1500);
            })
            .catch((error) => console.error(`Error occurred: ${error}`));
    };

    explode = () => {
        emojisplosion({
            emojis: ['🎲'],
            position: () => {
                const offset = this.cumulativeOffset(this.el);

                return {
                    x: offset.left + this.el.clientWidth / 2,
                    y: offset.top + this.el.clientHeight / 2,
                };
            },
            physics: {
                initialVelocities: {
                    x: {
                        max: 25,
                        min: 0,
                    },
                },
            },
        });
    };

    // https://stackoverflow.com/questions/1480133
    cumulativeOffset = (element) => {
        let top = 0;
        let left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return {
            top: top,
            left: left,
        };
    };
}
