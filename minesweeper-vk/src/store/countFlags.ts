import {makeAutoObservable} from "mobx";

class CountFlags{
    count  = 40
    constructor() {
        makeAutoObservable(this)
    }
    changePlus() {
        this.count = this.count + 1
    }
    changeMinus() {
        this.count = this.count - 1
    }
    startNewCount(num: number) {
        this.count = num
}
}

export default new CountFlags()