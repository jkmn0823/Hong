function generateLottoNumbers() { //함수는 Set 객체를 사용하여 중복을 제거한 후 6개의 번호를 선택합니다.
  var lottoNumbers = new Set(); // Set 객체를 배열로 변환하여 반환합니다.
  
  while (lottoNumbers.size < 6) {
    var randomNumber = Math.floor(Math.random() * 45) + 1;
    lottoNumbers.add(randomNumber);
  }
  
  return Array.from(lottoNumbers);
}

var result = generateLottoNumbers();
console.log("로또 번호: " + result.join(", "));  //주석 및 코멘트를 입력해주세요