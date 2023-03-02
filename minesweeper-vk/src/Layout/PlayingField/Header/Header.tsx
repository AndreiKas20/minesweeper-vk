import React, {CSSProperties, useEffect, useState} from 'react';
import styles from './header.module.css'
import {ButtonHeader} from "../../../UI/ButtonHeader";
import {NumberDisplay} from "../../../UI/NumberDisplay";
import stateGame from "../../../store/stateGame";
import {observer} from "mobx-react-lite";

export const Header = observer(() => {
    const game = stateGame.stateGame
    const [smile, setSmile] = useState<CSSProperties>({backgroundPosition: '0 -50px'})
    useEffect(() => {
        if (game === "failure") {
            setSmile({backgroundPosition: '-216px -50px'})
        } else if(game === 'start') {
            console.log('xyli vishe')
            setSmile({backgroundPosition: '0 -50px'})
        } else if (game === 'win') {
            console.log('xyli net')
            setSmile({backgroundPosition: "-162px -50px"})
        } else if (game === 'restart') {
            console.log('xyli nije')
            setSmile({backgroundPosition: '0 -50px'})
        }
    }, [game])
    return (
        <div className={styles.head}>
            <NumberDisplay styleLeft={{backgroundPosition: '-250px 0'}} styleCenter={{backgroundPosition: '-250px 0'}} styleRight={{backgroundPosition: '-250px 0'}}/>
            <ButtonHeader style={smile}/>
            <NumberDisplay styleLeft={{backgroundPosition: '-250px 0'}} styleCenter={{backgroundPosition: '-250px 0'}} styleRight={{backgroundPosition: '-250px 0'}} />
        </div>
    );
})
