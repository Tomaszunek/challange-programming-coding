const TOP = 'top';
const RIGHT = 'right';
const BOTTOM = 'bottom';
const LEFT = 'left';

const VALID_STATUSES = {
  START: -2,
  VALID: 'valid',
  UNVALID: 'unvalid',
  GOAL: -1,
  EMPTY: 0,
  BLOCKED: 'blocked',
  UNKNOWN: 'unknown',
  VISITED: 'visited',
};

const locationStatus = (location, grid) => {
  const gridSize = grid.length;
  const dft = location.distanceFromTop;
  const dfl = location.distanceFromLeft;

  if (
    location.distanceFromLeft < 0 ||
    location.distanceFromLeft >= gridSize ||
    location.distanceFromTop < 0 ||
    location.distanceFromTop >= gridSize
  ) {
    return VALID_STATUSES.UNVALID;
  } else if (grid[dft][dfl] === VALID_STATUSES.GOAL) {
    return VALID_STATUSES.GOAL;
  } else if (grid[dft][dfl] !== VALID_STATUSES.EMPTY) {
    return VALID_STATUSES.BLOCKED;
  } else {
    return VALID_STATUSES.VALID;
  }
};

const exploreInDirection = (currentLocation, direction, grid) => {
  const newPath = currentLocation.path.slice();
  newPath.push(direction);

  let dft = currentLocation.distanceFromTop;
  let dfl = currentLocation.distanceFromLeft;

  if (direction === TOP) {
    dft -= 1;
  } else if (direction === RIGHT) {
    dfl += 1;
  } else if (direction === BOTTOM) {
    dft += 1;
  } else if (direction === LEFT) {
    dfl -= 1;
  }

  const newLocation = {
    distanceFromTop: dft,
    distanceFromLeft: dfl,
    path: newPath,
    status: VALID_STATUSES.UNKNOWN,
  };

  newLocation.status = locationStatus(newLocation, grid);
  if (newLocation.status === VALID_STATUSES.VALID) {
    grid[newLocation.distanceFromTop][newLocation.distanceFromLeft] =
      VALID_STATUSES.VISITED;
  }

  return newLocation;
};

const findShortestPath = (startCoordinates, grid) => {
  const distanceFromTop = startCoordinates[0];
  const distanceFromLeft = startCoordinates[1];
  const location = {
    distanceFromTop: distanceFromTop,
    distanceFromLeft: distanceFromLeft,
    path: [],
    status: VALID_STATUSES.START,
  };
  var queue = [location];

  while (queue.length > 0) {
    const currentLocation = queue.shift();
    let newLocation;

    newLocation = exploreInDirection(currentLocation, TOP, grid);
    if (newLocation.status === VALID_STATUSES.GOAL) {
      return newLocation.path;
    } else if (newLocation.status === VALID_STATUSES.VALID) {
      queue.push(newLocation);
    }

    newLocation = exploreInDirection(currentLocation, RIGHT, grid);
    if (newLocation.status === VALID_STATUSES.GOAL) {
      return newLocation.path;
    } else if (newLocation.status === VALID_STATUSES.VALID) {
      queue.push(newLocation);
    }

    newLocation = exploreInDirection(currentLocation, BOTTOM, grid);
    if (newLocation.status === VALID_STATUSES.GOAL) {
      return newLocation.path;
    } else if (newLocation.status === VALID_STATUSES.VALID) {
      queue.push(newLocation);
    }

    newLocation = exploreInDirection(currentLocation, LEFT, grid);
    if (newLocation.status === VALID_STATUSES.GOAL) {
      return newLocation.path;
    } else if (newLocation.status === VALID_STATUSES.VALID) {
      queue.push(newLocation);
    }
  }

  return false;
};

const findShortestPathMain = (start, end, board) => {
  const [startX, startY] = start;
  const [endX, endY] = end;
  board[startX][startY] = VALID_STATUSES.START;
  board[endX][endY] = VALID_STATUSES.GOAL;

  let shortestPath = findShortestPath(start, board);
  return shortestPath;
};

export { findShortestPathMain };
