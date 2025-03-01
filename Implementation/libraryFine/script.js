const sampleInput = [[9, 6, 2015, 6, 6, 2015]];

function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 != y2) {
    return y1 > y2 ? 10000 : 0;
  }

  if (m1 != m2) {
    return m1 > m2 ? (m1 - m2) * 500 : 0;
  }

  if (d1 != d2) {
    return d1 > d2 ? (d1 - d2) * 15 : 0;
  }

  return 0;
}

sampleInput.forEach((sample) => console.log(libraryFine(...sample)));
