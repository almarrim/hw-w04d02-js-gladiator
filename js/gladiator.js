
export default class Gladiator {
    constructor(name, weapon) {
        this.name = name;
        this.allowedWeapons = ['Spear', 'Club', 'Trident'];
        if (this.allowedWeapons.includes(weapon)) {
            this._weapon = weapon;
        }
        else {
            console.log(`please select an allowed weapon: ${this.allowedWeapons}`)
        };
    }
    get weapon() {
        return this._weapon;
    }
    set weapon(nweapon) {
        if (this.allowedWeapons.includes(nweapon)) {
            this._weapon = nweapon;
        }
        else {
            console.log(`please select an allowed weapon: ${this.allowedWeapons}`)
        }
    }
}