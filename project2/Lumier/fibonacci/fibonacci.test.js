const fibonacci = require('./fibonacci');


describe('Fibonacci Tests', () => {
  const output = "4224696333392304878706725602341482782579852840250681098010280137314308584370130707224123599639141511088446087538909603607640194711643596029271983312598737326253555802606991585915229492453904998722256795316982874482472992263901833716778060607011615497886719879858311468870876264597369086722884023654422295243347964480139515349562972087652656069529806499841977448720155612802665404554171717881930324025204312082516817125"
  test('expect short', () => {
      expect(fibonacci(5)).toEqual(5)
      expect(fibonacci(6)).toEqual(8)
  });
  //  test('expect looong', () => {
  //     let fibo2000 = fibonacci(2000)
  //     expect(fibonacci(2000)).toEqual(output);
  // });
});
describe("some data types and different inputs", () =>{
  // test("data type",() => {
  //   expect(typeof fibonacci(9)).toBe('bigint')
  // });
  test("fibonacci with 10 input",() =>{
    expect(fibonacci(10)).toEqual(55)
  });
  test("string number input",()=>{
    expect(fibonacci("10")).toEqual(55)
  })
});