import {arrMines} from "../../types/arrayMines";

export const createNewArr = () => {
    let x = 0
    let y = 1
    let arrMines: arrMines = []
    for (let i = 0; i < 256; i++) {
        if (i < 40) {
            arrMines.push({isMine: true, x: 0, y: 0, touched: false, backPosition: {backgroundPosition: '2px  -102px'}})
        } else {
            arrMines.push({
                isMine: false,
                x: 0,
                y: 0,
                touched: false,
                backPosition: {backgroundPosition: '2px  -102px'}
            })
        }
    }
    arrMines = arrMines.sort(() => Math.random() - 0.5)
    for (let j = 0; j < arrMines.length; j++) {
        if (x < 16) {
            x = x + 1

        } else {
            x = 1
            y = y + 1
        }
        arrMines[j] = {
            isMine: arrMines[j].isMine,
            x: x,
            y: y,
            touched: false,
            backPosition: arrMines[j].backPosition
        }
    }
    return arrMines
}

