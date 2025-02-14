const sampleInput = [
  [5, [0, 4]],
  [6, [0, 1, 2, 4, 3, 5]],
];

function flatlandSpaceStations(n, c) {
  let maxDistance = 0;
  for (let i = 0; i < n; i++) {
    let nearest = null;
    for (let j = 0; j < c.length; j++) {
      if (
        (c[j] >= i && c[j] - i < nearest) ||
        (c[j] <= i && i - c[j] < nearest) ||
        nearest === null
      ) {
        nearest = c[j] >= i ? c[j] - i : i - c[j];
      }
    }
    if (nearest > maxDistance) maxDistance = nearest;
  }
  return maxDistance;
}

for (let sample of sampleInput) {
  console.log(flatlandSpaceStations(...sample));
}
