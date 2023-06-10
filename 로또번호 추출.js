// 숫자들의 평균을 계산하는 함수
function calculateAverage() {
  var count = parseInt(prompt("숫자의 개수를 입력하세요:"));
  var numbers = [];
  var sum = 0;

  for (var i = 0; i < count; i++) {
    var num = parseInt(prompt("숫자를 입력하세요:"));
    numbers.push(num);
    sum += num;
  }

  var average = sum / count;
  console.log("입력한 숫자들의 평균은 " + average + "입니다.");
}

// 함수 호출
calculateAverage();   //--------------------------그럼 이 부분은 어떻게 해결하는게 좋을까요??


/////////////////////////////////////////////////////////제가 조금 더 간단한 코드를 짜봤습니다.

// 두 수를 입력받아 더하는 함수
function addNumbers() {
  var num1 = parseInt(prompt("첫 번째 숫자를 입력하세요:"));
  var num2 = parseInt(prompt("두 번째 숫자를 입력하세요:"));
  var sum = num1 + num2;
  console.log("두 수의 합은 " + sum + "입니다.");
}

// 함수 호출
addNumbers();