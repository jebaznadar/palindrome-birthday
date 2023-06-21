function reversedstring(str) {
    return str.split('').reverse().join('')


}



function isStringPalindrome(str) {
    var reversed = reversedstring(str)
    return str === reversed

}

function getDateAsString(date) {
    var dateInStr = {
        day: '',
        month: '',
        year: ''
    };
    if (date.day < 10) {
        dateInStr.day = '0' + date.day;
    } else {
        dateInStr.day = date.day.toString();
    }
    if (date.month < 10) {
        dateInStr.month = '0' + date.month;
    } else {
        dateInStr.month = date.month.toString();
    }
    dateInStr.year = date.year.toString();
    return dateInStr;

}

function getDateInAllFormats(date) {

    var date = getDateAsString(date);

    var ddmmyyyy = date.day + date.month + date.year
    var mmddyyyy = date.month + date.day + date.year
    var yyyymmdd = date.year + date.month + date.day
    var ddmmyy = date.day + date.month + date.year.slice(-2)
    var mmddyy = date.month + date.day + date.year.slice(-2)
    var yyddmm = date.year.slice(-2) + date.day + date.month;
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm]
}


function checkPalindromeForAllDateFormats(date) {
    var listOfPalindrome = getDateInAllFormats(date)
    var flag = false;
    for (var i = 0; i < listOfPalindrome.length; i++) {
        if (isStringPalindrome(listOfPalindrome[i])) {
            var flag = true
            break;
        }
    }
    return flag

}

function leapYear(year) {

    if (year % 400 === 0) {
        return true
    }
    if (year % 4 === 0) {
        return true
    }
    if (year % 100 === 0) {
        return false
    }
    return false;
}


function getnextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (month === 2) {
        if (leapYear(year)) {
            if (day > 29) {
                day = 1;
                month++
            }

        } else {
            if (day > 28) {
                day = 1;
                month++;
            }

        }

    } else {
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }


    }
    if(month>12){
        month = 1 ;
        year++ ;
    }
    return {
        day:day ,
        month:month,
        year:year
    }
}




function getNextPalindromeDate(date) {
    ctr = 0 ;
    var nextDate = getnextDate(date)
    while(1){
        ctr++ ; 
         var isStringPalindrome = checkPalindromeForAllDateFormats(nextDate);
         if(isStringPalindrome){
            break ; 
         }
         nextDate = getnextDate(nextDate)
    }

  return [ctr , nextDate]
}
var bdayInput = document.querySelector('#bday-input')
var button = document.querySelector('#button')
var result = document.querySelector('#output')


function clickHandler(e){
    
   var bdaystr =  bdayInput.value ; 
    if (bdaystr !== '' ){
        var listOfDate = bdaystr.split('-');
       date = { 
         day: Number(listOfDate[2] ),
         month: Number(listOfDate[1]),
         year: Number(listOfDate[0])
       }
       var isStringPalindrome = checkPalindromeForAllDateFormats(date)
       if(isStringPalindrome){
        result.innerText = 'Yay! your birthday is a palindrome!! 🥳🥳';
       }
       else{
        var [ctr, nextDate] = getNextPalindromeDate(date);
        result.innerText  = `The next palindrome date is  ${nextDate.day}-${nextDate.month}-${nextDate.year} , you missed it by ${ctr} days ! ` ; 
       }
    }

}

 
button.addEventListener('click' , clickHandler )


 


