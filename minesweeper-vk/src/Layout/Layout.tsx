import React from 'react';
import styles from './layout.module.css';
import {PlayingField} from "./PlayingField";

export function Layout() {
    return (
        <main className={styles.content}>
            <PlayingField/>
        </main>
    );
}
