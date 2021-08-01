describe('The countAllFromTown function test' , function(){
    it('should return the registration numbers that are from Stellies' , function(){
        var fromStellies = countAllFromTown('CL 124, CY 567, CL 345, CL 456, CL 341', 'CL');

        assert.equal(fromStellies, 4);
    });

    it('should return the registration numbers that are from Kuilsriver ', function(){
        var fromKuilsriver = countAllFromTown('CL 124, CY 567, CL 345, CL 456, CL 341','CF');
        assert.equal(fromKuilsriver, 0);
    });

});