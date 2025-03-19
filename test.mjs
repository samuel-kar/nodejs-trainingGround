import assert from "assert";
import { getAge, getAgeGroup, getAgeForPerson, divideIt } from "./index.mjs";

describe("age calculator", () => {
    it("someone born 1972 is 50 in 2022", () =>{
        // act
        const result = getAge(1972,2022);

        //assert
        assert.equal(result, 50);
    });
    it("someone born 2021 is 1 in 2022", () =>{
        //arrange
        //act
        const result = getAge(2021,2022);

        //assert
        assert.equal(result, 1);
    });
    it("someone born 1980 is 45 in 2025", () =>{
        const result = getAge(1980, 2025);

        assert.equal(result, 45);
    });

});

describe("age classifier", () => {
    it("less than 0 years old returns error", () => {
        //arrange
        //act
        const result = getAgeGroup(-4);
        //assert
        assert.equal(result, "error");
    });
    it("0-3 years old should be a toddler", () => {
        //arrange
        //act
        const result0 = getAgeGroup(0);
        const result1 = getAgeGroup(1);
        const result2 = getAgeGroup(2);
        const result3 = getAgeGroup(3);

        //assert
        assert.equal(result0, "toddler");
        assert.equal(result1, "toddler");
        assert.equal(result2, "toddler");
        assert.equal(result3, "toddler");
    });
    it("4-12 years old should be a kid", () => {
        //arrange
        //act
        const result = getAgeGroup(4);
        //assert
        assert.equal(result, "kid");
    });
    it("13-19 years old should be a teenager", () => {
        //arrange
        //act
        const result = getAgeGroup(15);
        //assert
        assert.equal(result, "teenager");
    });
    
    it("20-39 years old should be an adult", () => {
        //arrange
        //act
        const result = getAgeGroup(23);
        //assert
        assert.equal(result, "adult");
    });
    it("above 39 years old... you are just old", () => {
        //arrange
        //act
        const result = getAgeGroup(41);
        //assert
        assert.equal(result, "old");
    });
    it("But 50 - that's prime age, man", () =>{
        //arrange
        //act
        const result = getAgeGroup(50);
        //assert
        assert.equal(result, "prime");
    });
});

describe("constants and variables", () =>{
    it.skip("const means constant", ()=>{
        const aNumber = 1;
        aNumber = 2;
    });
    it("you can change a let variable", () =>{
        //arrange
        let aNumber = 1;
        //act
        aNumber = 2;
        //assert
        assert.equal(aNumber, 2);
    });
    it("null should be used for not set", () => {
        //arrange
        //declaring a dummy function
        const peekIntoTheBox = () => {
            return false;
        }

        //act
        let isCatAlive = null;
        //assert
        assert.equal(null, isCatAlive);
        isCatAlive = peekIntoTheBox();
    });
});
describe("arrays intro", () => {
    it("array keep values", () => {
        //arrange
        const array1 = [1, 2, 3, 4];
        const array2 = ["Marcus", "Eliza", "Obai"];
        const array3 = ["Marcus", 49, true];
    });

    it("getting elements out of arrays", () =>{
        //arrange
        const names = ["Marcus", "Julius", "Augustus"];

        //act
        const firstElement = names[0];
        const secondElement = names[1];

        const length = names.length;
        const lastElement = names[names.length - 1];
        //assert
        assert.equal(firstElement, "Marcus");
        assert.equal(secondElement, "Julius");
        assert.equal(lastElement, "Augustus");
        assert.equal(length,3);
    });
});
describe("loops does things over and over", () => {
    it.skip("while loops just keeps going...", () => {
        //arrange
        let counter = 0;
        //act
        while(counter < 2) {
            console.log(`Counter is now '${counter}'`);
            counter = counter + 1;
        }
    });
    it.skip("looping through an array with while loop", () => {
        //arrange
        let index = 0;
        const names =["Samwise", "Frodo", "Merry"];

        //act
        while (index < names.length) {
            console.log(`Index is now at: '${index}'`);
            console.log(`Name at index is: '${names[index]}'`);
            index += 1;
        }
    });
    it("loop through an array with a for loop", () => {
        const names =["Samwise", "Frodo", "Merry"];
        
        for (let i=0; i<names.length; i++){
            console.log(`We're now at index '${i}'`);
            console.log(`Name at this index: '${names[i]}'`);
        }
    });
    it("calling getAge for each age", () => {
        //arrange
        const currentYear = 2025;
        const birthYear = [1973, 2000, 1632];

        //act
        for (let i=0; i < birthYear.length; i++) {
            const age = getAge(birthYear[i], currentYear);

            console.log(
                `If you were born in ${birthYear[i]}, 
                then you are ${age} in year ${currentYear}.`
            );
        }
    });

    it("adding elements to array with push", () => {
        //arrange
        const names = ["Merry", "Pippin", "Bombadil"];
        assert.equal(names.length, 3);
        //act
        names.push("Gandalf");
        
        //assert
        assert.equal(names.length, 4);
        assert.equal(names[3], "Gandalf");
    });
    it("removing element from array with pop", () => {
        //arrange
        const names = ["Boromir", "Aragorn", "Legolas", "Gimli"];
        assert.equal(names.length, 4);

        //act
        names.pop();

        //assert
        assert.equal(names.length, 3);
        assert.equal(names[3], undefined);
    });
    it("removing element from array with slice", () =>{
        //arrange
        const names = ["Mithrandir", "Gandalf", "Saruman", "Greyhame"];
        assert.equal(names.length, 4);

        //act
        names.splice(0, 2);
        //assert
        assert.equal(names.length, 2);
        assert.equal(names[1], "Greyhame");

    });
    it("adding elements to immutable array", () => {
        //arrange
        const names = ["Johan", "Petter", "Lisa"];
        assert.equal(names.length, 3);
        //act
        const newNames = [...names, "Stefan"];

        //assert
        assert.equal(names.length, 3);
        assert.equal(newNames.length, 4);
        assert.equal(newNames[3], "Stefan");
    });
    it("filter an array - mutable", () => {
        //arrange
        const numbers = [10, 23, 1, 33, 8, 12];
        assert.equal(numbers.length, 6);

        //act
        for (let i=0;i < numbers.length; i++) {
            if (numbers[i]>10) {
                numbers.splice(i, 1);
            }
        }

        //assert
        assert.equal(numbers.length, 3);
        assert.equal(numbers[2], 8);
    });

    it("filter an array - immutable", () => {
        //arrange
        const numbers = [10, 23, 1, 33, 8, 12];

        //act
        const highNumbers = numbers.filter((x) => x > 10);

        //assert
        assert.equal(highNumbers.length, 3);
    });
});
describe("object are for buiding things", () => {
    it("our first object - a human", () => {
        //arrange
        //act
        const person = {
            name: "Marcus",
            birthYear: 1972,
            isTeacher: true,
        };

        //assert
        assert.equal(person.name, "Marcus");
        assert.equal(person.birthYear, 1972);
        assert.equal(person.isTeacher, true);
    });
    it("get age for a person", () => {
        //arrange
        const currentYear = 2025;
        const person = {
            name: "Adam",
            birthYear: 1989,
            isTeacher: false,
        };

        //act
        const age = getAgeForPerson(person, currentYear);

        //assert
        assert.equal(age, 36);
    });
    it("a person has a list of favorite movies", () => {
        //arrange
        
        //act
        const person = {
            name: "Adam",
            birthYear: 1989,
            isTeacher: false,
            favoriteMovies: ["The Matrix", "LOTR", "Harry Potter"],
        };

        //assert
        assert.equal(person.favoriteMovies.length, 3);
        assert.equal(person.favoriteMovies[1], "LOTR");
    });
    it("a person has a list of favorite movies with releaseYears", () => {
        //arrange
        //act
        const person = {
            name: "Adam",
            birthYear: 1989,
            isTeacher: false,
            favoriteMovies: [
                {
                    title: "The Matrix",
                    releaseYear: 1999,
                },
                {
                    title: "LOTR",
                    releaseYear: 2001,
                },
                {
                    title: "Harry Potter",
                    releaseYear: 2001,
                },
            ],
        };

        //assert
        assert.equal(person.favoriteMovies.length, 3);
        assert.equal(person.favoriteMovies[0].releaseYear, 1999);
        assert.equal(person.favoriteMovies[1].title, "LOTR");
    });
    it("practicing array within array", () => {
        //arrange
        //act
        const people = [
            {name: "Stefan",
                favoriteMovies: [
                    {
                        title: "LOTR",
                        releaseYear: 2001,
                    },
                    {
                        title: "The Matrix",
                        releaseYear: 1999,
                    }
                ]
            },
            {name: "Frasse",
                favoriteMovies: [
                    {
                        title: "Harry Potter",
                        releaseYear: 2001,
                    },
                    {
                        title: "Movie2",
                        releaseYear: 2005,
                    }
                ]
            }
        ]

        //assert
        assert.equal(people.length, 2);
        assert.equal(people[0].favoriteMovies[1].title, "The Matrix");
    });
});
describe("division", () => {
    it("dividing 4 with 2", () =>{
        //arrange
        const numberOne = 4;
        const numberTwo = 2;

        //act
        const result = divideIt(numberOne, numberTwo);

        //assert
        assert.equal(result, 2);

    });
    it("dividing 4 by 0 and catching the error", () =>{
        //arrange
        const numberOne = 4;
        const numberTwo = 0;

        try {
        //act
        const result = divideIt(numberOne, numberTwo);
    } catch (error) {
        //assert
        assert.notEqual(error, undefined);
        assert.equal(
            error.message,
            "Pls no division by 0"
        );
    }
    });
    it("throwing an error in a test will...", () => {
        throw new Error("Reports s failing test");
    });
});