import {arrMines} from "../../types/arrayMines";

export const rightClickFunc = (x: number, y: number, arr: arrMines) => {
    if (arr.filter(value => value.x === x && value.y === y)[0]?.stateBtn === 0) {
        arr.map(value => value.x === x && value.y === y && value.stateBtn === 0 ? value.stateBtn = 'flag' : value)
    } else if (arr.filter(value => value.x === x && value.y === y)[0]?.stateBtn === 'question') {
        arr.map(value => value.x === x && value.y === y && value.stateBtn === 'question' ? value.stateBtn = 0 : value)
    } else {
        arr.map(value => value.x === x && value.y === y && value.stateBtn === 'flag' ? value.stateBtn = 'question' : value)
    }
}
