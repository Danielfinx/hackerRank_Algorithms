const sampleInput = [[[1, 2, 3], 2, [0, 1, 2]]];

function circularArrayRotation(a, k, queries) {
  // Write your code here
  const rep = [];
  for (let i = 0; i < k; i++) {
    const temp = a.pop();
    a.unshift(temp);
  }

  for (let i = 0; i < queries.length; i++) {
    rep[i] = a[queries[i]];
  }

  return rep;
}

sampleInput.forEach((sample) => {
  console.log(circularArrayRotation(...sample));
  //   console.log(...sample);
});
