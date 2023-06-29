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

/*
TODO:
  I'm going to have to think about how arcos coord system relates to rotation coord system
  1) one is clockwise, the other is counter clockwise
  2) Their axes are skewed!
  If that doesn't work, consider going to cos and if statements

  Other things to try: 
    -place the component in the middle of the page, and console log mouse movements
    -same as above, but feed mouse movements to computeAngle and log
*/

// given a vector A and a vector B, computes the angle between these two vectors in degrees
const computeAngle = (vectorA: Vector, vectorB: Vector) =>
  radiansToDegrees(Math.atan2(dot(vectorA, vectorB), det(vectorA, vectorB)));

/*
const computeAngle = (vectorA: Vector, vectorB: Vector) => {
  const theta = Math.acos(dot(vectorA, vectorB) / (magnitude(vectorA) * magnitude(vectorB)));
  let angleDegrees = radiansToDegrees(theta);
  
  if (vectorB[1] < 0) {
    angleDegrees = 360 - angleDegrees;
  }

  return angleDegrees;
};
*/ 

export {
  degreesToRadians,
  radiansToDegrees,
  pointsToVector,
  magnitude,
  computeAngle,
};
