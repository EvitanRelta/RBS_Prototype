let roomsData = [];
let selectedIndex = -1;

const promoCodes = {
    "Student123": 0.5,
    "Staff123": 0.4,
    "UOW123": 0.3
};

function updateOutput(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += "<p>" + message + "</p>";
}

function createRoom() {
    roomsData.push({ price: 0, dateTime: "-", promoCode: "-", capacity: 0, available: false });
    updateOutput("Room created successfully!");
    document.getElementById("room-functions").style.display = "block";
    document.getElementById("room-dropdown").style.display = "block";
    document.querySelector(".button-container").style.display = "block";
    updateRoomFunctionsTable();
    document.getElementById("room-dropdown").value = roomsData.length - 1;
    selectedIndex = roomsData.length - 1;
    updateRoomDetailNumber();
}

function updateRoomFunctionsTable() {
    const roomFunctionsTable = document.getElementById("roomFunctionsTable");
    roomFunctionsTable.innerHTML = "";

    const headerRow = roomFunctionsTable.insertRow();
    const header1 = headerRow.insertCell(0);
    const header2 = headerRow.insertCell(1);
    header1.textContent = "Function";
    header2.textContent = "Description";

    const functionsData = [
        ["Create Room", "Creates a new room"],
        ["Launch Room", "Launches the created room"],
        ["Adjust Price", "Adjusts the price of the room"],
        ["Adjust Date/Time", "Adjusts the date and time of the room"],
        ["Manage Promotional Code", "Manages promotional codes for the room"],
        ["Adjust Capacity", "Adjusts the capacity of the room"]
    ];
    functionsData.forEach(function(func) {
        const row = roomFunctionsTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = func[0];
        cell2.textContent = func[1];
    });

    if (selectedIndex !== -1) {
        const selectedRoom = roomsData[selectedIndex];
        const roomDetailsRow = roomFunctionsTable.insertRow();
        const roomDetailsHeader = roomDetailsRow.insertCell(0);
        const roomDetailsData = roomDetailsRow.insertCell(1);
        roomDetailsHeader.textContent = "Room " + (selectedIndex + 1) + " Details";
        const totalPrice = selectedRoom.price * (1 - promoCodes[selectedRoom.promoCode]);
        roomDetailsData.innerHTML = "<b>Price:</b> " + selectedRoom.price + "<br>" +
                                     "<b>Total Price After Discount:</b> " + totalPrice.toFixed(2) + "<br>" +
                                     "<b>Date/Time:</b> " + selectedRoom.dateTime + "<br>" +
                                     "<b>Promo Code:</b> " + selectedRoom.promoCode + "<br>" +
                                     "<b>Capacity:</b> " + selectedRoom.capacity + "<br>" +
                                     "<b>Availability for Reservations:</b> " + 
                                     (selectedRoom.available ? "Reserved (" + selectedRoom.reservationDate + ")" : "Not Reserved");
    }

    const roomDropdown = document.getElementById("room-dropdown");
    roomDropdown.innerHTML = "<option value='-1'>Select Room</option>";
    roomsData.forEach(function(room, index) {
        roomDropdown.innerHTML += "<option value='" + index + "'>Room " + (index + 1) + "</option>";
    });

    if (selectedIndex !== -1) {
        roomDropdown.value = selectedIndex;
    }

    updateRoomDetailNumber();
}

function displaySelectedRoom() {
    selectedIndex = parseInt(document.getElementById("room-dropdown").value);
    updateRoomFunctionsTable();
    updateRoomDetailNumber();
}

function adjustPrice() {
    if (selectedIndex !== -1) {
        const newPrice = prompt("Enter new price:");
        roomsData[selectedIndex].price = newPrice;
        updateOutput("Price adjusted successfully. New price: " + newPrice);
        setTimeout(function() {
            document.getElementById("output").innerHTML = "";
        }, 3000);
        updateRoomFunctionsTable();
    } else {
        updateOutput("No room selected. Please create a room first.");
    }
}

function adjustDateTime() {
    if (selectedIndex !== -1) {
        const newDateTime = prompt("Enter new date/time:");
        roomsData[selectedIndex].dateTime = newDateTime;
        updateOutput("Date/Time adjusted successfully. New date/time: " + newDateTime);
        setTimeout(function() {
            document.getElementById("output").innerHTML = "";
        }, 3000);
        updateRoomFunctionsTable();
    } else {
        updateOutput("No room selected. Please create a room first.");
    }
}

function managePromoCode() {
    if (selectedIndex !== -1) {
        const promoCode = prompt("Enter new promotional code:");
        if (promoCodes.hasOwnProperty(promoCode)) {
            roomsData[selectedIndex].promoCode = promoCode;
            updateOutput("Promotional code applied successfully: " + promoCode);
            setTimeout(function() {
                document.getElementById("output").innerHTML = "";
            }, 3000);
            updateRoomFunctionsTable();
        } else {
            updateOutput("Invalid promotional code!");
            setTimeout(function() {
                document.getElementById("output").innerHTML = "";
            }, 3000);
        }
    } else {
        updateOutput("No room selected. Please create a room first.");
    }
}

function adjustCapacity() {
    if (selectedIndex !== -1) {
        const newCapacity = prompt("Enter new capacity:");
        roomsData[selectedIndex].capacity = newCapacity;
        updateOutput("Capacity adjusted successfully. New capacity: " + newCapacity);
        setTimeout(function() {
            document.getElementById("output").innerHTML = "";
        }, 3000);
        updateRoomFunctionsTable();
    } else {
        updateOutput("No room selected. Please create a room first.");
    }
}

function launchRoom() {
    if (selectedIndex !== -1) {
        const reservationDate = prompt("Enter reservation date (YYYY-MM-DD):");
        roomsData[selectedIndex].available = true;
        roomsData[selectedIndex].reservationDate = reservationDate;
        updateOutput("Room launched successfully. Room is now available for reservations on " + reservationDate + ".");
        setTimeout(function() {
            document.getElementById("output").innerHTML = "";
        }, 3000);
        updateRoomFunctionsTable();
    } else {
        updateOutput("No room selected. Please create a room first.");
    }
}

function updateRoomDetailNumber() {
    const roomDetailsHeader = document.querySelector("#roomFunctionsTable tr:last-child th:first-child");
    const roomNumber = selectedIndex !== -1 ? selectedIndex + 1 : "";
    roomDetailsHeader.textContent = "Room " + roomNumber + " Details";
}

updateRoomFunctionsTable();
