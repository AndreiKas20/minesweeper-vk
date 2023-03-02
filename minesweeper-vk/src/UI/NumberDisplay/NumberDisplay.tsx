import React, {CSSProperties} from 'react';
import styles from './numberdisplay.module.css';

interface IDisplay {
    styleLeft: CSSProperties,
    styleCenter: CSSProperties,
    styleRight: CSSProperties,

}

export function NumberDisplay({styleLeft, styleCenter, styleRight}: IDisplay) {
  return (
        <div className={styles.block}>
          <span style={styleLeft} className={styles.panel}/>
          <span style={styleCenter} className={styles.panel}/>
          <span style={styleRight} className={styles.panel}/>
        </div>
  );
}
