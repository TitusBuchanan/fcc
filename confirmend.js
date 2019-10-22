function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    for(var i = 0; i < str.length;i++){
      if(str.substr(i - str.length) == target){
        return true;
      }
    }
    return false;
  }
  
  confirmEnding("Bastian", "n");