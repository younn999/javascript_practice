let subject = prompt("신청할 과목을 선택하세요. 1-HTML, 2-CSS, 3-Javascript");

// return과 break의 차이는 뭘까?
if (subject !== null) {
  switch (subject) {
    case "1":
      document.write("HTML 신청 완료!");
      break;
    case "2":
      document.write("CSS 신청 완료!");
      break;
    case "3":
      document.write("Javascript 신청 완료!");
      break;
    default:
      document.write("다시 입력해주세요!");
  }
}
