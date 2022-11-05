import { typeTotal } from "../App";

export function percentHandle(
  setTotal: React.Dispatch<React.SetStateAction<typeTotal>>,
  total: typeTotal
) {
  setTotal({
    ...total,
    number: total.number ? parseFloat(String(total.number)) / 100 : 0,
    result: total.result ? parseFloat(String(total.result)) / 100 : 0,
  });
}
