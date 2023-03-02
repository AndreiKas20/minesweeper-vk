import {makeAutoObservable} from "mobx";

class KeyState {
    state = 'up'

    constructor() {
        makeAutoObservable(this)
    }

    changeState(state: string) {
        this.state = state
    }
}

export default new KeyState()