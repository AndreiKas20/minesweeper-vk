import React, {useEffect} from 'react';
import styles from './minesfield.module.css';
import {Button} from "../../../UI";
import {generateRandomString} from "../../../utils/getRandomString";

interface IMines {
    arrMines: Array<any>
}

export function MinesField({arrMines}: IMines) {
    useEffect(() => {
        console.log(arrMines)
    }, [arrMines]);

    return (
        <div className={styles.minesField}>
            {
                arrMines.map(v => <Button state={v} key={generateRandomString()}/>)
            }
        </div>
    );
}
