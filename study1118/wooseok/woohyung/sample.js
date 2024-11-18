
  function compareNumbers() {
    // input 값 가져오기
    let a = document.getElementById('inputA').value;
    let b = document.getElementById('inputB').value;

    // 숫자로 변환
    a = Number(a);
    b = Number(b);

    // if 조건문
    if (a > b) {
      document.getElementById('result').innerText = 'A가 B보다 큼';
    } else if (a < b) {
      document.getElementById('result').innerText = 'A가 B보다 작음';
    } else {
      document.getElementById('result').innerText = 'A와 B가 같음';
    }
  }    
