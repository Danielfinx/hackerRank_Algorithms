const sampleInput = [
  ["hackerhappy", "hackerrank", 9],
  ["aba", "aba", 7],
  ["ashley", "ash", 2],
];

function appendAndDelete(s, t, k) {
  if (s === t) {
    return "Yes";
  }
}

for (const sample of sampleInput) {
  console.log(appendAndDelete(...sample));
}
