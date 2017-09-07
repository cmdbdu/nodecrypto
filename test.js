var aes = require('./aseutil.js');
var data = 'test';
var iv = '';
var key = 'fDK=lEGG%wjipRYdRYVb^Xb#hyl0FGnT';

var ecy = aes.encryption(data, key, iv);
var decy = aes.decryption(ecy, key, iv);

console.log(ecy, decy)

