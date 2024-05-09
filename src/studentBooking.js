let roomBooking = JSON.parse(localStorage.getItem('bookingStorage'))

let bookingMade = retrieveData('bookingStorage')

function mbPageLoad() {
    let bookingCounter = 0
    bookingMade.forEach(function (bookingOption) {
        if (bookingOption[2] < 12) {
            document.getElementById(`mb-room${bookingCounter}`).innerHTML =
                `${bookingOption[0]}/${bookingOption[2]}:00AM-${bookingOption[2]}:59AM`
            document.getElementById('mb-room' + bookingCounter).value = bookingCounter
        } else if (bookingOption[2] == 12) {
            document.getElementById(`mb-room${bookingCounter}`).innerHTML =
                `${bookingOption[0]}/${bookingOption[2]}:00PM-${bookingOption[2]}:59PM`
            document.getElementById('mb-room' + bookingCounter).value = bookingCounter
        } else if (bookingOption[2] > 12) {
            document.getElementById(`mb-room${bookingCounter}`).innerHTML =
                `${bookingOption[0]}/${bookingOption[2] - 12}:00PM-${bookingOption[2] - 12}:59PM`
            document.getElementById('mb-room' + bookingCounter).value = bookingCounter
        } else console.log('Possible Option Conversion Error.')
        bookingCounter++
    })
    for (i = 0; i < 20; i++) {
        if (document.getElementById(`mb-room${i}`).value == '') {
            document.getElementById('mb-room' + i).style.display = 'none'
        }
    }
}

// Coding the Booking Selector to populate the table according to the booking picked
function bookingSelector() {
    let roomSelectorValue = document.getElementById('booking-selector').value
    let roomSelectorArray = roomBooking[roomSelectorValue]
    let roomSelectorCode = roomSelectorArray[0]
    document.getElementById('mb-code').innerHTML = roomSelectorCode
    let roomSelectorPrice = roomSelectorArray[1]
    document.getElementById('mb-price').innerHTML = '$' + roomSelectorPrice
    let roomSelectorStart = roomSelectorArray[2]
    if (roomSelectorStart < 12) {
        document.getElementById('mb-start').innerHTML = `${roomSelectorStart}:00AM`
        document.getElementById('mb-end').innerHTML = `${roomSelectorStart}:59AM`
    } else if (roomSelectorStart == 12) {
        document.getElementById('mb-start').innerHTML = `${roomSelectorStart}:00PM`
        document.getElementById('mb-end').innerHTML = `${roomSelectorStart - 12}:59PM`
    } else if (roomSelectorStart > 12) {
        document.getElementById('mb-start').innerHTML = `${roomSelectorStart - 12}:00PM`
        document.getElementById('mb-end').innerHTML = `${roomSelectorStart - 12}:59PM`
    } else console.log('Possible Table Population Error.')
}

function cancelBooking() {
    let cancelConfirm = confirm(`Confirm cancellation?`)
    if (cancelConfirm) {
        let roomSelectorValue = document.getElementById('booking-selector').value
        let roomSelectorArray = roomBooking[roomSelectorValue]
        let roomSelectorPrice = roomSelectorArray[1]
        currentCredit += Number(roomSelectorPrice)
        storeData('creditStorage', currentCredit)
        let newRoomBooking = roomBooking.toSpliced(roomSelectorValue, 1)
        storeData('bookingStorage', newRoomBooking)
        console.log(newRoomBooking)
        window.location.reload()
    } else {
        return false
    }
}
