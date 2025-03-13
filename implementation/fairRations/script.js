const sampleInput = [
  [2, 3, 4, 5, 6],
  [1, 2],
];

function fairRations(B) {
  let outp = 0;

  for (let i = 0; i < B.length; i++) {
    if (B[i] % 2 != 0 && B[i + 1]) {
      B[i + 1]++;
      B[i]++;
      outp += 2;
    }
  }
  return B[B.length - 1] % 2 == 0 ? outp.toString() : "NO";
}

for (let sample of sampleInput) {
  console.log(fairRations(sample));
}
