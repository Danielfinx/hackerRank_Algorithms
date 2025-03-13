const sampleInput = [
  [[1]],
  [
    [1, 3, 4],
    [2, 2, 3],
    [1, 2, 4],
  ],
];

function surfaceArea(A) {
  let price = 0;
  const rows = A.length;
  const cols = A[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (A[i][j] > 0) {
        price += 2; // Top and bottom surfaces
      }

      // Add the difference between current cell and adjacent cells
      price += i === 0 ? A[i][j] : Math.max(0, A[i][j] - A[i - 1][j]); // Front
      price += i === rows - 1 ? A[i][j] : Math.max(0, A[i][j] - A[i + 1][j]); // Back
      price += j === 0 ? A[i][j] : Math.max(0, A[i][j] - A[i][j - 1]); // Left
      price += j === cols - 1 ? A[i][j] : Math.max(0, A[i][j] - A[i][j + 1]); // Right
    }
  }

  return price;
}

for (const sample of sampleInput) {
  console.log(surfaceArea(sample));
}
