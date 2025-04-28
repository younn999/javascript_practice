let inch = parseFloat(prompt("인치(inch) 값을 입력하세요."));
let cm = (inch * 2.54).toFixed(1);

alert(`${inch}인치는 ${cm}센티미터 입니다.`);
