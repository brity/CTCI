function checkString(str) {
  var b = Array(256);
  for (var i=0; i<256; i++){
    b[i] = 0
  }
  for (var i=0; i<str.length; i++){
    var pos = str.charCodeAt(i)
    if (b[pos] === 0){
      b[pos]++;
    }else return false
  }
  return true
}

console.log(checkString('asdser'));
