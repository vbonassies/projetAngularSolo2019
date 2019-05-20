export class Pokemon {
    name : string;
    movePriority : number;
    strength  : number;
    element : string;
    life : number;

    constructor(name : string, movePriority : number, strength : number, element : string, life : number) {
        this.name = name;
        this.movePriority = movePriority;
        this.strength = strength;
        this.element = element;
        this.life = life;
    }
}
