function reversedstring(str){
    return str.split('').reverse().join('')

    
}



function isStringPalindrome(str){
    var reversed = reversedstring(str)
    return str === reversed
    
}

function getDateAsString(date){
    var dateInStr = {day:'', month:'', year:'' };
    if(date.day<10){
        dateInStr.day = '0' + date.day ;
    }
    else{
        dateInStr.day = date.day.toString();
    }
    if(date.month<10){
        dateInStr.month = '0' + date.month ;
    }
    else{
        dateInStr.month = date.month.toString();
    }
    dateInStr.year = date.year.toString();
    return dateInStr ; 

}
var date = {day:'3', month:'2',year:'1999'}

console.log(getDateAsString(date));
