import React, {CSSProperties, useLayoutEffect, useState} from 'react';
import styles from './button.module.css';
import {itemMines} from "../../types/arrayMines";
import targetMine from "../store/targetMine";
import rightClickTarget from "../store/rightClickTarget";

interface IButton {
    state: itemMines
}

export function Button({state}: IButton) {
    const [spritePosition, setSpritePosition] = useState<CSSProperties>({backgroundPosition: '1px  -102px'})
    const [countRight, setCountRight] = useState(1)
    const click = () => {
        targetMine.changeMineTarget(state)
    }
    const rightClick = (e: React.MouseEvent) => {
        setCountRight(v => v + 1)
        console.log('right click', countRight)
        rightClickTarget.changeState(state)
        // if (countRight === 0) {
        //     setSpritePosition({backgroundPosition: '2px -102px'})
        // } else if (countRight === 1) {
        //     setSpritePosition({backgroundPosition: '-65px -102px'})
        // } else if (countRight === 2) {
        //     setSpritePosition({backgroundPosition: '-100px -102px'})
        //     setCountRight(0)
        // }
        e.preventDefault()
    }
    useLayoutEffect(() => {
        setSpritePosition(state.backPosition)
    }, [state]);

    const btnDown = () => {
        setSpritePosition({backgroundPosition: '-33px -102px'})
    }
    return (
        <button onContextMenu={(e: React.MouseEvent) => rightClick(e)} onClick={click} style={spritePosition}
                className={styles.btn}/>
    );
}
