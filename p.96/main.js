const score = parseInt(prompt("점수를 입력하세요"));

if (score !== null) {
  if (score >= 90) {
    alert("A학점!");
  } else if (score >= 80) {
    alert("B학점!");
  } else {
    alert("C학점!");
  }
}
