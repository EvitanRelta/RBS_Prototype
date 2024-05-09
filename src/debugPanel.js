// Reinitialises placeholder table
function resetTable() {
    var tableStorage = []
    tableStorage = [
        //Format: RoomCode, PriceInDollars, StartHour, EndHour
        ['A.1.04A', 2.0, 4, 16],
        ['A.2.06A', 6.0, 8, 12],
        ['B.6.22B', 0.5, 0, 23],
    ]
    storeData('tableStorage', tableStorage)
}

function addTable() {
    var codeInput = prompt('Room code?')
    codeInput = codeInput.toUpperCase()
    var priceInput = prompt('price?')
    var startInput = prompt('start time?')
    var endInput = prompt('end time?')
    roomData = [codeInput, priceInput, startInput, endInput]

    // This section checks if the ID is already in storage
    var tableStorage = retrieveData('tableStorage')
    var existsInStorage = false

    tableStorage.forEach(function (storageData) {
        let storageUpper = storageData[0].toUpperCase()
        let inputUpper = roomData[0]
        if (storageUpper === inputUpper) {
            existsInStorage = true
        }
    })

    if (existsInStorage == true) {
        console.log('ID already in storage')
    } else tableStorage.push(roomData)

    storeData('tableStorage', tableStorage)
}

// Hard clears table
function hardReset() {
    var tableStorage = []
    storeData('tableStorage', tableStorage)
}

// Display tables in console
function consoleLogTable() {
    var tableStorage = retrieveData('tableStorage')
    console.log('Stored Table Data:', tableStorage)
}
