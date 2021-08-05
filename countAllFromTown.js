function countAllFromTown(string,stringNumber2) { 
    var list = string.split(",");
    let count = 0;
    var townList = [];
        for (var i=0; i<list.length; i++) {
      if (list[i].includes(stringNumber2) == true) {
        count ++;
        townList.push(list[i].trim());
      }
    }
    return count;
  }