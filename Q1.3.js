/*O(n) solution - using b array as a counter
 or  O(n^2) solution - for every char, loop through the string check if repeated
***bit vector (bit map) solution ***
*/
function has(str, char){
  for (var i =0; i<str.length; i++){
    if (str[i] === char) return true;
  }
  return false;
}

function checkString(str) {
  if (str.length === 1){
    return str
  }else {
    var char = str[str.length-1];
    console.log(str);
    str = str - char;

    var temp = checkString(str)
    if (!has(str, char)){
      str = str + char;
    }
    return str
  }
}

console.log(has('asdser', 'z'));

var str = 'asdser'
var char = str[str.length-1]
//console.log(char);
