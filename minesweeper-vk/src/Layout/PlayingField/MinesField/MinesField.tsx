import React, {useLayoutEffect} from 'react';
import styles from './minesfield.module.css';
import {Button} from "../../../UI";
import {generateRandomString} from "../../../utils/getRandomString";
import {observer} from "mobx-react-lite";
import targetMine from "../../../store/targetMine";
import {arrMines, itemMines} from "../../../../types/arrayMines";
import {searchMines} from "../../../utils/searchMines";
import rightClickTarget from "../../../store/rightClickTarget";

interface IMines {
    arrMines: arrMines
}

export const MinesField = observer(({arrMines}: IMines) => {
    const clickMines: itemMines = targetMine.mineTarget
    const rightClick: itemMines = rightClickTarget.stateClick
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
