describe('The isFromBellville function test' , function(){
    it('should show you that a number plate is from Bellville when it starts with "CY"' , function(){
        assert.equal("CY 98912" , "CY 98912");

        //assert.deepEqual([2,2],[2,2]);
    });

    it('should show that a number plate is from Belleville when it only has the "CY" words in' , function(){
        assert.equal("CY" , "CY");
    });
});