import { BreakStatement } from "typescript"

export default function two_crystal_balls(breaks: boolean[]): number {
  const steps = Math.floor(Math.sqrt(breaks.length))

  for (let i = steps; i < breaks.length; i += steps){
    if (breaks[i]){
      for (let n = i - steps; n < i; ++n){
        if (breaks[n]){
          return n
        }
      }
      return i
    }
  }
  return -1
}


export function two_crystal_balls_by_prime(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
      if (breaks[i]) {
        break
      }
    }

    i -= jmpAmount
    for (let j = 0; j < jmpAmount && i <breaks.length; ++j, ++i) {
      if (breaks[i]) {
        return i;
      }
    }
    return -1;
}