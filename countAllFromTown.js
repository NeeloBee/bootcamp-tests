function countAllFromTown(string,stringNumber2) {
    var fromStellies = allFromTown('CL 124, CY 567, CL 345, CL 456, CL 341', 'CL');
    var fromKuilsriver = allFromTown('CL 124, CY 567, CL 345, CL 456, CL 341','CF');
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