const sampleInput = [4, 17, 21, 26];

function strangeCounter(t) {
  // Write your code here
  let startTime = 1;
  let startValue = 3;

  while (t >= startTime + startValue) {
    startTime += startValue;
    startValue *= 2;
  }

  return startValue - t + startTime;
}

for (const sample of sampleInput) {
  console.log(strangeCounter(sample));
}
