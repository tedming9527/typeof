import { kindOf } from '../src/index';
describe('kindOf', () => {
  it('undefined type is undefined', () => {
    expect(kindOf(undefined)).toEqual('undefined');
  })
})