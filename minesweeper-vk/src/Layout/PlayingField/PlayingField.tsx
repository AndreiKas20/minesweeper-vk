import React, {useEffect, useState} from 'react';
import styles from './playingfield.module.css';
import back from '../../assets/images/mask-m.png'
import {Header} from "./Header";
import {MinesField} from "./MinesField";
import {arrMines} from "../../../types/arrayMines";
import {createNewArr} from "../../utils/createNewArr";
import {observer} from "mobx-react-lite";
import targetMine from "../../store/targetMine";


export const PlayingField = observer(() => {
    const [arr, setArr] = useState<arrMines>([])
    const clickBtn = targetMine.mineTarget
    useEffect(() => {
        return () => {
            setArr(createNewArr)
        }
    }, [])
    useEffect(() => {
        if (clickBtn.x > 0 && clickBtn.y > 0) {
            console.log(clickBtn.x)
        }
    }, [clickBtn]);

    return (
        <div style={{backgroundImage: back}} className={styles.gameBlock}>
            <Header/>
            <MinesField arrMines={arr}/>
        </div>
    );
})
