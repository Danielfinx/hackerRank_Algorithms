const sampleInput = [
  [5, 3, [4, 2, 6, 1, 10]],
  [10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31]],
];

function workbook(n, k, arr) {
  // Write your code here
  let page = 1;
  let outp = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= arr[i - 1]; j++) {
      if (j === page) outp++;
      if (j % k === 0 && arr[i - 1] > j) page++;
    }
    page++;
  }

  return outp;
}

for (let sample of sampleInput) {
  console.log(workbook(...sample));
}
