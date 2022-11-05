import React, { useEffect, useState } from "react";
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
    ifSign(event.key);
  };
  useEffect(() => {
    window.addEventListener("keydown", dataEntry);
    return () => {
      window.removeEventListener("keydown", dataEntry);
    };
  });
  const massiv = [
    "C",
    "SQRT",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

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
        <div className={style.main_total}>
          {total.number ? total.number : total.result}
        </div>
        <div className={style.main_button}>
          {massiv.map((element, i) => {
            return (
              <button
                key={i}
                onClick={() => ifSign(element.toString())}
                className={style.main_element}
              >
                {element}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
