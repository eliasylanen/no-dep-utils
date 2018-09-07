import curry from './curry';

describe('util', () => {
  describe('curry', () => {
    const sum = (x: number, y: number, z: number): number => x + y + z;

    it('Should resolve the function', () => {
      const simpleCurry = curry(sum);
      expect(simpleCurry(1, 2, 3)).toEqual(6);
      expect(simpleCurry(1)(2, 3)).toEqual(6);
      expect(simpleCurry(1, 2)(3)).toEqual(6);
      expect(simpleCurry(1)(2)(3)).toEqual(6);

      const curryWithOneArg = curry(sum, 1);
      expect(curryWithOneArg(2, 3)).toEqual(6);
      expect(curryWithOneArg(2)(3)).toEqual(6);

      const curryWithTwoArgs = curry(sum, 1, 2);
      expect(curryWithTwoArgs(3)).toEqual(6);

      const curryWithAllArgs = curry(sum, 1, 2, 3);
      expect(curryWithAllArgs()).toEqual(6);
    });
  });
});
