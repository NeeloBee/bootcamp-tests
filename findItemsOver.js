function findItemsOver (itemList, threshold) {
    const listA = [];
    for (var i = 0; i < itemList.lenghth; i++) {
        if (itemList[i].qty>threshold)
        listA.push(itemList[i])
    }
return listA;
//console.log(listA);
}