'use strict'; 

const pickUp = require('../caps').pickUp 
const transit = require('../caps').transit 
const delivered = require('../caps').delivered

const order = require('../modular/vendors/vendor')


// jest.useFakeTimers();
// // console.log(delivered());
// test('CAPS TESTING : ', () => {
//     transit();

//     expect(setTimeout).toHaveBeenCalledTimes(3);
//     // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);  
  
//     // expect(setTimeout).toHaveBeenCalledTimes(1);
//     // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  
// })
// describe('Logger middleware', ()=> {
//     const callback = jest.fn();

//     let consoleSpy;
  
//     jest.useFakeTimers();
  
//     beforeAll(() => {
//       consoleSpy = jest.spyOn(console, 'log').mockImplementation();
//     });
//     afterAll(() => {
//       consoleSpy.mockRestore();
//     });
  
//     it('sssss',  () => {
//         pickUp(order);
//         expect(callback).toHaveBeenCalled();
//         expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
//         })
// });
