const sampleInput = [12, 1012];

function findDigits(n) {
  let count = 0;
  const digits = n.toString().split("");

  for (let i = 0; i < digits.length; i++) {
    if (n % +digits[i] === 0) count++;
  }
  return count;
}

for (const sample of sampleInput) {
  console.log(findDigits(sample));
}
