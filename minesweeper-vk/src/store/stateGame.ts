import {makeAutoObservable} from "mobx";
import {gameType} from "../../types/gameTypes";


class StateGame {
    stateGame: gameType = 'stop'
    constructor() {
        makeAutoObservable(this)
    }
    changeState(newState: gameType) {
        this.stateGame = newState
    }
}

export default new StateGame()