function countAllFromTown(string,stringNumber2) {
    var list = string.split(",");
    var townList = []; let count = 0;
        for (var i=0;i<list.length;i++) {
      if (list[i].includes(stringNumber2) == true) {
        count ++;
        townList.push(list[i].trim());
      }
    }
    return count;
  }