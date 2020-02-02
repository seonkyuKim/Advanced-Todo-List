import { compareNumberWithEmptyString, compareString } from '../models/Todo';

describe("Test compareNumberWithEmptyString Function", () => {
  it("a가 빈 문자열일 때, compare(a, b) 결과가 양수여야 함 ", async () => {
    const a = "";
    const b = 3;
    expect(compareNumberWithEmptyString(a, b)).toBeGreaterThan(0);
  })

  it("b가 빈 문자열일 때, compare(a, b) 결과가 음수여야 함", async () => {
    const a = 3;
    const b = "";
    expect(compareNumberWithEmptyString(a, b)).toBeLessThan(0);
  })

  it("a가 빈 문자열 b가 빈 문자열일 때, compare(a, b) 결과가 0이여야 함", async () => {
    const a = "";
    const b = "";
    expect(compareNumberWithEmptyString(a, b)).toBe(0);
  })

});

describe("Test compareString Function", () => {
  it("a가 빈 문자열일 때, compare(a, b) 결과가 양수가 나와야 함 ", async () => {
    const a = "";
    const b = "A";
    expect(compareString(a, b)).toBeGreaterThan(0);
  })

  it("b가 빈 문자열일 때, compare(a, b) 결과가 음수가 나와야 함 ", async () => {
    const a = "A";
    const b = "";
    expect(compareString(a, b)).toBeLessThan(0);
  })

  it("a와 b 모두 빈 문자열일 때, compare(a, b) 결과가 0이 나와야 함 ", async () => {
    const a = "";
    const b = "";
    expect(compareString(a, b)).toBe(0);
  })

  it("a가 A, b가 C일 때, compare(a, b) 결과가 음수가 나와야 함 ", async () => {
    const a = "A";
    const b = "C";
    expect(compareString(a, b)).toBeLessThan(0);
  })

  it("a가 C, b가 A일 때, compare(a, b) 결과가 양수가 나와야 함 ", async () => {
    const a = "C";
    const b = "A";
    expect(compareString(a, b)).toBeGreaterThan(0);
  })
})