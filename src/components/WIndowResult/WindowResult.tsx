import style from "./windowresult.css";
import React from "react";

export function WindowResult({ total }: any) {
  return (
    <div className={style.main_total}>
      {total.number ? total.number : total.result.toString().substring(0, 15)}
    </div>
  );
}
