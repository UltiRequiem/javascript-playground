/* if num less than 2 return false immediately
 *
 * if !(num & 1)(binary and checking) then num is even
 * return false immediately
 *
 * loop start from 3 to sqrt(num) since the highest factor
 * that could exist is sqrt(num)
 *
 */

export default function isPrime(num: number) {
  if(num<2) return false;
  if(num === 2) return true;
  if(!(num & 1)) return false;
  for(let i=3; i<Math.sqrt(num); ++i){
    if(num%i==0) return false;
  }
  return true;
}
