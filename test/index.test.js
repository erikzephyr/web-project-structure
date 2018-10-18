import { sum } from "../src/js"

describe('Test sum', () => {
  test('Check that sum(1,3) = 4', () => {
    expect(sum(1,3)).toBe(4);
  });
});