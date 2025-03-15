const sampleInput = [
  ["1", "200", "150", "3"],
  ["31415926535897932384626433832795", "1", "3", "10", "3", "5"],
  [
    "1",
    "2",
    "100",
    "12303479849857341718340192371",
    "3084193741082937",
    "3084193741082938",
    "111",
    "200",
  ],
];

function bigSorting(unsorted) {
  // Write your code here
  return unsorted.sort((a, b) => Number(BigInt(a) - BigInt(b)));
}

sampleInput.forEach((sample) => console.log(bigSorting(sample)));
