function mostProfitableDepartment (salesData) {
    var arr = [];
    var dataMap = {};
    for (var i = 0; i < salesData.length; i++) {
    var sData = salesData[i];
    dataMap[sData.department] = 0;
    }

    for (var i = 0; i < salesData.length; i++) {
    var sData = salesData[i];
    var currentDepTotal = dataMap[sData.department];
    currentDepTotal = currentDepTotal + sData.sales;
    dataMap[sData.department] = currentDepTotal;
    }
    console.log(datMap);

    var currentMaxSales = 0;
    var current = "";
    for (var salesDataDepdepartment in dataMap) {
        //console.log(salesDataDepdepartment);
        //console.log(dataMap[salesDataDepdepartment]);
        var currentDepSales = dataMap[salesDataDepdepartment];
        if (currentDepSales > currentMaxSales) {
            currentMaxSales = currentDepSales;
            current = salesDataDepdepartment;
            arr.push(current.trim());
        }
    }

//console.log(currentMaxSales);
return current;
}
