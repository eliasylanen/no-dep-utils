import * as contains from './contains';
import * as remove from './remove';

describe('object', () => {
  const testObj1 = {
    foo: 'foo',
    bar: 'bar',
    baz: {
      bar: 'bar',
      contactInfo: {
        name: 'test user',
        age: 23,
        foo: 'foo',
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
  describe('contains', () => {
    it('Should find if object contains given value', () => {
      expect(contains.containsValue(testObj1, 'test user')).toEqual(true);
      expect(contains.containsValue(testObj2, 'foo')).toEqual(true);
      expect(contains.containsValue(testObj1, 'baz')).toEqual(false);
      expect(contains.containsValue(testObj2, 22)).toEqual(false);
    });

    it('Should find if object contains given key', () => {
      expect(contains.containsKey(testObj1, 'name')).toEqual(true);
      expect(contains.containsKey(testObj2, 'foo')).toEqual(true);
      expect(contains.containsKey(testObj1, 'test')).toEqual(false);
      expect(contains.containsKey(testObj2, 'baz')).toEqual(false);
    });
  });

  describe('remove', () => {
    it('Should remove all instances of given key from object', () => {
      expect(
        contains.containsKey(
          remove.removeKey(testObj1, 'contactInfo'),
          'contactInfo',
        ),
      ).not.toEqual(true);
      expect(
        contains.containsKey(
          remove.removeKey(testObj2, 'contactInfo'),
          'contactInfo',
        ),
      ).not.toEqual(true);
      expect(
        contains.containsKey(remove.removeKey(testObj2, 'foo'), 'foo'),
      ).not.toEqual(true);
    });
    it('Sould remove all instances of given value from object', () => {
      expect(
        contains.containsValue(
          remove.removeValue(testObj1, 'test user'),
          'test user',
        ),
      ).not.toEqual(true);
      expect(
        contains.containsValue(remove.removeValue(testObj2, 'bar'), 'bar'),
      ).not.toEqual(true);
      expect(
        contains.containsValue(remove.removeValue(testObj2, 23), 23),
      ).not.toEqual(true);
    });
  });
});
