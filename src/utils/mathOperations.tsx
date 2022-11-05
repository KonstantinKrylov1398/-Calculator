export const mathOperations = (x: number, y: number, operand: string) =>
  operand === "+"
    ? x + y
    : operand === "-"
    ? x - y
    : operand === "/"
    ? x / y
    : x * y;
