const {Person} = require("../src/person")

describe ("Person", () => {
    let person = new Person('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives']);

    it("should show that person is an object", () => {
        expect(typeof(person)).toEqual('object');
    }) 

    it("should have a name", () => {
        expect(person.name).toEqual("Ryan");
    })

    it("should have an age", () => {
        expect(person.age).toBe(30);
    })

    it("should have a gender", () => {
        expect(person.gender).toEqual("male");
    })

    it("should have interests", () => {
        expect(person.interests).toEqual(['being a hardarse','agile', 'ssd hard drives']);
    })

    it("should print hello greeting", () => {
        let greeting = person.hello();
        expect(greeting).toEqual('Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives.');
    })
})
