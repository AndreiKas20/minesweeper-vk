import {arrMines} from "../../types/arrayMines";
import {getAroundArr} from "./getAroundArr";
import stateGame from "../store/stateGame";

export const searchMines = (x: number, y: number, array: arrMines) => {
    if (x < 1 || y < 1) return
    if (array.filter(value => value.x === x && value.y === y)[0]?.touched ||
        array.filter(value => value.x === x && value.y === y)[0]?.touched === undefined) return;
    const arrMinesAround = getAroundArr(x, y, array)
    if (array.filter(value => value.x === x && value.y === y)[0]?.isMine) {
        array.map(value => value.x === x && value.y === y ? value.backPosition = {backgroundPosition: '-202px -103px'} : value)
        stateGame.changeState('failure')
    } else {
        if (arrMinesAround.filter(value => value?.isMine === true).length === 0) {
            array.map(value => value.x === x && value.y === y ? value.backPosition = {backgroundPosition: '-32px -102px'} : value)
            array.map(value => value.x === x && value.y === y ? value.touched = true : value)
            searchMines(x, y - 1, array)
            searchMines(x + 1, y - 1, array)
            searchMines(x + 1, y, array)
            searchMines(x + 1, y + 1, array)
            searchMines(x, y + 1, array)
            searchMines(x - 1, y + 1, array)
            searchMines(x - 1, y, array)
            searchMines(x - 1, y - 1, array)
        } else if (arrMinesAround.filter(value => value?.isMine === true).length === 1) {
            array.map(value => value.x === x && value.y === y ? value.backPosition = {backgroundPosition: '0 -136px'} : value)
            array.map(value => value.x === x && value.y === y ? value.touched = true : value)
        } else if (arrMinesAround.filter(value => value?.isMine === true).length === 2) {
            array.map(value => value.x === x && value.y === y ? value.backPosition = {backgroundPosition: '-32px -136px'} : value)
            array.map(value => value.x === x && value.y === y ? value.touched = true : value)
        } else if (arrMinesAround.filter(value => value?.isMine === true).length === 3) {
            array.map(value => value.x === x && value.y === y ? value.backPosition = {backgroundPosition: '-66px -136px'} : value)
            array.map(value => value.x === x && value.y === y ? value.touched = true : value)
        } else if (arrMinesAround.filter(value => value?.isMine === true).length === 4) {
            array.map(value => value.x === x && value.y === y ? value.backPosition = {backgroundPosition: '-100px -136px'} : value)
            array.map(value => value.x === x && value.y === y ? value.touched = true : value)
        } else if (arrMinesAround.filter(value => value?.isMine === true).length === 5) {
            array.map(value => value.x === x && value.y === y ? value.backPosition = {backgroundPosition: '-134px -136px'} : value)
            array.map(value => value.x === x && value.y === y ? value.touched = true : value)
        } else if (arrMinesAround.filter(value => value?.isMine === true).length === 6) {
            array.map(value => value.x === x && value.y === y ? value.backPosition = {backgroundPosition: '-168px -136px'} : value)
            array.map(value => value.x === x && value.y === y ? value.touched = true : value)
        } else if (arrMinesAround.filter(value => value?.isMine === true).length === 7) {
            array.map(value => value.x === x && value.y === y ? value.backPosition = {backgroundPosition: '-202px -136px'} : value)
            array.map(value => value.x === x && value.y === y ? value.touched = true : value)
        } else if (arrMinesAround.filter(value => value?.isMine === true).length === 8) {
            array.map(value => value.x === x && value.y === y ? value.backPosition = {backgroundPosition: '-236px -136px'} : value)
            array.map(value => value.x === x && value.y === y ? value.touched = true : value)
        }
    }
}