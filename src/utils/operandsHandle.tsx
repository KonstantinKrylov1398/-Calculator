import { typeTotal } from "../App";

export function operandsHandle(
  event: string,
  setTotal: React.Dispatch<React.SetStateAction<typeTotal>>,
  total: typeTotal
) {
  setTotal({
    ...total,
    operand: event,
    number: 0,
    result: !total.number ? total.result : total.number,
  });
}
