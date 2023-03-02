import {itemMines} from "../../types/arrayMines";
import {useEffect} from "react";

export const getBackBtn = (state: itemMines) => {
        if (state.stateBtn === 0) {
            return {backgroundPosition: '0 -102px'}
        } else if (state.stateBtn === 1) {
            return {backgroundPosition: '0 -136px'}
        } else if (state.stateBtn === 2) {
            return {backgroundPosition: '-32px -136px'}
        } else if (state.stateBtn === 3) {
            return {backgroundPosition: '-66px -136px'}
        } else if (state.stateBtn === 4) {
            return {backgroundPosition: '-100px -136px'}
        } else if (state.stateBtn === 5) {
            return {backgroundPosition: '-134px -136px'}
        } else if (state.stateBtn === 6) {
            return {backgroundPosition: '-168px -136px'}
        } else if (state.stateBtn === 7) {
            return {backgroundPosition: '-202px -136px'}
        } else if (state.stateBtn === 8) {
            return {backgroundPosition: '-236px -136px'}
        } else if (state.stateBtn === 'flag') {
            return {backgroundPosition: '-66px -102px'}
        } else if (state.stateBtn === 'question') {
            return {backgroundPosition: '-100px -102px'}
        } else if (state.stateBtn === 'minaRed') {
            return {backgroundPosition: '-202px -102px'}
        } else if (state.stateBtn === 'minaBlack') {
            return {backgroundPosition: '-168px -102px'}
        } else if (state.stateBtn === 'minaCross') {
            return {backgroundPosition: '-236px -102px'}
        } else {
            return {backgroundPosition: '-32px -102px'}
        }
}