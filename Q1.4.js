
function anagram(str1, str2){
  return sort(str1) === sort(str2)
}

var str1 = 'asdser'
var str2 = 'asders'
console.log(anagram(str1, str2));
