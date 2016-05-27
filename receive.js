// Decode received hex

//to encode in sh:
// echo -n 'this and that'|xorpipe - - xegwXos7sZe1WNRT|xxd -p
// paste result into hextext

var cryptoXor = require('./cryptoxor.js');

var symmetricKey = 'xegwXos7sZe1WNRT';

//var plainText = 'what the fuck'

// to decode on the cli :
// echo -n 0c00140378021644003b0254|xxd -r -p|xorpipe - - xegwXos7sZe1WNRT




var hextext = '0f0d0603781b1b52533c10523c';
//console.log('Plain Text: ' + plainText);

//var cypherText = cryptoXor.encode(plainText, symmetricKey);

//console.log('Encoded: ' + cypherText);

//var decodemessage = cryptoXor.decode(cypherText, symmetricKey);

var encodemessage = cryptoXor.decode(hextext, symmetricKey);


//console.log('Decoded: ' + decodemessage);
console.log('Decoded: ' + encodemessage);




