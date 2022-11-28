import React from "react";
import style from "./buttonpanel.css";
export function ButtonPanel({ ifSign }: any) {
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

  return (
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
  );
}
