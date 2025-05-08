let inputNumber = prompt("1보다 큰 수를 입력하세요.");
let sum = 0;

// if (inputNumber !== null && inputNumber !== 1) {
//   for (let i = 2; i <= inputNumber; i++) {
//     if (i % 2 === 1) {
//       continue;
//     } else {
//       sum += i;
//       document.write(`${i} === ${sum}<br>`);
//     }
//   }
// }

if (inputNumber !== null && inputNumber > 1) {
  for (let i = 1; i <= inputNumber; i++) {
    if (i % 2 === 0) {
      sum += i;
      document.write(`${i} === ${sum}<br>`);
    }
  }
}


// let n = prompt("1보다 큰 숫자를 입력하세요.");
// let sum = 0;

// if( n !== null && n > 1) {
//   for(let i = 1; i <= n ; i++) {
//     if(i % 2 == 1) {
//           continue;
//     }
//     sum += i;
//     document.write(`${i} ----- ${sum} <br>`);
//   }
// }