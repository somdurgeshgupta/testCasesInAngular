describe('First Test', ()=>{
    let testVariable:any;

    beforeEach(()=>{
        testVariable =  {};
    });

    it("should return true if it is true", ()=>{
        testVariable.a = false;

        testVariable.a = true;

        expect(testVariable.a).toBe(true);
    });
});