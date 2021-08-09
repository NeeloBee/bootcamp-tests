describe('The findItemsOver20 function test' , function(){
    it('should show you which items in the grocery list have a quantity higher than 20' , function(){
        assert.deepEqual(results, findItemsOver20(itemList));
        assert.deepEqual(results2, findItemsOver20(itemList2));
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });

    it('should show you which items in the grocery list is' , function(){
        assert.deepEqual(results, findItemsOver(itemList, 20));
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });
});