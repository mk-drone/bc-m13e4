
function secondsToMinutes(seconds){
    let minutes = `${Math.floor(seconds/60)} minutes and ${seconds%60} seconds`; 
    return minutes;
}

function secondsToHours(seconds){
    let hours = `${Math.floor(seconds/3600)} hours, ${Math.floor(seconds/60)%60} minutes and ${(seconds%60).toFixed(0)} seconds`; 
    return hours;
}

exports.secondsToMinutes = secondsToMinutes;
exports.secondsToHours = secondsToHours;

// console.log(secondsToHours(3700));