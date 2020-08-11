type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   result = result.toString();
  // }
  return result;
}

const combineAges = combine(20, 4, 'as-number');
const combineStringAges = combine('20', '4', 'as-number');
const combineNames = combine('Max', 'Leaf', 'as-text');

console.log(combineAges, combineStringAges, combineNames);
