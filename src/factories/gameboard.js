import Ship from './ship';

const GameBoard = () => {
  let board = [];
  for (let i = 0; i < 10; i++) {
    board.push(new Array(10).fill(0));
  }
  return board;
};

const randomShip = (ship) => {
  const direction = ['v', 'h'];
  const randomX = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  const randomY = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  const length = ship.length;
  const randomdirection =
    direction[Math.floor(Math.random() * (1 - 0 + 1)) + 0];
  let endCoordinate = 0;
  if (randomdirection == 'v') {
    endCoordinate = randomY + length - 1;
  } else {
    endCoordinate = randomX + length - 1;
  }

  return { randomX, randomY, endCoordinate, randomdirection };
};

let board = new GameBoard();
console.log(board);
const ship = new Ship('battleship');
const random = randomShip(ship);
if (random.randomdirection === 'v') {
  for (let y = random.randomY; y < random.endCoordinate; y++) {
    board[random.randomX][y] = 1;
  }
} else {
  for (let x = random.randomX; x < random.endCoordinate; x++) {
    board[x][random.randomY] = 1;
  }
}

console.log(board);
export default GameBoard;
