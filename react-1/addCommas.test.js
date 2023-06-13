const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("returns correct results for 1234", () => {
    const numWithCommas = addCommas(1234);
    expect(numWithCommas).toBe("1,234");
  });
  test("returns correct results for 1000000", () => {
    const numWithCommas = addCommas(1000000);
    expect(numWithCommas).toBe(`1,000,000`);
  });
  test("returns correct results for 9876543210", () => {
    const numWithCommas = addCommas(9876543210);
    expect(numWithCommas).toBe(`9,876,543,210`);
  });
  test("returns correct results for 6", () => {
    const numWithCommas = addCommas(6);
    expect(numWithCommas).toBe(`6`);
  });
  test("returns correct results for -10", () => {
    const numWithCommas = addCommas(-10);
    expect(numWithCommas).toBe(`-10`);
  });
  test("returns correct results for -5678", () => {
    const numWithCommas = addCommas(-5678);
    expect(numWithCommas).toBe(`-5,678`);
  });
  test("returns correct results for 12345.678", () => {
    const numWithCommas = addCommas(12345.678);
    expect(numWithCommas).toBe(`12,345.678`);
  });
  test("returns correct results for -3141592.65", () => {
    const numWithCommas = addCommas(-3141592.65);
    expect(numWithCommas).toBe(`-3,141,592.65`);
  });
});
