import {CSSProperties} from "react";


export type itemMines = {
    isMine: boolean,
    x: number,
    y: number,
    backPosition?: CSSProperties
}
export type arrMines = Array<itemMines>
