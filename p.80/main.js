const fah = parseFloat(prompt("변환할 화씨 온도를 입력하세요."));
const cel = ((fah - 32) / 1.8).toFixed(1);

alert(`화씨 ${fah}℉는 섭씨 ${cel}℃ 입니다.`);
