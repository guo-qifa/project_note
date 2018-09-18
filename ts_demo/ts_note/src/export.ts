interface StringValidator {
    isAcceptable(s: string): boolean;
}
const numberRegexp = /^[0-9]+$/g;
export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test('5');
    }
}