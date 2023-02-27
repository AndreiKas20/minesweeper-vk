import React from 'react';
import styles from './playingfield.module.css';
import * as process from "process";




export function PlayingField() {
    return (
        <div className={styles.gameBlock}>
            <img alt={''} src={process.env.PUBLIC}/>
            <span style={{backgroundImage: ''}} className={`${styles.border} ${styles.borderLeft}`}/>
        </div>
    );
}
