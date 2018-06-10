const expect = require('expect');

describe('App',()=>{
  it('should have call spy correctly',()=>{
    var spy = expect.createSpy();
    spy('ndrew',25);
    expect(spy).toHaveBeenCalledWith('Andrew',25);
  });
});