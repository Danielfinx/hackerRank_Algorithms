const sampleInput = [
  ["hackerhappy", "hackerrank", 9],
  ["aba", "aba", 7],
  ["ashley", "ash", 2],
];

function appendAndDelete(s, t, k) {
  if (s === t || k >= s.length + t.length) {
    return "Yes";
  }

  let commonLength = 0;
  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] === t[i]) {
      commonLength++;
    } else {
      break;
    }
  }

  const diff = s.length + t.length - 2 * commonLength;
  if (diff > k) {
    return "No";
  }

  if ((k - diff) % 2 === 0) {
    return "Yes";
  }

  if (diff % 2 === 0) {
    return "Yes";
  }

  return "No";
}

for (const sample of sampleInput) {
  console.log(appendAndDelete(...sample));
}
