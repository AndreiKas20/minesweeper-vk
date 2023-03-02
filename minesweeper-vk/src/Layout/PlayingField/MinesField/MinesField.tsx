import React, {useEffect, useLayoutEffect} from 'react';
import styles from './minesfield.module.css';
import {Button} from "../../../UI";
import {generateRandomString} from "../../../utils/getRandomString";
import {observer} from "mobx-react-lite";
import targetMine from "../../../store/targetMine";
import {arrMines, itemMines} from "../../../../types/arrayMines";
import {searchMines} from "../../../utils/searchMines";
import rightClickTarget from "../../../store/rightClickTarget";
import {rightClickFunc} from "../../../utils/rightClickFunc";
import stateGame from "../../../store/stateGame";
import {gameType} from "../../../../types/gameTypes";
import {gameFailure} from "../../../utils/gameFailure";

interface IMines {
    arrMines: arrMines
}

export const MinesField = observer(({arrMines}: IMines) => {
    const clickMines: itemMines = targetMine.mineTarget
    const rightClick: itemMines = rightClickTarget.stateClick
    useLayoutEffect(() => {
        searchMines(clickMines.x, clickMines.y, arrMines)
    }, [clickMines]);
    useLayoutEffect(() => {
        rightClickFunc(rightClick.x, rightClick.y, arrMines)
    }, [rightClick])
    return (
        <div className={styles.minesField}>
            {
                arrMines.map(v => <Button state={v} key={generateRandomString()}/>)
            }
        </div>
    );
})
