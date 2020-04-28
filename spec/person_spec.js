const {Person} = require("../person")

describe ("Person object", () => {
    let person = new Person('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives'] );

    it("should show that Person is an object", () => {
        let type = typeof (person);
        expect(type).toEqual('object');
    }) 

    it("should show array length as 3", () => {
        let maxLength = person.interests.length;
        expect(maxLength).toBe(3);
    })

    it("should print hello() method", () => {
        let greeting = person.hello();
        expect(greeting).toEqual('Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives.');
    })
})