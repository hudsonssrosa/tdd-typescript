import {isLeapYear} from "../src/main/leap.year";

describe('Leap Year test', () => {

    it("should return false if not divisible by 4", () => {
        let leapYear = isLeapYear(2001);
        expect(leapYear).toBe(false);
    })

    it("should return true if is divisible by 4", () => {
        let leapYear = isLeapYear(2016);
        expect(leapYear).toBe(true);
    })

    it("should return true if its divisible by 400", () => {
        let leapYear = isLeapYear(1600);
        expect(leapYear).toBe(true);
    })

    it("should return false if its divisible by 100", () => {
        let leapYear = isLeapYear(1800);
        expect(leapYear).toBe(false);
    })

    it("should return true if its divisible by 0", () => {
        let leapYear = isLeapYear(0);
        expect(leapYear).toBe(true);
    })

    it("should return true if its divisible by -400", () => {
        let leapYear = isLeapYear(-400);
        expect(leapYear).toBe(true);
    })

})