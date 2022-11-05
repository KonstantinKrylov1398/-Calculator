import { mathOperations } from "../utils/mathOperations";

test("mathOperationsMultiply", () => {
  expect(mathOperations(3, 3, "*")).toBe(9);
});
test("mathOperationsAmount", () => {
  expect(mathOperations(3, 3, "+")).toBe(6);
});
test("mathOperationsDivision", () => {
  expect(mathOperations(3, 3, "/")).toBe(1);
});

test("mathOperationsMinus", () => {
  expect(mathOperations(3, 3, "-")).toBe(0);
});
