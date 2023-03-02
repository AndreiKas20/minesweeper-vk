import React, {CSSProperties} from 'react';
import styles from './buttonheader.module.css';
import stateGame from "../../store/stateGame";
import targetMine from "../../store/targetMine";

interface IBtn {
  style: CSSProperties,
  keyDown: () => void,
  keyUp: () => void,
}

export function ButtonHeader(props: IBtn) {
  const click = () => {
    stateGame.changeState('restart')
    targetMine.changeMineTarget({
      isMine: false,
      x: 0,
      y: 0,
      touched: false,
      stateBtn: 0
    })
  }
  return (
    <button onMouseDown={props.keyDown} onMouseUp={props.keyUp} onClick={click} style={props.style} className={styles.btn}/>
  );
}
