import {CSSProperties} from "react";

export type itemMines = {
    isMine: boolean,
    x: number,
    y: number,
    touched: boolean,
    stateBtn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 'flag' | 'question' | 'minaRed' | 'minaBlack' | 'minaCross' | 'empty',
}
export type arrMines = Array<itemMines>
