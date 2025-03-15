const assert = require("assert");
const app = require("./index.js");

describe("age calculator", () => {
    it("someone born 1972 is 50 in 2022", () =>{
        // act
        const result = app.getAge(1972,2022);

        //assert
        assert.equal(result, 50);
    });
    it("someone born 2021 is 1 in 2022", () =>{
        //arrange
        //act
        const result =app.getAge(2021,2022);

        //assert
        assert.equal(result, 1);
    });
    it("someone born 1980 is 45 in 2025", () =>{
        const result = app.getAge(1980, 2025);

        assert.equal(result, 45);
    });

});