const sampleInput = [
  ["1", "200", "150", "3"],
  ["31415926535897932384626433832795", "1", "3", "10", "3", "5"],
];

function bigSorting(unsorted) {
  // Write your code here
  return unsorted.sort((a, b) => Number(BigInt(a) - BigInt(b)));
}

sampleInput.forEach((sample) => console.log(bigSorting(sample)));
