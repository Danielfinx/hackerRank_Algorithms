const sampleInput = [
  [1, 100],
  [100, 300],
  [50, 400],
];

function kaprekarNumbers(p, q) {
  // Write your code here
  const outp = [];
  for (let i = p; i <= q; i++) {
    const d = i.toString().length;
    const r = Math.pow(i, 2) % Math.pow(10, d);
    const l = Math.floor(Math.pow(i, 2) / Math.pow(10, d));
    if (r + l === i) {
      outp.push(i);
    }
  }
  return outp.length > 0 ? outp.join(" ") : "INVALID RANGE";
}

sampleInput.forEach((sample) => {
  console.log(kaprekarNumbers(...sample));
});
