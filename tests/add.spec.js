describe("Iteration 1 | Getting Started", () => {
    describe("Function add", () => {
      it("should be defined", () => {
        expect(add).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(add.length).toBe(2);
      });
  
      it("should return the sum of the two numbers", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(3, 4)).toEqual(7);
        expect(add(100, 47)).toEqual(147);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(add(1)).toEqual(undefined);
        expect(add()).toEqual(undefined);
        expect(add(undefined, 1)).toEqual(undefined);
      });
      it("should return undefined if any of the arguments is not a number", () => {
        expect(add(1, "string")).toEqual(undefined);
        expect(add("string")).toEqual(undefined);
        expect(add("string", 1)).toEqual(undefined);
        expect(add(1, undefined)).toEqual(undefined);
        expect(add(undefined)).toEqual(undefined);
        expect(add(undefined, 1)).toEqual(undefined);
        expect(add(1, null)).toEqual(undefined);
        expect(add(null)).toEqual(undefined);
        expect(add(null, 1)).toEqual(undefined);
        expect(add(1, true)).toEqual(undefined);
        expect(add(true)).toEqual(undefined);
        expect(add(true, 1)).toEqual(undefined);
        expect(add(1, false)).toEqual(undefined);
        expect(add(false)).toEqual(undefined);
        expect(add(false, 1)).toEqual(undefined);
        expect(add(1, [])).toEqual(undefined);
        expect(add([])).toEqual(undefined);
        expect(add([], 1)).toEqual(undefined);
        expect(add(1, {})).toEqual(undefined);
        expect(add({})).toEqual(undefined);
        expect(add({}, 1)).toEqual(undefined);
      });
    });
  });
  