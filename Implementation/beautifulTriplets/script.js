const sampleInput = [
  [3, [1, 2, 4, 5, 7, 8, 10]],
  [3, [1, 6, 7, 7, 8, 10, 12, 13, 14, 19]],
];

function beautifulTriplets(d, arr) {
  // Write your code here
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    const trps = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      if (trps.length < 3) {
        if (arr[j] - trps[trps.length - 1] === d) {
          trps.push(arr[j]);
        }
      }
    }
    if (trps.length == 3) {
      count++;
    }
  }

  return count;
}

sampleInput.forEach((sample) => console.log(beautifulTriplets(...sample)));
