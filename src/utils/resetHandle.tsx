import { typeTotal } from "../App";

export function resetHandle(
  setTotal: React.Dispatch<React.SetStateAction<typeTotal>>,
  total: typeTotal
) {
  setTotal({
    ...total,
    number: 0,
    result: 0,
    operand: "",
  });
}
