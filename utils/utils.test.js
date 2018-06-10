//extension test.js tells our application that it is test file.not to run it.

// it(behavior_driven_development(bdd),function);
const expect = require('expect');
const utils = require('./utils');

describe('Utils',()=>{
  describe("async adding 2 nos",()=>{
    it('should async add',(done)=>{
      utils.asyncAdd(4,3,(sum)=>{
        expect(sum).toBe(10).toBeA('number');
      })
      done();
    });  
  })
  describe("adding 2 nos",()=>{
    it('should add 2 nos',()=>{
      var res = utils.add(33,55);
      expect(res).toBe(88).toBeA('number');
    });  
  });
  describe("square a number",()=>{
    it('should be square',()=>{
      var res = utils.square(4);
      expect(res).toNotBe(88);
    });
  });
})

it("should expect some values",()=>{
  // expect({name : 'Sim'}).toBe({name:'Sim'}); 
  //(toBe deosnot work in objects)
  expect({name : 'Sim'}).toEqual({name:'Sim'});  
  expect({name : 'Simr'}).toNotEqual({name:'Sim'});
  expect([2,3,4]).toInclude(2);
  expect([2,3,4]).toExclude(6);
  expect({
    name : 'Andrew',
    age : 25,
    location : 'India'
  }).toInclude({
    age : 25
  })
  expect({
    name : 'Andrew',
    age : 25,
    location : 'India'
  }).toExclude({
    age : 27
  })
  //greater than less thn
  

})