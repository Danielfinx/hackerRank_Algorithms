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

function quicksort(array, start, end) {
  if (start < end) {
    const pivot = partition(array, start, end);
    quicksort(array, start, pivot - 1);
    quicksort(array, pivot + 1, end);
  }
  return array;
}

function partition(array, start, end) {
  const pivot = array[end];
  let i = start - 1;

  for (let j = start; j <= end - 1; j++) {
    if (BigInt(array[j]) <= BigInt(pivot)) {
      i++;
      swap(array, i, j);
    }
  }

  swap(array, i + 1, end);
  return i + 1;
}

function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function bigSorting(unsorted) {
  return quicksort(unsorted, 0, unsorted.length - 1);
}

sampleInput.forEach((sample) => console.log(bigSorting(sample)));
