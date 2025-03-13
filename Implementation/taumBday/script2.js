const sampleInput = [
  [235081335, 101052703, 957899374, 147367080, 942413506],
  [3, 5, 3, 4, 1],
  [10, 10, 1, 1, 1],
  [5, 9, 2, 3, 4],
  [3, 6, 9, 1, 1],
  [7, 7, 4, 2, 1],
  [3, 3, 1, 9, 2],
];

function taumBday(b, w, bc, wc, z) {
  // Write your code here
  const bmc = bc < wc + z ? bc : wc + z;
  const wmc = wc < bc + z ? wc : bc + z;
  return b * bmc + w * wmc;
}

sampleInput.forEach((sample) => console.log(taumBday(...sample)));
