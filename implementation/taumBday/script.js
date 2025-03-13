const sampleInput = [
  [235081335n, 101052703n, 957899374n, 147367080n, 942413506n],
  [3n, 5n, 3n, 4n, 1n],
  [10n, 10n, 1n, 1n, 1n],
  [5n, 9n, 2n, 3n, 4n],
  [3n, 6n, 9n, 1n, 1n],
  [7n, 7n, 4n, 2n, 1n],
  [3n, 3n, 1n, 9n, 2n],
];

function taumBday(b, w, bc, wc, z) {
  // Write your code here
  const bmc = bc < wc + z ? bc : wc + z;
  const wmc = wc < bc + z ? wc : bc + z;
  return b * bmc + w * wmc;
}

sampleInput.forEach((sample) => console.log(taumBday(...sample).toString()));
