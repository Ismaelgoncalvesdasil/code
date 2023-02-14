https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3

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
  
  
  this.decode = function (str) {
    var decodeStr = '';
    for (var i in str) {
      var z = str[i];
      var k = key[i % key.length];
      if (abc.indexOf(z) >= 0) { 
          var idx = (abc.indexOf(z) + abc.length - abc.indexOf(k)) % abc.length; 
          var c = abc[idx];
          decodeStr += c;
      } else {
        decodeStr += z;
      };
    }
    return decodeStr
  };
}
