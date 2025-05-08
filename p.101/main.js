const num1 = parseInt(prompt("첫번째 양의 정수 입력: "));
const num2 = parseInt(prompt("두번째 양의 정수 입력: "));
let str;

// if (num1 % 2 === 0 && num2 % 2 === 0) {
//   alert("모두 짝수입니다.");
// } else {
//   alert("짝수가 아닙니다.");
// }

if (num1 % 2 === 0 && num2 % 2 === 0) {
  str = "짝수입니다.";
} else {
  str = "짝수가 아닌 수가 있습니다.";
}

alert(str);
