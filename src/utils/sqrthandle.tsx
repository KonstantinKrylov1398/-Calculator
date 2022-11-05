import { typeTotal } from "../App";

export function sqrtHandle(
  setTotal: React.Dispatch<React.SetStateAction<typeTotal>>,
  total: typeTotal
) {
  setTotal({
    ...total,
    number: total.number ? Math.sqrt(parseFloat(String(total.number))) : 0,
    result: total.result ? Math.sqrt(parseFloat(String(total.result))) : 0,
  });
}
