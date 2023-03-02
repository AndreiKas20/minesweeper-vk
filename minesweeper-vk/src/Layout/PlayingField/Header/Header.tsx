import React, {CSSProperties, useEffect, useState} from 'react';
import styles from './header.module.css'
import {ButtonHeader} from "../../../UI/ButtonHeader";
import {NumberDisplay} from "../../../UI/NumberDisplay";
import stateGame from "../../../store/stateGame";
import {observer} from "mobx-react-lite";
import keyState from "../../../store/keyState";
import {generateNumber} from "../../../utils/generateNumber";
import countFlags from "../../../store/countFlags";

export const Header = observer(() => {
    const game = stateGame.stateGame
    const key = keyState.state
    const [smile, setSmile] = useState<CSSProperties>({backgroundPosition: '0 -50px'})
    const [backDisplay, setBackDisplay] = useState<Array<CSSProperties>>([{backgroundPosition: '-250px 0'}, {backgroundPosition: '-250px 0'}, {backgroundPosition: '-250px 0'}])
    const [second, setSecond] = useState(0)
    const [backDisplayFlags, setBackDisplayFlags] = useState<Array<CSSProperties>>([{backgroundPosition: '-250px 0'}, {backgroundPosition: '-250px 0'}, {backgroundPosition: '-250px 0'}])
    const flags = countFlags.count
    const keyDown = () => {
        setSmile({backgroundPosition: '-51px -50px'})
    }
    const keyUp = () => {
        setSmile({backgroundPosition: '0 -50px'})
    }
    useEffect(() => {
        setBackDisplayFlags(generateNumber(flags))
    }, [flags])
    useEffect(() => {
        if (game === "failure") {
            setSmile({backgroundPosition: '-216px -50px'})
        } else if (game === 'start') {
            countFlags.startNewCount(40)
            setSecond(0)
            setSmile({backgroundPosition: '0 -50px'})
        } else if (game === 'win') {
            countFlags.startNewCount(0)
            setSmile({backgroundPosition: "-162px -50px"})
        } else if (game === 'restart') {
            countFlags.startNewCount(40)
            setSecond(0)
            setSmile({backgroundPosition: '0 -50px'})
        }
    }, [game])
    useEffect(() => {
        if (key === 'down') {
            setSmile({backgroundPosition: '-108px -50px'})
        } else if (key === 'up') {
            setSmile({backgroundPosition: '0 -50px'})
        }
    }, [key])

    useEffect(() => {
        if (game !== 'start') return
        const timer = setInterval(() => {
            setSecond(v => v + 1)

        }, 1000)
        return () => clearInterval(timer)
    }, [game])
    useEffect(() => {
        setBackDisplay(generateNumber(second))
    }, [second])
    return (
        <div className={styles.head}>
            <NumberDisplay styleLeft={backDisplayFlags[0]} styleCenter={backDisplayFlags[1]}
                           styleRight={backDisplayFlags[2]}/>
            <ButtonHeader keyDown={keyDown} keyUp={keyUp} style={smile}/>
            <NumberDisplay styleLeft={backDisplay[0]} styleCenter={backDisplay[1]}
                           styleRight={backDisplay[2]}/>
        </div>
    );
})
