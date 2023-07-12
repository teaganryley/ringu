export type Point = [number, number];

export type Vector = Point;

const degreesToRadians = (degrees: number) => degrees * (Math.PI / 180);

const radiansToDegrees = (radians: number) => radians * (180 / Math.PI);

const pointsToVector = (initial: Point, terminal: Point) => [
  terminal[0] - initial[0],
  terminal[1] - initial[1],
];

const magnitude = (vector: Vector) => {
  const [x, y] = vector;
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

// dot product
const dot = (vectorA: Vector, vectorB: Vector) => {
  const [xA, yA] = vectorA;
  const [xB, yB] = vectorB;

  return xA * xB + yA * yB;
};

// determinant
const det = (vectorA: Vector, vectorB: Vector) => {
  const [xA, yA] = vectorA;
  const [xB, yB] = vectorB;

  return xA * yB - yA * xB;
};

// follows unit circle convention; uses degrees
const polarToCartesian = (
  cx: number,
  cy: number,
  radius: number,
  angleInDegrees: number
): Point => {
  const angleInRadians = degreesToRadians(angleInDegrees);

  return [
    cx + radius * Math.cos(angleInRadians),
    cy + radius * Math.sin(-angleInRadians), // must be negated for screen coordinate system
  ];
};

// TODO: Test
// given a vector A and a vector B, computes the angle between these two vectors in degrees
const computeAngle = (vectorA: Vector, vectorB: Vector) =>
  radiansToDegrees(Math.atan2(det(vectorA, vectorB), dot(vectorA, vectorB)));

export {
  degreesToRadians,
  radiansToDegrees,
  pointsToVector,
  magnitude,
  computeAngle,
  polarToCartesian
};
