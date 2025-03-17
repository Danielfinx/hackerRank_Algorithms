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
  if (!unsorted || unsorted.length <= 1) {
    return unsorted;
  }

  const middle = Math.floor(unsorted.length / 2);
  const left = unsorted.slice(0, middle);
  const right = unsorted.slice(middle);

  return merge(bigSorting(left), bigSorting(right));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    const comparisonResult = compareBigNumbers(left[i], right[j]);
    if (comparisonResult < 0) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

function compareBigNumbers(a, b) {
  if (a.length !== b.length) {
    return a.length - b.length;
  }
  return a.localeCompare(b);
}

sampleInput.forEach((sample) => console.log(bigSorting(sample)));
