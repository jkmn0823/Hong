// 두 수를 입력받아 더하는 함수
function addNumbers() {
  var num1 = parseInt(prompt("첫 번째 숫자를 입력하세요:"));
  var num2 = parseInt(prompt("두 번째 숫자를 입력하세요:"));
  var sum = num1 + num2;
  console.log("두 수의 합은 " + sum + "입니다.");
}

// 함수 호출
addNumbers();