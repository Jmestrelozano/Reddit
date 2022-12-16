import {firstLetter} from '../../../src/presentation/utils/firstLetter';
const result = firstLetter('jiam');
describe('first letter function', () => {
  test('check if there is a letter in the text string', () => {
    expect(result.length === 1).toBeTruthy();
  });

  test('must be a string', () => {
    expect(typeof result === 'string').toBeTruthy();
  });
});
