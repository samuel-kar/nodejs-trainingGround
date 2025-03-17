import assert from "assert";
import { getAge, getAgeGroup } from "./index.mjs";

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
    it("while loops just keeps going...", () => {
        //arrange
        let counter = 0;
        //act
        while(counter < 2) {
            console.log(`Counter is now '${counter}'`);
            counter = counter + 1;
        }
    });
    it("looping through an array with while loop", () => {
        //arrange
        let index = 0;
        const names =["Samuel", "Tom", "Jonas"];

        //act
        while (index < names.length) {
            console.log(`Index is now at: '${index}'`);
            console.log(`Name at index is: '${names[index]}'`);
            index += 1;
        }
    });
});