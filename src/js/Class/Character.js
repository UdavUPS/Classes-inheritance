export class Character {
    constructor (name, type) {
        const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (name.health < 2 || name.health > 10) {
            throw new Error('Имя должно содержать не менее 2 и не более 10 символов');
        } else {
            this.name = name;
        }

        if (!types.includes(type)) {
            throw new Error('Неизвестное существо');
        } else {
            this.type = type;
        }

        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
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