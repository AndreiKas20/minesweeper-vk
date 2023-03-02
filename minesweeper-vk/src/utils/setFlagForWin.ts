import {arrMines} from "../../types/arrayMines";

export const setFlagForWin = (arr: arrMines) => {
    arr.map(value => value.isMine? value.stateBtn = 'flag': value)
}