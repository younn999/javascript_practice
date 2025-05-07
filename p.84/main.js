const inch = parseInt(prompt("인치 값을 입력하세요."));
const cm = (inch * 2.54).toFixed(1);

alert(`${inch}인치는 ${cm}센티미터 입니다.`);
