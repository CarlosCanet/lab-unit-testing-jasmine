describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be define", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });
        
        it("should return the division of the two numbers", () => {
            expect(divide(10,5)).toEqual(2);
            expect(divide(4,8)).toEqual(0.5);
            expect(divide(7,2)).toEqual(7/2);
            expect(divide(9,3)).toEqual(3);
            expect(divide(-9,3)).toEqual(-3);
        });

        it("should return undefined if any of the two arguments is not provided", () => {
            expect(divide()).toEqual(undefined);
            expect(divide(1)).toEqual(undefined);
            expect(divide(undefined, 2)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(add("a", 1)).toEqual(undefined);
            expect(add(1, "ba")).toEqual(undefined);
            expect(add(1, "2")).toEqual(undefined);
            expect(add(true, 1)).toEqual(undefined);
            expect(add(2, false)).toEqual(undefined);
            expect(add(true, false)).toEqual(undefined);
            expect(add(23, null)).toEqual(undefined);
            expect(add(undefined, null)).toEqual(undefined);
        });
    })    
})