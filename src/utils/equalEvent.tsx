import { typeTotal } from "../App";
import { mathOperations } from "./mathOperations";

export function equalEvent(
  total: typeTotal,
  setTotal: React.Dispatch<React.SetStateAction<typeTotal>>
) {
  if (total.operand && total.number) {
    setTotal({
      ...total,
      result: mathOperations(
        Number(total.result),
        Number(total.number),
        total.operand
      ),
      operand: "",
      number: 0,
    });
  }
}
