// Decode received hex
//to encode in sh:
// echo -n 'this and that'|xorpipe - - xegwXos7sZe1WNRT|xxd -p
// paste result into hextext

var cryptoXor = require('./cryptoxor.js');
var symmetricKey = 'xegwXos7sZe1WNRT';
var hextext = '0f0d0603781b1b52533c10523c';
var decodedmessage = cryptoXor.decode(hextext, symmetricKey);

console.log('Hex Text: ' + hextext);
console.log('Decoded: ' + decodedmessage);




