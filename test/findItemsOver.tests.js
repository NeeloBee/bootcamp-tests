describe('The findItemsOver function test' , function(){

    it('should return items that have a quantity over the threshold' , function(){
        assert.deepEqual(results, findItemsOver(itemList, 20));
    });

    it('should return items that have a quantity over the threshold' , function(){
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });

    it('should return items that have a quantity over the threshold' , function(){
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });

});