import {isLeapYear} from "../src/main/leap.year";
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

})