import {Pokemon} from "./Pokemon";
import {allFight} from "./Fight";

//to lanch, type tsc in the terminal and run the index.js file in the build folder

let pokemonOne = new Pokemon("One", 10, 9, "fire", 30);
let pokemonTwo = new Pokemon("Two", 5, 8, "water", 60);
allFight(pokemonOne, pokemonTwo);