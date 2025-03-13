const sampleInput = [
  "RBY_YBR", //YES
  "X_Y__X", //NO
  "__", //YES
  "B_RRBR", //YES
  "AABBC", //NO
  "AABBC_C", //YES
  "_", //YES
  "DD__FQ_QQF", //YES
  "AABCBC", //NO
];

function happyLadybugs(b) {
  if (b.length === 0) {
    return "YES";
  }

  const counts = {};
  for (let i = 0; i < b.length; i++) {
    counts[b[i]] = (counts[b[i]] || 0) + 1;
  }

  for (const color in counts) {
    if (color !== "_" && counts[color] === 1) {
      return "NO";
    }
  }

  let happy = true;
  for (let i = 0; i < b.length; i++) {
    if (b[i] !== "_") {
      if (i > 0 && b[i] === b[i - 1]) {
        continue;
      }
      if (i < b.length - 1 && b[i] === b[i + 1]) {
        continue;
      }
      happy = false;
      break;
    }
  }

  if (happy) {
    return "YES";
  } else if (counts["_"]) {
    return "YES";
  } else {
    return "NO";
  }
}

for (sample of sampleInput) {
  console.log(happyLadybugs(sample));
}
