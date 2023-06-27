export type Point = [number, number];

export type Coordinate = Point;

const degreesToRadian = (degrees: number) => degrees * (Math.PI / 180);

const radiansToDegrees = (radians: number) => radians * (180 / Math.PI);

const pointsToVector = (initial: Point, terminal: Point) => [
  terminal[0] - initial[0],
  terminal[1] - initial[1]
];

const vectorMagnitude = (vector: Coordinate) => {
  const [x, y] = vector;
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

// given a vector A and a vector B, computes the angle between these two vectors in radians
const computeAngle = (vectorA: Coordinate, vectorB: Coordinate) => {
  const [xA, yA] = vectorA;
  const [xB, yB] = vectorB;

  return Math.acos(
    ((xA*xB) + (yA * yB)) / (vectorMagnitude(vectorA) * vectorMagnitude(vectorB))
  )
};

export {
  degreesToRadian,
  radiansToDegrees,
  pointsToVector,
  computeAngle
};
