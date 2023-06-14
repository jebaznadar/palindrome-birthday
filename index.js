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
function getDataInAllFormats(date){
    var ddmmyyyy = date.day + date.month + date.year 
    var mmddyyyy = date.month + date.day + date.year
    var yyyymmdd = date.year + date.month + date.day
    var ddmmyy = date.day + date.month + date.year.slice(-2)
    var mmddyy = date.month + date.day + date.year.slice(-2)
    var yyddmm  = date.year.slice(-2)  + date.day + date.month ;
    return [ddmmyyyy,mmddyyyy, yyyymmdd ,ddmmyy,mmddyy,yyddmm]
}
var date = { day:'2' , month:'4', year:'1999'}
console.log(getDataInAllFormats(getDateAsString(date)))