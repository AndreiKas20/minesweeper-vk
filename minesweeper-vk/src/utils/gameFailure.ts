import {arrMines} from "../../types/arrayMines";

export const gameFailure = (arr: arrMines) => {
    arr.map(value => value.isMine && value.stateBtn !== 'flag' && value.stateBtn !== 'minaRed' ? value.stateBtn = 'minaBlack' : value)
    arr.map(value => !value.isMine && value.stateBtn === 'flag' ? value.stateBtn = 'minaCross' : value)
}
