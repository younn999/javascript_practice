let num1 = parseInt(prompt("첫번째 숫자 입력"));
let num2 = parseInt(prompt("두번째 숫자 입력"));

function matrix(a, b) {
  return a * b;
}

console.log(`두 수를 곱한 결과는 ${matrix(num1, num2)}`);
