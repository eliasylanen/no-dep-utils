import flatMap from 'array.prototype.flatmap';

import * as remove from './remove';

describe('object', () => {
  describe('remove', () => {
    const traverse = (obj, key) =>
      flatMap(Object.keys(obj), value => {
        return value === key
          ? true
          : typeof obj[value] === 'object'
            ? traverse(obj[value], key)
            : false;
      });
    it('Should remove value with certain key from given object', () => {
      const testObj1 = {
        foo: 'foo',
        bar: 'bar',
        baz: {
          contactInfo: {
            name: 'test user',
            age: 23,
          },
        },
      };

      const testObj2 = {
        foo: 'foo',
        bar: 'bar',
        contactInfo: {
          name: 'test user',
          age: 23,
        },
      };

      // Ensure traverser working
      expect(traverse(testObj1, 'contactInfo')).toContain(true);
      expect(traverse(testObj2, 'bar')).toContain(true);

      // Actual test
      expect(
        traverse(remove.removeKey(testObj1, 'contactInfo'), 'contactInfo'),
      ).not.toContain(true);
      expect(
        traverse(remove.removeKey(testObj2, 'contactInfo'), 'contactInfo'),
      ).not.toContain(true);
      expect(traverse(remove.removeKey(testObj2, 'foo'), 'foo')).not.toContain(
        true,
      );
    });
  });
});
