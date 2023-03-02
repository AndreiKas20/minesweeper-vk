import {CSSProperties} from "react";

export const generateNumber = (number: number) => {
    const arrBack:Array<CSSProperties> = [{}, {}, {}]
    let arrSeconds = String(number).split('')
    if (number <= 0) return [{backgroundPosition: '-250px 0'}, {backgroundPosition: '-250px 0'}, {backgroundPosition: '-250px 0'}]
    if (number === 999) return [{backgroundPosition: '-222px 0'},{backgroundPosition: '-222px 0'},{backgroundPosition: '-222px 0'}]
    if (number <= 9) {
        arrSeconds = ['0', '0' , ...arrSeconds]
    } else if (number >= 9 && number <=99) {
        arrSeconds = ['0', ...arrSeconds]
    }
    if (Number(arrSeconds[0]) === 0) {
        arrBack[0] = {backgroundPosition: '-250px 0'}
    }
    if (Number(arrSeconds[0]) === 1) {
        arrBack[0] = {backgroundPosition: '0 0'}
    }
    if (Number(arrSeconds[0]) === 2) {
        arrBack[0] = {backgroundPosition: '-26px 0'}
    }
    if (Number(arrSeconds[0]) === 3) {
        arrBack[0] = {backgroundPosition: '-54px 0'}
    }
    if (Number(arrSeconds[0]) === 4) {
        arrBack[0] = {backgroundPosition: '-82px 0'}
    }
    if (Number(arrSeconds[0]) === 5) {
        arrBack[0] = {backgroundPosition: '-110px 0'}
    }
    if (Number(arrSeconds[0]) === 6) {
        arrBack[0] = {backgroundPosition: '-138px 0'}
    }
    if (Number(arrSeconds[0]) === 7) {
        arrBack[0] = {backgroundPosition: '-166px 0'}
    }
    if (Number(arrSeconds[0]) === 8) {
        arrBack[0] = {backgroundPosition: '-194px 0'}
    }
    if (Number(arrSeconds[0]) === 9) {
        arrBack[0] = {backgroundPosition: '-222px 0'}
    }
    if (Number(arrSeconds[1]) === 0) {
        arrBack[1] = {backgroundPosition: '-250px 0'}
    }
    if (Number(arrSeconds[1]) === 1) {
        arrBack[1] = {backgroundPosition: '0 0'}
    }
    if (Number(arrSeconds[1]) === 2) {
        arrBack[1] = {backgroundPosition: '-26px 0'}
    }
    if (Number(arrSeconds[1]) === 3) {
        arrBack[1] = {backgroundPosition: '-54px 0'}
    }
    if (Number(arrSeconds[1]) === 4) {
        arrBack[1] = {backgroundPosition: '-82px 0'}
    }
    if (Number(arrSeconds[1]) === 5) {
        arrBack[1] = {backgroundPosition: '-110px 0'}
    }
    if (Number(arrSeconds[1]) === 6) {
        arrBack[1] = {backgroundPosition: '-138px 0'}
    }
    if (Number(arrSeconds[1]) === 7) {
        arrBack[1] = {backgroundPosition: '-166px 0'}
    }
    if (Number(arrSeconds[1]) === 8) {
        arrBack[1] = {backgroundPosition: '-194px 0'}
    }
    if (Number(arrSeconds[1]) === 9) {
        arrBack[1] = {backgroundPosition: '-222px 0'}
    }
    if (Number(arrSeconds[2]) === 0) {
        arrBack[2] = {backgroundPosition: '-250px 0'}
    }
    if (Number(arrSeconds[2]) === 1) {
        arrBack[2] = {backgroundPosition: '0 0'}
    }
    if (Number(arrSeconds[2]) === 2) {
        arrBack[2] = {backgroundPosition: '-26px 0'}
    }
    if (Number(arrSeconds[2]) === 3) {
        arrBack[2] = {backgroundPosition: '-54px 0'}
    }
    if (Number(arrSeconds[2]) === 4) {
        arrBack[2] = {backgroundPosition: '-82px 0'}
    }
    if (Number(arrSeconds[2]) === 5) {
        arrBack[2] = {backgroundPosition: '-110px 0'}
    }
    if (Number(arrSeconds[2]) === 6) {
        arrBack[2] = {backgroundPosition: '-138px 0'}
    }
    if (Number(arrSeconds[2]) === 7) {
        arrBack[2] = {backgroundPosition: '-166px 0'}
    }
    if (Number(arrSeconds[2]) === 8) {
        arrBack[2] = {backgroundPosition: '-194px 0'}
    }
    if (Number(arrSeconds[2]) === 9) {
        arrBack[2] = {backgroundPosition: '-222px 0'}
    }
    return arrBack
}
