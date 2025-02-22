const sampleInput = [
  [[0, 0, 1, 0, 0, 1, 1, 0], 2],
  [[0, 0, 1, 0], 2],
  [[1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3],
];

function jumpingOnClouds(c, k) {
  let pos = 0;
  let energy = 100;
  do {
    pos += k;
    if (pos > c.length - 1) {
      pos = -1 + (pos - (c.length - 1));
    }

    if (c[pos] === 1) {
      if (energy < 3) {
        break;
      } else {
        energy -= 3;
      }
    } else {
      if (energy < 1) {
        break;
      } else {
        energy -= 1;
      }
    }
  } while (pos != 0 && energy > 0);

  return energy;
}

for (sample of sampleInput) {
  console.log(jumpingOnClouds(...sample));
}
