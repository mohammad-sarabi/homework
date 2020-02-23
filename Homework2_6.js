function stars() {
    let number = +prompt(":","");
    
    let risult = "";
    for (let i = 1; i <= number; i++) {
      for (let j = 1; j <= number - i; j++) {
        risult += " ";
      }
      for (let t = 1; t<= 2 * i - 1; t++) {
        risult += "*";
      }
      risult += '\n';
    }
    Counst = number;
    for (let j = 1; j < Counst; j++) {
      for (let i = 1; i <= j; i++) {
        risult += " ";
      }
      number -= 1;
      for (let k = 1; k <= 2 * number - 1; k++) {
        risult += "*";
      }
      risult += '\n';
    }
    console.log(risult);
  }
  stars()