function displayTime () {
    var dateTime = new Date ();
    var hrs = dateTime.getHours ();
    var mins = dateTime.getMinutes ();
    var sec = dateTime.getSeconds ();
    var session = document.getElementById ("session");

    if (hrs >= 12){
        session.innerHTML = 'PM';
    }
    else {
        session.innerHTML = 'AM';
    }

    if (hrs >  12) {
        hrs = hrs  -12;
    }
    document.getElementById ('hours').innerHTML = hrs;
    document.getElementById ('minutes').innerHTML = mins;
    document.getElementById ('seconds').innerHTML = sec;

}

setInterval(displayTime,10);

const getUserSelectedText = () => {
    return window.getSelection().toString();
}






