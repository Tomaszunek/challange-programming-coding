const QUEEN = -1;
const NO_VALID_FIELDS = false;

const buildBoard = (boardSize) => {
  const array = [];
  for (let i = 0; i < boardSize; i++) {
    const middleArray = [];
    for (let k = 0; k < boardSize; k++) {
      middleArray.push(true);
    }
    array.push(middleArray);
  }
  return array;
};

const middleIndexArray = (boardSize) =>
  (boardSize == 2 && 4) || Math.round((boardSize * boardSize) / 2);

const possibleFirstFields = (board) => {
  const boardSize = board.length;
  const middleIndex = middleIndexArray(boardSize);
  return board
    .reduce(
      (acc, row, rowIndex) => [
        ...acc,
        ...row.reduce(
          (acce, field, colIndex) => [
            ...acce,
            rowIndex * boardSize + colIndex < middleIndex &&
              board[rowIndex][colIndex] === true && [rowIndex, colIndex],
          ],
          [],
        ),
      ],
      [],
    )
    .filter((items) => !!items);
};

const possibleFields = (board) =>
  board
    .reduce(
      (acc, row, rowIndex) => [
        ...acc,
        ...row.reduce(
          (acce, field, colIndex) => [
            ...acce,
            board[rowIndex][colIndex] === true && [rowIndex, colIndex],
          ],
          [],
        ),
      ],
      [],
    )
    .filter((items) => !!items);

const modifyBoard = (board, field) => {
  const [x, y] = field;
  board[x][y] = QUEEN;
  for (let i = 0; i < board.length; i++) {
    if (board[i][y] !== QUEEN) {
      board[i][y] = NO_VALID_FIELDS;
    }
    if (board[x][i] !== QUEEN) {
      board[x][i] = NO_VALID_FIELDS;
    }
  }
  const minDiag = Math.min(x, y);
  let colIndex = y - minDiag - 1;
  let rowIndex = x - minDiag - 1;
  while (++colIndex < board.length && ++rowIndex < board.length) {
    if (board[rowIndex][colIndex] && board[rowIndex][colIndex] !== QUEEN)
      board[rowIndex][colIndex] = NO_VALID_FIELDS;
  }
  colIndex = x + y;
  rowIndex = 0;
  do {
    if (board[rowIndex][colIndex] && board[rowIndex][colIndex] !== QUEEN)
      board[rowIndex][colIndex] = NO_VALID_FIELDS;
  } while (--colIndex >= 0 && ++rowIndex <= board.length - 1);
  return board;
};

const searchForArrangements = (board, field, resultBoards) => {
  const newBoard = modifyBoard(board, field);
  const possibleField = possibleFields(newBoard);
  if (possibleField.length === 0) {
    resultBoards.push(newBoard);
  } else {
    possibleField.forEach((element) => {
      searchForArrangements(
        newBoard.map((arr) => arr.slice()),
        element,
        resultBoards,
      );
    });
  }
};

const possibleArrangements = (boardSize = 4) => {
  const board = buildBoard(boardSize);
  const possibleField = possibleFirstFields(board);
  const resultBoards = [];
  possibleField.forEach((field) => {
    searchForArrangements(buildBoard(boardSize), field, resultBoards);
  });
  return resultBoards;
};

export { possibleArrangements };
