'use strict';

// initiate dateTimeFormatter function
const dateTimeFormatter = function( formatString ){

    // define format options
    const formatOptions = [
        "DD",
        "DD-MM",
        "DD-MM-YY",
        "DD-MM-YY-TIME",
        "Dd",
        "Mm",
        "Yy",
        "HRS",
        "TIME-am-pm",
        "d",
        "m",
        "Dd-Mm-Yy-TIME-am-pm",
        "TZ",
    ];
    /**
     * functions for data
     */

    // current date
    const datetime = new Date(Date.now());
    // define month names
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // define day names
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // options: Intl.DateTimeFormat()
    const options = { 
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZoneName: 'short' 
    };


    // generate and store date and time values
    // get day:date
    const currentDay = function( data ){
        return data.getDate();
    }
    const theDay = currentDay( datetime );

    // get month:number
    const currentMonthNum = function( data ){
        return data.getMonth();
    }
    const theMonthNum = currentMonthNum(datetime);
    const theMonthName = months[theMonthNum];

    // get the day:name
    const currentDayNum = function( data ){
        return data.getDay();
    }
    const theDayNum = currentDayNum(datetime);
    const theDayName = days[theDayNum];

    // get the year:number
    const theCurrentYear = function( data ){
        return data.getFullYear();
    }
    const theYear = theCurrentYear(datetime);

    // get the time:00:00:00
    // get hours:00:
    const getTimeHrs = function( data ){
        return data.getHours();
    }
    const theTimeHrs = getTimeHrs( datetime );
    // get minutes:00:
    const getTimeMinutes = function( data ){
        return data.getMinutes();
    }
    const theTimeMins = getTimeMinutes( datetime );
    // get seconds:00
    const getTimeSeconds = function( data ){
        return data.getSeconds();
    }
    const theTimeSeconds = getTimeSeconds( datetime );
    // get time in:Hours:00:00:00
    const getTheHours = function( data ){
        return (new Intl.DateTimeFormat('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false}).format(data));
    };
    const theHours = getTheHours( datetime );
    // get time in AM PM format:12hour
    const getTimeAmPm = function( data ){
        return (new Intl.DateTimeFormat('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true}).format( data ));
    };
    const theTimeAmPm = getTimeAmPm( datetime );
    // get timeZone:UTC
    const getTheTimeZone = function( data ){
        return (new Intl.DateTimeFormat('en-US', options).format( data ));
    };
    const theTimeZone = getTheTimeZone( datetime );

    // return the values depending on request
    // check for provided format
    if( formatString === formatOptions[0] ){
        // format: "DD":
        return `${theDay} ${theMonthName}, ${theDayName}`;
    }
    else if( formatString === formatOptions[1] ){
        // format: "DD-MM":
        return `${theDay} ${theMonthName}`;
    }
    else if( formatString === formatOptions[2] ){
        // format: "DD-MM-YY":
        return `${theDay} ${theMonthName}, ${theYear}`;
    }
    else if( formatString === formatOptions[3] ){
        // format: "DD-MM-YY-TIME"
        return `${theDay} ${theMonthName}, ${theYear} ${theHours}`;
    }
    else if( formatString === formatOptions[4] ){
        // format: "Dd"
        return `${theDayName}`;
    }
    else if( formatString === formatOptions[5] ){
        // format: "Mm"
        return `${theMonthName}`;
    }
    else if( formatString === formatOptions[6] ){
        // format: "Yy"
        return `${theYear}`;
    }
    else if( formatString === formatOptions[7] ){
        // format: "HRS"
        return `${theHours}`;
    }
    else if( formatString === formatOptions[8] ){
        // format: "TIME-am-pm"
        return `${theTimeAmPm}`;
    }
    else if( formatString === formatOptions[9] ){
        // format: "d"
        return (`${theDay} ${theMonthName}, ${theYear}`).toLowerCase();
    }
    else if( formatString ===  formatOptions[10] ){
        // format: "m"
        return (`${theDay} ${theMonthName}`).toLowerCase();
    }
    else if( formatString === formatOptions[11] ){
        // format: "Dd-Mm-Yy-TIME-am-pm"
        return `${theDay} ${theMonthName}, ${theYear} ${theTimeAmPm}`;
    }
    else if( formatString === formatOptions[12] ){
        // format: "TZ"
        return `${theTimeZone}`;
    }
    else{
        // format: default:
        return `${datetime}`;
    }

};

module.exports = dateTimeFormatter;


// console.log(`Current Date(miliseconds from 1st January 1970): ${datetime}`);

/**
 * Using custom JS functions
 */
// convert mili seconds to seconds
// const milsecToSec = function( data ){
//     if(data){
//         return (data / 1000);
//     }
// };
// let seconds = milsecToSec(datetime);
// console.log(`Seconds: ${seconds}`);

// // convert seconds to minutes
// const secToMinutes = function( data ){
//     if(data){
//         return (data / 60);
//     }
// }
// let minutes = secToMinutes(seconds);
// console.log('Minutes: ' + minutes);

// // convert minutes to hours
// const minutesToHours = function( data ){
//     if(data){
//         return (data / 60);
//     }
// };
// let hours = minutesToHours(minutes);
// console.log('Hours: ' + hours);

// // convert hours to days
// const hoursToDays = function( data ){
//     if(data){
//         return (data / 24);
//     }
// }
// let totaldays = hoursToDays(hours);
// console.log('Days: ' + totaldays);

// // convert days to years
// const daystoYears = function( data ){
//     if(data){
//         return ( data / 365 );
//     }
// }
// let years = daystoYears(totaldays);
// console.log('Years: ' + years);

// // calculate current year
// const currentYear = function( data ){
//     if(data){
//         return ( Math.round( data + 1970 ) );
//     }
// }
// let year = currentYear( years );
// console.log('Year: ' + year);

// // calculate current month
// const currentMonth = function( data ){
//     if(data){
//         return ( Math.round( (data % 365) / 30 ) );
//     }
// };
// let month = currentMonth(totaldays);
// console.log('Month: ' + month);
