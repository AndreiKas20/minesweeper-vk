import React, {CSSProperties, useEffect, useState} from 'react';
import styles from './button.module.css';
import {itemMines} from "../../../types/arrayMines";
import targetMine from "../../store/targetMine";
import rightClickTarget from "../../store/rightClickTarget";
import keyState from "../../store/keyState";
import {observer} from "mobx-react-lite";
import stateGame from "../../store/stateGame";
import countFlags from "../../store/countFlags";
import {getBackBtn} from "../../utils/getBackBtn";

interface IButton {
    state: itemMines
    refresh: boolean
}

export const Button = observer(({state, refresh}: IButton) => {
    const [spritePosition, setSpritePosition] = useState<CSSProperties>(getBackBtn(state))
    const [isDisabled, setIsDisabled] = useState(false)
    const [isKeyDown, setIsKeyDown] = useState(false)
    const [isRefresh, setIsRefresh] = useState(false)
    const game = stateGame.stateGame
    const click = () => {
        targetMine.changeMineTarget(state)
    }
    const keyDown = () => {
        keyState.changeState('down')
        // setIsKeyDown(true)
    }
    const keyUp = () => {
        keyState.changeState('up')
        // targetMine.changeMineTarget(state)
        // setIsKeyDown(false)
    }
    const rightClick = (e: React.MouseEvent) => {
        e.preventDefault()
        rightClickTarget.changeState(state)
        if (state.stateBtn === 'flag') {
            countFlags.changePlus()
        } else if (state.stateBtn === 0) {
            countFlags.changeMinus()
        }
    }
    useEffect(() => {
        if (game === 'failure' || game === 'win') {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [game])
    useEffect(() => {
        if (state.stateBtn === 0) {
            setSpritePosition({backgroundPosition: '0 -102px'})
        } else if (state.stateBtn === 1) {
            setSpritePosition({backgroundPosition: '0 -136px'})
            setIsDisabled(true)
        } else if (state.stateBtn === 2) {
            setSpritePosition({backgroundPosition: '-32px -136px'})
            setIsDisabled(true)
        } else if (state.stateBtn === 3) {
            setSpritePosition({backgroundPosition: '-66px -136px'})
            setIsDisabled(true)
        } else if (state.stateBtn === 4) {
            setSpritePosition({backgroundPosition: '-100px -136px'})
            setIsDisabled(true)
        } else if (state.stateBtn === 5) {
            setSpritePosition({backgroundPosition: '-134px -136px'})
            setIsDisabled(true)
        } else if (state.stateBtn === 6) {
            setSpritePosition({backgroundPosition: '-168px -136px'})
            setIsDisabled(true)
        } else if (state.stateBtn === 7) {
            setSpritePosition({backgroundPosition: '-202px -136px'})
            setIsDisabled(true)
        } else if (state.stateBtn === 8) {
            setSpritePosition({backgroundPosition: '-236px -136px'})
            setIsDisabled(true)
        } else if (state.stateBtn === 'flag') {
            setSpritePosition({backgroundPosition: '-66px -102px'})
        } else if (state.stateBtn === 'question') {
            setSpritePosition({backgroundPosition: '-100px -102px'})
        } else if (state.stateBtn === 'minaRed') {
            setSpritePosition({backgroundPosition: '-202px -102px'})
        } else if (state.stateBtn === 'minaBlack') {
            setSpritePosition({backgroundPosition: '-168px -102px'})
        } else if (state.stateBtn === 'minaCross') {
            setSpritePosition({backgroundPosition: '-236px -102px'})
        } else if (state.stateBtn === 'empty') {
            setSpritePosition({backgroundPosition: '-32px -102px'})
            setIsDisabled(true)
        }
    }, [state, isDisabled]);
    return (
        <button disabled={isDisabled} onMouseDown={keyDown}
                onContextMenu={(e: React.MouseEvent) => rightClick(e)} onMouseUp={keyUp}
                onClick={click} style={spritePosition}
                className={styles.btn}/>
    );
})
