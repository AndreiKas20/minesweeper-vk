import React, {CSSProperties, useLayoutEffect, useState} from 'react';
import styles from './button.module.css';
import {itemMines} from "../../types/arrayMines";
import targetMine from "../store/targetMine";

interface IButton {
    state: itemMines
}

export function Button({state}: IButton) {
    const [spritePosition, setSpritePosition] = useState<CSSProperties>({backgroundPosition: '2px  -102px'})
    const click = () => {
        targetMine.changeMineTarget(state)
    }
    useLayoutEffect(() => {
        setSpritePosition(state.backPosition)
    }, [state]);

    const btnDown = () => {
        setSpritePosition({backgroundPosition: '-33px -102px'})
    }
    return (
        <button onClick={click} style={spritePosition} className={styles.btn}/>
    );
}
