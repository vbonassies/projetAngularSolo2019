import {Pokemon} from "../src/Pokemon";
import {attackOrder} from "../src/Fight";
import {fight} from "../src/Fight";
import {allFight} from "../src/Fight";
import {isStrong} from "../src/Fight";

//to launch the tests: npm test

describe("fight", ()=> {
    describe('test', ()=>{
        it("attackOrderPokemonTwoGoesFirst", ()=> {
            let pokemonOne = new Pokemon("One", 1, 5, "earth", 15);
            let pokemonTwo = new Pokemon("Two", 5, 5, "earth", 15);
            expect(attackOrder(pokemonOne, pokemonTwo)).toEqual(pokemonTwo);
        });

        it("attackOrderPokemonOneGoesFirst", ()=> {
            let pokemonOne = new Pokemon("One", 10, 5, "earth", 15);
            let pokemonTwo = new Pokemon("Two", 5, 5, "earth", 15);
            expect(attackOrder(pokemonOne, pokemonTwo)).toEqual(pokemonOne);
        });

        it("loseLife", ()=> {
            let pokemonOne = new Pokemon("One", 10, 5, "earth", 15);
            let pokemonTwo = new Pokemon("Two", 5, 10, "earth", 8);
            fight(pokemonOne, pokemonTwo);
            expect(pokemonTwo.life).toEqual(3);
        });

        it("loseALotOfLife", ()=> {
            let pokemonOne = new Pokemon("One", 10, 5, "earth", 5);
            let pokemonTwo = new Pokemon("Two", 5, 10, "earth", 8);
            fight(pokemonTwo, pokemonOne);
            expect(pokemonOne.life).toEqual(0);
        });

        it("pokemonOneShouldWin", ()=> {
            let pokemonOne = new Pokemon("One", 10, 15, "earth", 30);
            let pokemonTwo = new Pokemon("Two", 5, 2, "earth", 40);
            expect(allFight(pokemonOne, pokemonTwo)).toEqual(pokemonOne);
        });

        it("shouldBeStrong", ()=> {
            let pokemonOne = new Pokemon("One", 10, 15, "water", 30);
            let pokemonTwo = new Pokemon("Two", 5, 2, "fire", 40);
            expect(isStrong(pokemonOne, pokemonTwo)).toEqual(true);
        });

        it("isStrongSoStrenghX2", ()=> {
            let pokemonOne = new Pokemon("One", 10, 15, "water", 30);
            let pokemonTwo = new Pokemon("Two", 5, 2, "fire", 40);
            if(isStrong(pokemonOne, pokemonTwo)) {
                pokemonOne.strength = pokemonOne.strength * 2;
            }
            expect(pokemonOne.strength).toEqual(30);
        });

        it("shouldNotBeStrong", ()=> {
            let pokemonOne = new Pokemon("One", 10, 15, "fire", 30);
            let pokemonTwo = new Pokemon("Two", 5, 2, "fire", 40);
            expect(isStrong(pokemonOne, pokemonTwo)).toEqual(false);
        });

        it("pokemonTwoShouldWin", ()=> {
            let pokemonOne = new Pokemon("One", 10, 9, "fire", 30);
            let pokemonTwo = new Pokemon("Two", 5, 8, "water", 60);
            expect(allFight(pokemonOne, pokemonTwo)).toEqual(pokemonTwo);
        })
    })
});