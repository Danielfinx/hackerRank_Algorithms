const sampleInput = [
  ["aba", 10],
  ["a", 1000000000000],
];

function repeatedString(s, n) {
  // Write your code here
  const asAmount = s.split("").filter((item) => item === "a").length;
  const diff = n % s.length === 0 ? 0 : n - s.length * Math.floor(n / s.length);
  let result = 0;

  result = asAmount * Math.floor(n / s.length);
  for (let i = 0; i < diff; i++) {
    if (s[i] == "a") {
      result++;
    }
  }
  return result;
}

sampleInput.forEach((sample) => console.log(repeatedString(...sample)));
