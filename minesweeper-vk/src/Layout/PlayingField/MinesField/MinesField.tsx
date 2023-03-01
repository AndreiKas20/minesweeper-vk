import React, {useEffect, useLayoutEffect} from 'react';
import styles from './minesfield.module.css';
import {Button} from "../../../UI";
import {generateRandomString} from "../../../utils/getRandomString";
import {observer} from "mobx-react-lite";
import targetMine from "../../../store/targetMine";
import {arrMines, itemMines} from "../../../../types/arrayMines";

interface IMines {
    arrMines: arrMines
}

export const MinesField = observer(({arrMines}: IMines) => {
    const clickMines: itemMines = targetMine.mineTarget
    useEffect(() => {
        console.log(arrMines)
    }, [arrMines]);

    const searchMines = (x: number, y: number, array: arrMines) => {
        if (x < 1 || y < 1) return
        if (arrMines.filter(value => value.x === x && value.y === y)[0]?.touched ||
            arrMines.filter(value => value.x === x && value.y === y)[0]?.touched === undefined) return;
        const top = arrMines.filter(value => value.x === x && value.y === y - 1)[0]
        const topR = arrMines.filter(value => value.x === x + 1 && value.y === y - 1)[0]
        const right = arrMines.filter(value => value.x === x + 1 && value.y === y)[0]
        const rightB = arrMines.filter(value => value.x === x + 1 && value.y === y + 1)[0]
        const bottom = arrMines.filter(value => value.x === x && value.y === y + 1)[0]
        const bottomL = arrMines.filter(value => value.x === x - 1 && value.y === y + 1)[0]
        const left = arrMines.filter(value => value.x === x - 1 && value.y === y)[0]
        const leftT = arrMines.filter(value => value.x === x - 1 && value.y === y - 1)[0]
        const arrMinesAround = [top, topR, right, rightB, bottom, bottomL, left, leftT]
        console.log('arr', arrMinesAround)
        if (arrMines.filter(value => value.x === x && value.y === y)[0]?.isMine) {
            array.map(value => value.x === x && value.y === y ? value.backPosition = {backgroundPosition: '-202px -103px'} : value)
            console.log('MINA')
        } else {
            if (arrMinesAround.filter(value => value?.isMine === true).length === 0) {
                array.map(value => value.x === x && value.y === y ? value.backPosition = {backgroundPosition: '-32px -102px'} : value)
                array.map(value => value.x === x && value.y === y ? value.touched = true : value)

                console.log('new array', array)
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

    useLayoutEffect(() => {
        searchMines(clickMines.x, clickMines.y, arrMines)
    }, [clickMines]);
    return (
        <div className={styles.minesField}>
            {
                arrMines.map(v => <Button state={v} key={generateRandomString()}/>)
            }
        </div>
    );
})
