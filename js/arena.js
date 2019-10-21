'strict mode'
export default class Arena {
    constructor(name, gladiators = []) {
        this._name = name;
        if (gladiators.length > 2) {
            this._gladiators = gladiators.slice(gladiators.length - 2, gladiators.length);
        }
        else {
            this._gladiators = gladiators;
        };
    }
    get name() {
        return this._name.slice(0, 1).toUpperCase() + this._name.slice(1);
    }
    set name(name) {
        this._name = name
    }
    get gladiators() {
        return this._gladiators;
    }
    set gladiators(gladiatorsList) {

        if (gladiators > 2) {
            this._gladiators = gladiators.slice(gladiators.length - 2, gladiators.length);
        }
        else {
            this._gladiators = gladiators;
        }


    }
    addGladiator(newGladiator) {
        this._gladiators.push(newGladiator);
        if (this._gladiators.length > 2) {
            this._gladiators.shift();
        }
    }
    fight() {
        if (this._gladiators.length == 2) {
            const weight = ['Club', 'Spear', 'Trident']
            const a = weight.indexOf(this._gladiators[0].weapon);
            const b = weight.indexOf(this._gladiators[1].weapon);
            const x = a - b;
            const winners = [1, -2];
            console.log(a)
            if (winners.includes(x)) {
                this._gladiators.pop();
            }
            else if (x == 0) {
                this._gladiators = [];
            }
            else {
                this._gladiators.shift();
            }
        }
    }
}


