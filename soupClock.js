//screams

let clockDisplay = document.querySelector("#clockDisplay");

let tzSet = "UTC";

let tzAdjust = 8;

let hour12 = document.getElementById("hour12");
let tzBtn = document.getElementById("timezone");
let overlayClose = document.getElementById("overlay");

setInterval(setTime, 1000);

tzBtn.onclick = () => {
    overlay.style.display = "block";
};

overlayClose.onclick = () => {
    overlay.style.display = "none";
};

function setTime(){
    const now = new Date();
    now.setHours(now.getHours() + tzAdjust);

    clockDisplay.textContent = formatTime(now, hour12.checked);
}

function twoDigit(x){
    if(("0" + x).length < 3)
        return "0" + x.toString();
    return x.toString();
}

function formatTime(datetimeObj, is12Hours) {
    const secs = Math.floor((datetimeObj / 1000) % 60);
    let mins = Math.floor((datetimeObj / (1000 * 60)) % 60);
    let hrs = Math.floor((datetimeObj / (1000 * 60 * 60)) % 24);
    
    let ampm;

    if (is12Hours){
        if(hrs >= 12){
            ampm = "PM";
            if(hrs > 12)
                hrs = hrs - 12;
        }
        else
            ampm = "AM";
    }

    let timeNow = [hrs, mins, secs];
    timeNow = timeNow.map(twoDigit);

    let output = `${timeNow[0]}:${timeNow[1]}:${timeNow[2]}`;
    if(hour12.checked)
        output += `${ampm}`

    return output
}