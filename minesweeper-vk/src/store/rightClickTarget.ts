import {makeAutoObservable} from "mobx";
import {itemMines} from "../../types/arrayMines";

class RightClickTarget {
    stateClick: itemMines = { x:0, y:0, isMine:false, touched:false, stateBtn: 0}
    constructor() {
        makeAutoObservable(this)
    }
    changeState(newState: itemMines) {
        this.stateClick = newState
    }
}

export default new RightClickTarget()