export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0
  let hi = haystack.length
  
  while(lo < hi){
    const m = Math.floor(lo + (hi-lo)/2)
    const e = haystack[m]

    if (e === needle){
      return true
    } else if (e < needle){
      lo = m +1
    } else {
      hi = m
    }
  }

  return false
}