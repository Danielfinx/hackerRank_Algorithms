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
  if (!unsorted || unsorted.length === 0) {
    return [];
  }

  function getDigit(numStr, place) {
    const index = numStr.length - 1 - place;
    return index < 0 ? 0 : parseInt(numStr[index]);
  }

  function longestLength(unsorted) {
    let maxLength = 0;
    for (const numStr of unsorted) {
      maxLength = Math.max(maxLength, numStr.length);
    }
    return maxLength;
  }

  const maxLength = longestLength(unsorted);

  for (let k = 0; k < maxLength; k++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (const numStr of unsorted) {
      const digit = getDigit(numStr, k);
      buckets[digit].push(numStr);
    }

    unsorted = [].concat(...buckets);
  }

  return unsorted;
}

sampleInput.forEach((sample) => console.log(bigSorting(sample)));
