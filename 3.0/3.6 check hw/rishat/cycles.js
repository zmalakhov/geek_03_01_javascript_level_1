/* 
    Javascript Syntax. Interactive course.
    Rishat Ishbulatov, dated Oct 21, 2019.

    Print all numbers from 10,000 to 150,000, for which the sum of the three previous 
    elements when divided by 100 gives the remainder of 52 and the second digit of sum is 2.
*/

for (let n of Array.from(Array(150000 - 10000), (_, i) => i + 10000)) {
  let t = n-1 + n-2 + n-3
  if (((t)%100 == 52) && t.toString()[1] == 2) {
    console.log(n)
  }
}
