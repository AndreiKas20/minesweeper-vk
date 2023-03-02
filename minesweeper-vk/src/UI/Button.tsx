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
        e.preventDefault()
    }
    useLayoutEffect(() => {
        if (state.stateBtn === 0) {
            setSpritePosition({backgroundPosition: '0 -102px'})
        } else if (state.stateBtn === 1) {
            setSpritePosition({backgroundPosition: '0 -136px'})
        } else if (state.stateBtn === 2) {
            setSpritePosition({backgroundPosition: '-32px -136px'})
        } else if (state.stateBtn === 3) {
            setSpritePosition({backgroundPosition: '-66px -136px'})
        } else if (state.stateBtn === 4) {
            setSpritePosition({backgroundPosition: '-100px -136px'})
        } else if (state.stateBtn === 5) {
            setSpritePosition({backgroundPosition: '-134px -136px'})
        } else if (state.stateBtn === 6) {
            setSpritePosition({backgroundPosition: '-168px -136px'})
        } else if (state.stateBtn === 7) {
            setSpritePosition({backgroundPosition: '-202px -136px'})
        } else if (state.stateBtn === 8) {
            setSpritePosition({backgroundPosition: '-236px -136px'})
        } else if (state.stateBtn === 'flag') {
            setSpritePosition({backgroundPosition: '-66px -102px'})
        } else if (state.stateBtn === 'question') {
            setSpritePosition({backgroundPosition: '-100px -102px'})
        } else if (state.stateBtn === 'minaRed') {
            setSpritePosition({backgroundPosition: '-202px -102px'})
        } else if (state.stateBtn === 'minaBlack' ) {
            setSpritePosition({backgroundPosition: '-168px -102px'})
        } else if (state.stateBtn === 'minaCross') {
            setSpritePosition({backgroundPosition: '-236px -102px'})
        } else if (state.stateBtn === 'empty') {
            setSpritePosition({backgroundPosition: '-32px -102px'})
        }
    }, [state]);
    return (
        <button onContextMenu={(e: React.MouseEvent) => rightClick(e)} onClick={click} style={spritePosition}
                className={styles.btn}/>
    );
}
