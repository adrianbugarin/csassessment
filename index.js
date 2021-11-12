// 1
let value = "False"
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True"
      } 
    }
  }
}
console.log(value)

// 2
function uniqueletter(string) {
    var strLength = string.length;
    var arr = [];
    for (var i = 0; i<strLength; i++){
        var subStr = string.substring(i,i+1);
        
        if(arr.find(function(letter) {return letter === subStr})){
            return(false);
        };

        arr[i] = subStr;
    }
    return(true);
}
var result = uniqueletter(letters);

// 3
function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "")
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return(false);
     }
    }
   
   return(true);
 }

//4
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("hi", "hello");