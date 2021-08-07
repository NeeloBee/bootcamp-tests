describe('The mostProfitableDepartment function test' , function(){
    it('should show you that "outdoor" is the most profitable department for dataset 1' , function(){
        assert.equal('outdoor', mostProfitableDepartment('outdoor'), "Most profitable department is 'outdoor' for dataset 1");
    });

    it('should show you that "electronics" is the most profitable department for dataset 2' , function(){
        assert.equal('electronics', mostProfitableDepartment('electronics'), "Most profitable department is 'electronics' for dataset 2");
    });

});