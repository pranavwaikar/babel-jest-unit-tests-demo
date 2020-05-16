import MusicPlayer from './lib/MusicPlayer';

module.exports = class Car {
    constructor(RegistrationNumber, Manufactorer, Model) {
        this.Model = Model;
        this.Manufactorer = Manufactorer;
        this.RegistrationNumber = RegistrationNumber
    }

    toString() {
        return (`RegistrationNumber=${this.RegistrationNumber}, Manufactorer=${this.Manufactorer}, Model=${this.Model}`);
    }

    drive() {
        return `Driving: ${this.toString()} `;
    }

    playMusic() {
        return MusicPlayer();
    }
}