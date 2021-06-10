import {isLeapYear} from "../main/leap.year";
import each from 'jest-each';


describe('.isLeapYear(year)', () => {
    each([
        [2001, false],
        [2016, true],
        [1600, true],
        [1800, false],
        [0, true],
        [-400, true]
    ]).test('should return false if not divisible by 4', (year: number, expected: boolean) => {
        expect(isLeapYear(year)).toBe(expected);
    });

    // it("should return false if not divisible by 4", () => {
    //     let leapYear = isLeapYear(2001);
    //     expect(leapYear).toBe(false);
    // })

    // it("should return true if is divisible by 4", () => {
    //     let leapYear = isLeapYear(2016);
    //     expect(leapYear).toBe(true);
    // })

    // it("should return true if its divisible by 400", () => {
    //     let leapYear = isLeapYear(1600);
    //     expect(leapYear).toBe(true);
    // })

    // it("should return false if its divisible by 100", () => {
    //     let leapYear = isLeapYear(1800);
    //     expect(leapYear).toBe(false);
    // })

    // it("should return true if its divisible by 0", () => {
    //     let leapYear = isLeapYear(0);
    //     expect(leapYear).toBe(true);
    // })

    // it("should return true if its divisible by -400", () => {
    //     let leapYear = isLeapYear(-400);
    //     expect(leapYear).toBe(true);
    // })

})