// 1
function addToZero() {
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        return('true')
      } 
    }
    }
} return('false')
  }

// 2
function uniqueletter(str) {
    let letters = {}

    for (var i = 0; i<str.Length; i++){
        if (letters[str[i]]) {
            return false
        } else {
            letters[str[i]] = 1
        }
    }
    return true
  }

// 3
function pangrams(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let regex = /\s/g;
    let lowercase = str.toLowerCase().replace(regex, "")
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false
     }
    }
   
   return true
 }


 function isPangram(str) {
     str = str.toLowerCase().replace(/([*a-z])*/g, ``)
     
     let letters = {}

     for (let i =0; i < str.length; i++) {
         if (!letters.hasOwnProperty(str[i])) {
             letters[str[i]] = 1
         }
     }
     if (Object.keys(letters))
 }

//4
longestWord = ('hello', 'world')

function findLongestWord(str) {
    var strSplit = str.split(' ')
    var longestWord = 0;

    for(var i = 0; i < strSplit.length; i++){

      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length
       }
    }
    return longestWord
  }
