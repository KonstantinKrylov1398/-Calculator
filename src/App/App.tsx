import React, { useEffect, useState } from "react";
import { ButtonPanel } from "../components/ButtonPanel/ButtonPanel";
import { WindowResult } from "../components/WIndowResult/WindowResult";
import { equalEvent } from "../utils/equalEvent";
import { numberHandle } from "../utils/numberHandle";
import { operandsHandle } from "../utils/operandsHandle";
import { percentHandle } from "../utils/percenthandle";
import { pointHandle } from "../utils/pointHandle";
import { resetHandle } from "../utils/resetHandle";
import { sqrtHandle } from "../utils/sqrthandle";
import style from "./app.css";
export interface typeTotal {
  number: number | string;
  result: number | string;
  operand: string;
}

export function App() {
  const dataEntry = (event: KeyboardEvent) => {
    if (
      event.key === "/" ||
      event.key === "*" ||
      event.key === "+" ||
      event.key === "-" ||
      event.key === "=" ||
      event.key === "Enter" ||
      event.key === "%" ||
      event.key === "Escape" ||
      event.key === "." ||
      event.key === "0" ||
      event.key === "1" ||
      event.key === "2" ||
      event.key === "3" ||
      event.key === "4" ||
      event.key === "5" ||
      event.key === "6" ||
      event.key === "7" ||
      event.key === "8" ||
      event.key === "9"
    ) {
      ifSign(event.key);
    } else {
      return;
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", dataEntry);
    return () => {
      window.removeEventListener("keydown", dataEntry);
    };
  });

  const [total, setTotal] = useState<typeTotal>({
    number: 0,
    result: 0,
    operand: "",
  });

  const ifSign = (element: string) => {
    return element === "/" ||
      element === "*" ||
      element === "+" ||
      element === "-"
      ? operandsHandle(element, setTotal, total)
      : element === "=" || element === "Enter"
      ? equalEvent(total, setTotal)
      : element === "%"
      ? percentHandle(setTotal, total)
      : element === "C" || element === "Escape"
      ? resetHandle(setTotal, total)
      : element === "SQRT"
      ? sqrtHandle(setTotal, total)
      : element === "."
      ? pointHandle(element, setTotal, total)
      : numberHandle(element, setTotal, total);
  };
  return (
    <div className={style.main}>
      <div className={style.main_calculator}>
        <WindowResult total={total} />
        <ButtonPanel ifSign={ifSign} />
      </div>
    </div>
  );
}
