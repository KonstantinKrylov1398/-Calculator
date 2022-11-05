import { typeTotal } from "../App";

export function pointHandle(
  event: string,
  setTotal: React.Dispatch<React.SetStateAction<typeTotal>>,
  total: typeTotal
) {
  setTotal({
    ...total,
    number: !total.number.toString().includes(".")
      ? total.number + event
      : total.number,
  });
}
