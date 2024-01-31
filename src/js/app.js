// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

class Character {
    constructor (name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {
        if (this.health != 0) {
            this.level++;
            this.health = 100;
            this.attack = this.attack + this.attack * 0.20;
            this.defence = this.defence + this.defence * 0.20;
        } else {
            throw 'нельзя повысить левел умершего';
        }
    }

    damage(points) {
        if ( this.health >= 0 ) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}

export class Bowerman extends Character {
    constructor (name) {
        super(name, 'Bowerman', 100, 1, 25, 25);
    }
}

export class Swordsman extends Character {
    constructor (name) {
        super(name, 'Swordsman', 100, 1, 40, 10);
    }
}

export class Magician extends Character {
    constructor (name) {
        super(name, 'Magician', 100, 1, 10, 40);
    }
}

export class Daemon extends Character {
    constructor (name) {
        super(name, 'Daemon', 100, 1, 10, 40);
    }
}

export class Undead extends Character {
    constructor (name) {
        super(name, 'Undead', 100, 1, 25, 25);
    }
}

export class Zombie extends Character {
    constructor (name) {
        super(name, 'Zombie', 100, 1, 40, 10);
    }
}
