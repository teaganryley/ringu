import {
  assert,
  expect,
  test
} from 'vitest';
import {
  degreesToRadians,
  radiansToDegrees,
  pointsToVector,
  computeAngle
} from './geometry';

const degreesTestCases = [
  { degrees: 1, expected: 0.0174533},
];

test.each(degreesTestCases)('degreesToRadians($degrees) -> $expected', ({ degrees, expected}) => {
  expect(degreesToRadians(degrees)).toBe(expected);
});
