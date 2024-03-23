import { expect, test } from "vitest";
import { parse, stringify } from ".";

test("Handles an object", () => {
  const obj = {
    a: 1,
    b: 2,
  };

  const stringified = stringify(obj);
  const parsed = parse(stringified);

  expect(parsed).toEqual(obj);
});

test("Handles an array", () => {
  const arr = [1, 2, 3];

  const stringified = stringify(arr);
  const parsed = parse(stringified);

  expect(parsed).toEqual(arr);
});

test("Handles a string", () => {
  const str = "hello superqs";

  const stringified = stringify(str);
  const parsed = parse(stringified);

  expect(parsed).toEqual(str);
});

test("Handles a number", () => {
  const num = 42;

  const stringified = stringify(num);
  const parsed = parse(stringified);

  expect(parsed).toEqual(num);
});

test("Handles a boolean", () => {
  const bool = true;

  const stringified = stringify(bool);
  const parsed = parse(stringified);

  expect(parsed).toEqual(bool);
});

test("Handles null", () => {
  const stringified = stringify(null);
  const parsed = parse(stringified);

  expect(parsed).toEqual(null);
});

test("Handles undefined", () => {
  const stringified = stringify(undefined);
  const parsed = parse(stringified);

  expect(parsed).toEqual(undefined);
});

test("Handles a Date", () => {
  const date = new Date();

  const stringified = stringify(date);
  const parsed = parse(stringified);

  expect(parsed).toEqual(date);
});

test("Handles Unicode characters", () => {
  const obj = {
    a: "🌴",
  };

  const stringified = stringify(obj);
  const parsed = parse(stringified);

  expect(parsed).toEqual(obj);
});
