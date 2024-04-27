
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

