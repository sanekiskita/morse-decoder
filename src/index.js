const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  var str = '',
    byk = '';
  while (expr.length % 10 !== 0) {
    expr = "0" + expr;
  }
  for (var i = 0; i < expr.length; i = i + 10) {
    one = expr.substr(i, 10);
    if (one !== "**********") {
      for (var i2 = 0; i2 < +20; i2 = i2 + 2) {
        znak = one.substr(i2, 2);
        switch (znak) {
          case "10":
            byk = byk + '.';
            break;
          case "11":
            byk = byk + '-';
            break;

        }

      }
      str = str + MORSE_TABLE[byk];
    } else
      str = str + " ";
    byk = "";
  }

  return str;
}

module.exports = {
  decode
}
