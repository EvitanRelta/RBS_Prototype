function tablePopulator() {
    var tableData = retrieveData('tableStorage')

    const parentElement = document.getElementById('tableDisplay')

    tableData.forEach(function (focusedData) {
        let costHour = focusedData[1]
        costHour = (Math.round(costHour * 100) / 100).toFixed(2)
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'tableTitles')
        const addContent = document.createTextNode(`Room Code: ${focusedData[0]} ($${costHour}/hr)`)
        newDiv.appendChild(addContent)
        parentElement.appendChild(newDiv)

        var tbl = document.createElement('table')
        tbl.setAttribute('class', 'tableTemp')
        var tbdy = document.createElement('tbody')
        for (var i = 0; i < 2; i++) {
            var tr = document.createElement('tr')
            if (i == 0) {
                for (var j = 0; j < 24; j++) {
                    var td = document.createElement('td')
                    if (j < 10) td.appendChild(document.createTextNode(`0${j}00`))
                    else td.appendChild(document.createTextNode(`${j}00`))
                    tr.appendChild(td)
                }
            } else {
                for (var j = 0; j < 24; j++) {
                    var td = document.createElement('td')
                    if (j >= focusedData[2] && j <= focusedData[3]) {
                        td.appendChild(document.createTextNode(`Opened`))
                    } else td.appendChild(document.createTextNode(`Locked`))
                    tr.appendChild(td)
                }
            }

            tbdy.appendChild(tr)
        }
        tbl.appendChild(tbdy)
        parentElement.appendChild(tbl)
    })
}

tablePopulator()
