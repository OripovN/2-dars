 let pcNum = Math.trunc(Math.random() * 5) + 1;
 let userNum = +prompt(`Enter your number between 1 && 5`);
 if (userNum > 5) {
   document.write(`Katta son kiritdiz !!!`);
 } else if (userNum < 1) {
   document.write(`Kichik  son kiritdiz !!!`);
 } else if (userNum == pcNum) {
   document.write(`Ha bu ${pcNum} edi :)`);
 } else {
   document.write(`Afsus bu raqam ${pcNum} edi
      siz esa ${userNum} kiritindiz :(`);
 }
