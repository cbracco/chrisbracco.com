export default class Battery {
    constructor(options) {
        const defaults = {
            batteryEl: document.querySelector('[data-battery]'),
            batteryLevelEl: document.querySelector('[data-battery-level]'),
            lifeExpectancy: 90,
            birthDate: Date.UTC(1988, 3, 15, 20, 28),
        };

        const settings = {
            ...defaults,
            ...options,
        };

        this.lifeExpectancy = settings.lifeExpectancy;
        this.birthDate = settings.birthDate;
        this.batteryEl = settings.batteryEl;
        this.batteryLevelEl = settings.batteryLevelEl;

        this.secondsAlive = (Date.now() - this.birthDate) / 1000;
        this.lifeExpectancyInSeconds =
            this.lifeExpectancy * 365.26 * 24 * 60 * 60;
        this.secondsLeft = this.lifeExpectancyInSeconds - this.secondsAlive;

        this.lifePercentageRemaining = (
            (this.secondsLeft / this.lifeExpectancyInSeconds) *
            100
        ).toFixed(8);

        const timer = setInterval(this.updateBatteryLevel, 100);
    }

    calculateLifeRemaining = () => {
        const secondsAlive = (Date.now() - this.birthDate) / 1000;

        const lifeExpectancyInSeconds =
            this.lifeExpectancy * 365.26 * 24 * 60 * 60;

        const secondsRemaining = lifeExpectancyInSeconds - secondsAlive;

        const lifeRemaining = (
            (secondsRemaining / lifeExpectancyInSeconds) *
            100
        ).toFixed(8);

        return lifeRemaining;
    };

    updateBatteryLevel = () => {
        const remaining = this.calculateLifeRemaining();
        const batteryColor =
            remaining >= 50
                ? 'var(--green)'
                : remaining < 50 && remaining >= 20
                ? 'var(--yellow)'
                : 'var(--red)';
        this.batteryEl.setAttribute('data-life-remaining', `${remaining}%`);
        this.batteryLevelEl.style.color = batteryColor;
        this.batteryLevelEl.style.backgroundColor = batteryColor;
        this.batteryLevelEl.style.width = remaining + '%';
    };
}
