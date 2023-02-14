function VigenèreCipher(key, abc) {
  
  this.encode = function (str) {
    var encodeStr = ''
    for (var i in str) {
      var c = str[i];
      var k = key[i % key.length];
      if (abc.indexOf(c) >= 0) { 
        encodeStr += abc[(abc.indexOf(c) + abc.indexOf(k)) % abc.length];
      } else {
        encodeStr += c;
      }
    }
    return encodeStr;
  };
