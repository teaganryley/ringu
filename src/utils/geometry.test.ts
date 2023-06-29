import { expect, test } from "vitest";
import {
  degreesToRadians,
  radiansToDegrees,
  pointsToVector,
  computeAngle,
  Point,
  Vector,
} from "./geometry";

// test case 1
const degreesAndRadians = [
  { degrees: 0, radians: 0 },
  { degrees: 1, radians: 0.01745 },
  { degrees: 90, radians: 1.5708 },
  { degrees: 180, radians: 3.1415 },
  { degrees: 270, radians: 4.7123 },
  { degrees: 360, radians: 6.2831 },
  { degrees: -45, radians: -0.7853 },
];

test.each(degreesAndRadians)(
  "degreesToRadians($degrees) -> $radians",
  ({ degrees, radians }) => {
    expect(degreesToRadians(degrees)).toBeCloseTo(radians);
  }
);

test.each(degreesAndRadians)(
  "radiansToDegrees($radians) -> $degrees",
  ({ degrees, radians }) => {
    expect(radiansToDegrees(radians)).toBeCloseTo(degrees, 1);
  }
);

// test case 2
const points = [
  { initial: [0, 0], terminal: [0, 0], expected: [0, 0] },
  { initial: [6, 1], terminal: [-3, -16], expected: [-9, -17] },
  { initial: [-7, -7], terminal: [8, 12], expected: [15, 19] },
  { initial: [-4, -3], terminal: [-9, -20], expected: [-5, -17] },
];

test.each(points)(
  "pointsToVector($initial, $terminal) -> $expected)",
  ({ initial, terminal, expected }) => {
    expect(pointsToVector(initial as Point, terminal as Point)).toEqual(
      expected
    );
  }
);

// test case 3
const vectors = [
  { vectorA: [0, 0], vectorB: [0, 0], angle: NaN },
  { vectorA: [0, 5], vectorB: [0, 7], angle: 0 },
  { vectorA: [0, 5], vectorB: [4, 0], angle: 90 },
  { vectorA: [0, 5], vectorB: [0, -7], angle: 180 }, // should be
  { vectorA: [0, 5], vectorB: [-6, 0], angle: 270 },
  { vectorA: [0, 5], vectorB: [-1, 1], angle: 315 },
];

test.each(vectors)(
  "computeAngle($vectorA, $vectorB) -> ",
  ({ vectorA, vectorB, angle }) => {
    /*
    expect(
      radiansToDegrees(computeAngle(vectorA as Vector, vectorB as Vector))
    ).toEqual(angle); */
    console.log('Expected: ', angle, ' Received: ', computeAngle(vectorA as Vector, vectorB as Vector));
  }
);
