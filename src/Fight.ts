import {Pokemon} from "./Pokemon";



export function attackOrder(pokemonOne: Pokemon, pokemonTwo: Pokemon): Pokemon {
    if (pokemonOne.movePriority > pokemonTwo.movePriority) {
        return pokemonOne;
    } else if (pokemonOne.movePriority < pokemonTwo.movePriority) {
        return pokemonTwo;
    }
    if (Math.floor(Math.random() * 2) == 0) {
        return pokemonOne;
    } else {
        return pokemonTwo;
    }
}


export function isStrong(pokemonOne: Pokemon, pokemonTwo: Pokemon) {
    if (pokemonOne.element == "fire" && pokemonTwo.element == "grass") {
        return true;
    } else if (pokemonOne.element == "grass" && pokemonTwo.element == "water") {
        return true;
    } else if (pokemonOne.element == "water" && pokemonTwo.element == "fire") {
        return true;
    } else {
        return false;
    }
}

export function allFight(pokemonOne: Pokemon, pokemonTwo: Pokemon) {
    let first, second;
    first = attackOrder(pokemonOne, pokemonTwo);
    if (pokemonOne == first) {
        second = pokemonTwo;
    } else {
        second = pokemonOne;
    }
    console.log("the first pokemon to attack is: " + first.name);

    if(isStrong(first, second)) {
        first.strength = first.strength * 2;
        console.log(first.name + " is strong against " + second.name);
    }

    if(isStrong(second, first)) {
        second.strength = second.strength * 2;
        console.log(second.name + " is strong against " + first.name);
    }


    while (pokemonOne.life > 0 && pokemonTwo.life > 0) {
        fight(first, second);
        console.log(first.name + " just attacked and " + second.name + " have " + second.life + " hp left");
        if (second.life == 0) {
            break;
        }
        fight(second, first);
        console.log(second.name + " just attacked and " + first.name + " have " + first.life + " hp left");
    }
    if (pokemonTwo.life > 0) {
        console.log(pokemonTwo.name + " have won with " + pokemonTwo.life + " hp left!");
        return pokemonTwo;
    } else {
        console.log(pokemonOne.name + " have won with " + pokemonOne.life + " hp left!");
        return pokemonOne;
    }

}

export function fight(pokemonOne: Pokemon, pokemonTwo: Pokemon) {
    pokemonTwo.life = pokemonTwo.life - pokemonOne.strength;
    if (pokemonTwo.life < 0) {
        pokemonTwo.life = 0;
    }
    return pokemonTwo;
}

