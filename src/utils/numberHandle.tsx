import { typeTotal } from "../App";
export function numberHandle(
  event: string,
  setTotal: React.Dispatch<React.SetStateAction<typeTotal>>,
  total: typeTotal
) {
  if (total.number.toString().length < 15) {
    setTotal({
      ...total,
      number:
        Number(total.number) % 1 === 0
          ? Number(total.number + event)
          : total.number + event,
      result: total.result,
    });
    return total.number;
  }
}
