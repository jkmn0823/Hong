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
calculateAverage();