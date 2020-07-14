
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(array,element) {
  const newArrary = [element,...array];
  return newArrary;
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array = [element,...array];
  return array;
}