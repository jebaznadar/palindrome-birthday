function reversedstring(str){
    return str.split('').reverse().join('')

    
}



function isStringPalindrome(str){
    var reversed = reversedstring(str)
    return str === reversed
    
}

console.log(isStringPalindrome('molom'))
console.log(isStringPalindrome('car'))
console.log(isStringPalindrome('racecar'))
console.log(isStringPalindrome('malayalam'))
