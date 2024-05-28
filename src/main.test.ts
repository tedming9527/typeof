import { miniTypeof } from './main';
describe('miniTypeof', () => {
  it('typeof null should be "null"', () => {
    expect(miniTypeof(null)).toBe('null');
  });

  it('typeof undefined should be "undefined"', () => {
    expect(miniTypeof(undefined)).toBe("undefined");
  });

  it('typeof primitive instance should be primitive name', () => {
    expect(miniTypeof(123)).toBe('number');
    expect(miniTypeof(true)).toBe('boolean');
    expect(miniTypeof('123')).toBe('string');
    expect(miniTypeof(Symbol())).toBe('symbol');
  });

  it('typeof inner instance should be primitive name', () => {
    expect(miniTypeof(Number(123))).toBe('number');
    expect(miniTypeof(Boolean(true))).toBe('boolean');
    expect(miniTypeof(String('123'))).toBe('string');
  });

  it('typeof function instance should be function', () => {
    expect(miniTypeof(() => { })).toBe('function');
    expect(miniTypeof(function hello() { })).toBe('function');
  })
  it('typeof inner instance should be inner name', () => {
    expect(miniTypeof(new RegExp(''))).toBe('RegExp');
    expect(miniTypeof(new Date())).toBe('Date');
    expect(miniTypeof(new Array())).toBe('Array');
    expect(miniTypeof([])).toBe('Array');
    expect(miniTypeof(new Error())).toBe('Error');
    expect(miniTypeof(new Promise(() => { }))).toBe('Promise');
    expect(miniTypeof(new Set())).toBe('Set');
    expect(miniTypeof(new WeakSet())).toBe('WeakSet');
    expect(miniTypeof(new Map())).toBe('Map');
    expect(miniTypeof(new WeakMap())).toBe('WeakMap');
  })

  it('typeof Animal instance should be "Animal"', () => {
    class Animal {
    }
    const animal = new Animal();
    expect(miniTypeof(animal)).toBe("Animal");
  });
})