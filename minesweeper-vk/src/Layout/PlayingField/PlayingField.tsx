import React, {useEffect, useLayoutEffect, useState} from 'react';
import styles from './playingfield.module.css';
import back from '../../assets/images/mask-m.png'
import {Header} from "./Header";
import {MinesField} from "./MinesField";
import {arrMines} from "../../../types/arrayMines";
import {createNewArr} from "../../utils/createNewArr";
import {observer} from "mobx-react-lite";
import targetMine from "../../store/targetMine";
import {getAroundArr} from "../../utils/getAroundArr";
import {searchMines} from "../../utils/searchMines";
import stateGame from "../../store/stateGame";
import {gameFailure} from "../../utils/gameFailure";


export const PlayingField = observer(() => {
    const [arr, setArr] = useState<arrMines>([])
    const [isTarget, setIsTarget] = useState(true)
    const clickMines = targetMine.mineTarget
    const gameState = stateGame.stateGame
    useEffect(() => {
        return () => {
            setArr(createNewArr)
        }
    }, [])
    useLayoutEffect(() => {
        if (clickMines.x === 0 || clickMines.y === 0) return
        if (!isTarget) return;
        const aroundArr = getAroundArr(clickMines.x, clickMines.y, arr)
        if (arr.filter(value => value.x === clickMines.x && value.y === clickMines.y)[0]?.isMine || aroundArr.filter(value => value?.isMine).length > 0) {
            const newArr = createNewArr()
            searchMines(clickMines.x, clickMines.y, newArr)
            setArr(newArr)
        } else {
            setIsTarget(false)
        }
    }, [clickMines, arr]);
    return (
        <div style={{backgroundImage: back}} className={styles.gameBlock}>
            <Header/>
            <MinesField arrMines={arr}/>
        </div>
    );
})
