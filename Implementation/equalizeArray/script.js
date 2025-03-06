const sampleInput = [
  [1, 2, 2, 3],
  [3, 3, 2, 1, 3],
  [1, 2, 3, 1, 2, 3, 3, 3],
];

function equalizeArray(arr) {
  // Write your code here
  const freq = {};
  let most = 0;
  arr.forEach((element) => {
    freq[element] = freq[element] ? freq[element] + 1 : 1;
    if (freq[element] > most) {
      most = freq[element];
    }
  });
  return arr.length - most;
}

sampleInput.forEach((sample) => console.log(equalizeArray(sample)));
