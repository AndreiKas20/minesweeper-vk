import {CSSProperties} from "react";

export type itemMines = {
    isMine: boolean,
    x: number,
    y: number,
    backPosition: CSSProperties
    touched: boolean
}
export type arrMines = Array<itemMines>
