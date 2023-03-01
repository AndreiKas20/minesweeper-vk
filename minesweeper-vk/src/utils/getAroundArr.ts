import {arrMines} from "../../types/arrayMines";

export const getAroundArr = (x: number, y: number, array: arrMines) => {
    const top = array.filter(value => value.x === x && value.y === y - 1)[0]
    const topR = array.filter(value => value.x === x + 1 && value.y === y - 1)[0]
    const right = array.filter(value => value.x === x + 1 && value.y === y)[0]
    const rightB = array.filter(value => value.x === x + 1 && value.y === y + 1)[0]
    const bottom = array.filter(value => value.x === x && value.y === y + 1)[0]
    const bottomL = array.filter(value => value.x === x - 1 && value.y === y + 1)[0]
    const left = array.filter(value => value.x === x - 1 && value.y === y)[0]
    const leftT = array.filter(value => value.x === x - 1 && value.y === y - 1)[0]
    return [top, topR, right, rightB, bottom, bottomL, left, leftT]
}
