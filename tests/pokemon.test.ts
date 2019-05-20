import {Pokemon} from "../src/Pokemon";

//to launch the tests: npm test

describe("pokemon", ()=> {
   it("nameTest", ()=> {
       let pokemon = new Pokemon("Billy", 1, 5, "fire", 10);
        expect(pokemon.name).toEqual("Billy");
   });

    it("movePriorityTest", ()=> {
        let pokemon = new Pokemon("Billy", 1, 2, "water", 20);
        expect(pokemon.movePriority).toEqual(1);
    });

    it("strengthTest", ()=> {
        let pokemon = new Pokemon("Billy", 1, 2, "water", 20);
        expect(pokemon.strength).toEqual(2);
    });

    it("elementTest", ()=> {
        let pokemon = new Pokemon("Billy", 1, 2, "water", 20);
        expect(pokemon.element).toEqual("water");
    });

    it("lifeTest", ()=> {
        let pokemon = new Pokemon("Billy", 1, 2, "water", 20);
        expect(pokemon.life).toEqual(20);
    });
});