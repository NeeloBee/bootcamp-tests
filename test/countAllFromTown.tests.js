describe('The countAllFromTown' , function(){
    it('should return the registration numbers that are from Stellies' , function(){
        assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341', 'CJ 456']);
    });

    it('should return the registration numbers that are from Kuilsriver ', function(){
        assert.deepEqual(fromKuilsriver, []);
    });

});