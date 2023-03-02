import {makeAutoObservable} from "mobx";
import {itemMines} from "../../types/arrayMines";

class TargetMine {
    mineTarget: itemMines = {
        isMine: false,
        x: 0,
        y: 0,
        touched: false,
        // backPosition: {backgroundPosition: '2px  -102px'},
        stateBtn: 0
    }

    constructor() {
        makeAutoObservable(this)
    }

    changeMineTarget(newValue: itemMines) {
        this.mineTarget = newValue
    }
}

export default new TargetMine()