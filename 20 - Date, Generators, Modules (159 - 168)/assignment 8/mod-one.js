import * as all from './mod-two.js'

export default function (numOne = all.a, numTwo = all.b, numThree = all.c) {
    return numOne + numTwo + numThree;
}