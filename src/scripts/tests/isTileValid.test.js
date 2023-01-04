const isTileValid = require('../logic/preparationLogic');

const boardArray = [];

for (let i = 0; i < 10; i += 1) {
  const row = [];
  for (let j = 0; j < 10; j += 1) {
    row.push(0);
  }
  boardArray.push(row);
}

test('Default Test 1', () => {
  expect(isTileValid(boardArray, 0, 0, 5, true)).toEqual([[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]]);
});

test('Default Test 2', () => {
  expect(isTileValid(boardArray, 2, 2, 3, false)).toEqual([[2, 2], [3, 2], [4, 2]]);
});

test('Next Square does not exist', () => {
  expect(isTileValid(boardArray, 9, 9, 2, true)).toEqual(false);
});

test('Next Square does not exist (Vertical)', () => {
  expect(isTileValid(boardArray, 9, 9, 2, false)).toEqual(false);
});

test('Square already occupied', () => {
  boardArray[0][3] = 1;
  expect(isTileValid(boardArray, 0, 0, 5, true)).toEqual(false);
});
