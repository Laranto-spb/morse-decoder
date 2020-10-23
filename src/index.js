const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words = expr.split(' *');
    let validateInput = expr.split('**********');
    let newArr = [];
    let cleanArr = [];
    let morseArr = [];
    let decodedArr = [];
  
    words.forEach(item => {
      for (let i = 0; i < item.length; i+=10){
        newArr.push(item.slice(i, i+10));
      }
    });
  
    newArr.forEach(item => {
      if (!item.includes('*')) {
        cleanArr.push(parseInt(item).toString())
      } else if (item === '**********') {
        cleanArr.push(item);
      }
    });
  
    cleanArr.forEach(item => {
      let preArr = [];
      
          if (item != '**********') {
        for (i = 0; i<item.length; i+=2) {
          let sepNumbers = item.slice(i, i+2);
            if (sepNumbers === '10') {
              preArr.push ('.'); 
            } else if (sepNumbers === '11') {
              preArr.push('-');
            }
        } 
      } else if (item === '**********') {
        preArr.push(' ');
      }
  
      let symbolArr = preArr.join('');
      morseArr.push(symbolArr);
    });
  
    morseArr.forEach(item => {
      decodedArr.push(MORSE_TABLE[item]);
      if (item === ' ') {
        decodedArr.push(' ')
      }       
    })
  
    let final = decodedArr.join('');
    return final;
  
}

module.exports = {
    decode
}