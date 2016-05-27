// to decode on the cli
// echo -n 0c00140378021644003b0254|xxd -r -p|xorpipe - - xegwXos7sZe1WNRT

var cryptoXor = require('./cryptoxor.js');
var symmetricKey = 'xegwXos7sZe1WNRT';

var plainText = 'what the fuck'
console.log('Plain Text: ' + plainText);
var cypherText = cryptoXor.encode(plainText, symmetricKey);
console.log('Encoded: ' + cypherText);
var decodemessage = cryptoXor.decode(cypherText, symmetricKey);
//console.log('Decoded: ' + decodemessage);
