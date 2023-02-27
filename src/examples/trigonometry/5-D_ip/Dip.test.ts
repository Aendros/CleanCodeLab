/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
// import { Triangle } from './Lsp_bad';
import {
  RightTriangleCalculator,
  Sphere,
  SphereCalculator,
  Square,
  SquareCalculator,
  SurfaceMetrics,
  Triangle,
  TriangleCalculator,
} from './Dip_ok';

describe('work with triangles', () => {
  test('Given a triangle get its area', () => {
    const input = new Triangle(15, 20);
    const actual = new TriangleCalculator().getArea(input);
    const expected = 150;
    expect(actual).toEqual(expected);
  });
  test('Given a triangle get its Perimeter', () => {
    const input = new Triangle(15, 20);
    const actual = new RightTriangleCalculator().getPerimeter(input);
    const expected = 60;
    expect(actual).toEqual(expected);
  });
  test('Given a SurfaceMetrics get its area', () => {
    const input = new Triangle(15, 20);
    const actual = new SurfaceMetrics(input, new RightTriangleCalculator()).getArea();
    const expected = 150;
    expect(actual).toEqual(expected);
  });
});
describe('work with squares', () => {
  test('Given a square get its area', () => {
    const input = new Square(15);
    const actual = new SquareCalculator().getArea(input);
    const expected = 225;
    expect(actual).toEqual(expected);
  });
  test('Given a square get its Perimeter', () => {
    const input = new Square(15);
    const actual = new SquareCalculator().getPerimeter(input);
    const expected = 60;
    expect(actual).toEqual(expected);
  });
});
describe('work with Sphere', () => {
  test('Given a Sphere get its area', () => {
    const input = new Square(15);
    const actual = new SquareCalculator().getArea(input);
    const expected = 225;
    expect(actual).toEqual(expected);
  });
  test('Given a Sphere get its Volume', () => {
    const input = new Sphere(10);
    const actual = Math.round(new SphereCalculator().getVolume(input));
    const expected = 4176;
    expect(actual).toEqual(expected);
  });
});