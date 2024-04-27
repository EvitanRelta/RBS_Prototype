
// Stores data in localStorage
function storeData(key, data){
    try{
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch(err){
      console.error('Error storing data in localStorage:', err);
    }
}

// Retrieves data in localStorage
function retrieveData(key){
    try{
      const serializedData = localStorage.getItem(key);
      if(serializedData === null){
        return null;
      }
      return JSON.parse(serializedData);
    } catch(err){
      console.error('Error retrieving data from localStorage:', err);
      return null;
    }
}

var storedTableData = retrieveData('tableData');
// Reinitialises placeholder table 
function resetTable(){
    var tableData = [];
    tableData = [
      {id: 0, loc: 'A.1.08A', startTime: 0, endTime: 23},
      {id: 1, loc: 'B.2.04A', startTime: 0, endTime: 23},
      {id: 2, loc: 'A.1.08A', startTime: 0, endTime: 23},
  ]
  storeData('tableData', tableData);
  storedTableData = retrieveData('tableData');
}

// Hard clears table
function hardReset(){
  var tableData = [];
  storeData('tableData', tableData);
  storedTableData = retrieveData('tableData');
}

// Display tables in console
function consoleLogTable(){
    console.log('Stored Table Data:', storedTableData);
}

