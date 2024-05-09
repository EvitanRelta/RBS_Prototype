// I used these in both the roomSelector() function and the querySelectorAll > addEventListener code so leave it here if possible pls
let costHour;
let roomCode;
let tableStorage = retrieveData("tableStorage");
let bookingMade = retrieveData('bookingStorage');

function upPageLoad(){
    let flatStorage = tableStorage.flat();
    let lengthStorage = flatStorage.length;
    let storageCounter = 0;
    for(i = 0; i < lengthStorage; i += 4){
        if(storageCounter < 20){
            document.getElementById("td-option" + storageCounter).innerHTML = flatStorage[i];
            document.getElementById("td-option" + storageCounter).value = storageCounter;
            storageCounter++;
        }
        else{
            break;
        }
    }
    // Will hide the options from showing in the dropdown bar if not filled (when total rooms in localStorage < 20)
    for(i = 0; i < 20; i++){
        if(document.getElementById("td-option" + i).value == ""){
            document.getElementById("td-option" + i).style.display = 'none';
        }
    }
    // This creates the original localStorage for 'bookingStorage' and ensures it is not NULL; placed in here so only need rmb one function for page load
    if(bookingMade == null){
        let createBooking = [];
        storeData('bookingStorage', createBooking);
    }
    else{
        console.log(bookingMade);
    }
    // Automatically shows the current date in the date-selector; placed in here so only need to rmb one function for page load
    const timeDiff = new Date().getTimezoneOffset() * 60000; // Finds difference between local time and UTC time in millisecs
    const todays_date = (new Date(Date.now() - timeDiff).toISOString().split('T')[0]); // UTC time with the offset and then counted from epoch and extracting only the date
    document.getElementById("date-selector").value = todays_date;
}
      
function roomSelector(){
    let roomSelectorValue = document.getElementById("room-selector").value;
    let roomSelectorArray = tableStorage[roomSelectorValue];
    roomCode = roomSelectorArray[0];
    document.getElementById("td-code").textContent = `Room Code: ${roomCode}`;
    costHour = roomSelectorArray[1];
    costHour = (Math.round(costHour * 100) / 100).toFixed(2);
    document.getElementById("td-price").textContent = `Price: $${costHour}/hr`; 
    for(let i = 0; i < 24; i++){
        if(i >= roomSelectorArray[2] && i <= roomSelectorArray[3]){
            if(i.toString().length == 2){
                document.getElementById("td-button-" + i).innerHTML = 'Book Now!';
                //console.log("td-button-" + i);
                //console.log(i.toString().length);
            }
            else{
                let paddedNum = String(i).padStart(2, '0');
                document.getElementById("td-button-" + paddedNum).innerHTML = 'Book Now!';
                //console.log("td-button-" + paddedNum);
            }
        }
        else if(i < roomSelectorArray[2] || i > roomSelectorArray[3]){
            document.getElementById("td-time-" + i).textContent = '-';
        }
    }
}

const bookingBtns = document.querySelectorAll(".time-btn");
bookingBtns.forEach(function(bookingBtn) {
    bookingBtn.addEventListener("click", function() {
        let clickedBooking = [];
        let btnId = bookingBtn.getAttribute('id');
        let bookedBtn = btnId.slice(-2);
        let bookConfirm = confirm(`Confirm booking for: ${roomCode} at ${bookedBtn}00hrs?`);
        if(bookConfirm && currentCredit > costHour){
            clickedBooking.push(roomCode, costHour, Number(bookedBtn));
            bookingMade.push(clickedBooking);
            storeData('bookingStorage', bookingMade);
            currentCredit -= Number(costHour);
            storeData('creditStorage', currentCredit);
            document.getElementById(btnId).textContent = 'Booked!';
        }
        else if(bookConfirm && currentCredit < costHour){
            alert(`You do not have enough credits to book this room (${currentCredit})`);
        }
        else{
            return false;
        }
    });
});





// Remove all code below this for final version
function resetTable(){
    var tableStorage = [];
    tableStorage = [ //Format: RoomCode, PriceInDollars, StartHour, EndHour
    ["A.1.04A", 2.0, 4, 16],
    ["A.2.06A", 6.0, 8, 12],
    ["B.6.22B", 0.5, 0, 23],
  ]
  storeData('tableStorage', tableStorage);
}

function consoleLogTable(){
    var tableStorage = retrieveData('tableStorage');
    console.log('Stored Table Data:', tableStorage);
}

function hardReset(){
    var tableStorage = [];
    storeData('tableStorage', tableStorage);
}

function clearAll(){
    localStorage.clear();
}