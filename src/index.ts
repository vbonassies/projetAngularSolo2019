import {Pokemon} from "./Pokemon";
import {allFight} from "./Fight";

let pokemonOne = new Pokemon("One", 10, 9, "fire", 30);
let pokemonTwo = new Pokemon("Two", 5, 8, "water", 60);
allFight(pokemonOne, pokemonTwo);