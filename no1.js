function reverseString(str) {
    var currentString = str;
    var newString = '';for (let i = str.length - 1; i >= 0; i--) {
     newString = newString + currentString[i];
    }
    
    return newString;
   }console.log(reverseString('hello'));