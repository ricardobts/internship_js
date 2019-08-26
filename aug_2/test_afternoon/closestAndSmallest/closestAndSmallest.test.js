const closestAndSmallest = require('./closestAndSmallest');

test('test closest1', function(){
  let response = closestAndSmallest('103 123 4444 99 2000');
  expect(response[0][0]).toEqual(2);
  expect(response[0][1]).toEqual(4);
  expect(response[0][2]).toEqual(2000);
  expect(response[1][0]).toEqual(4);
  expect(response[1][1]).toEqual(0);
  expect(response[1][2]).toEqual(103);
})

test("test closest are not smallest", function() {
  let response2 = smallest('10 488 1990 666')
  expect(response2[0]).toEqual([19, 2, 1990])
  expect(response2[1]).toEqual([20, 1, 488])
})

test("test closest are not smallest", function() {
  let response2 = smallest('10 488 1990 666')
  expect(Array.isArray(response2)).toBe(true)
  expect(typeof response2[0][0]).toEqual('number')
  expect(typeof typeof response2[0][0]).toEqual('string')
})
