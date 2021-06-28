var tests = require('../src/tests'); 

describe("tests function", () => {
test("Case 1", () => {
    expect(tests.tests(1)).toBeTruthy();
  });

test("Case 2", () => {
    expect(tests.tests(1)).toBeFalsy();
  });

test("Case 3", () => {
    const expected = 'expected!';
    expect(tests.tests(1)).toBe(expected);
  });

});
