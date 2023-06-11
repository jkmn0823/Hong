function generateLottoNumbers() {
  var lottoNumbers = new Set();
  
  while (lottoNumbers.size < 6) {
    var randomNumber = Math.floor(Math.random() * 45) + 1;
    lottoNumbers.add(randomNumber);
  }
  
  return Array.from(lottoNumbers);
}

var result = generateLottoNumbers();
console.log("로또 번호: " + result.join(", "));
