import React, {useEffect, useLayoutEffect} from 'react';
import styles from './minesfield.module.css';
import {Button} from "../../../UI/Button";
import {generateRandomString} from "../../../utils/getRandomString";
import {observer} from "mobx-react-lite";
import targetMine from "../../../store/targetMine";
import {arrMines, itemMines} from "../../../../types/arrayMines";
import {searchMines} from "../../../utils/searchMines";
import rightClickTarget from "../../../store/rightClickTarget";
import {rightClickFunc} from "../../../utils/rightClickFunc";

interface IMines {
    arrMines: arrMines
    refreshArr: boolean
}

export const MinesField = observer(({arrMines, refreshArr}: IMines) => {
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
                arrMines.map(v => <Button refresh={refreshArr} state={v} key={generateRandomString()}/>)
            }
        </div>
    );
})
