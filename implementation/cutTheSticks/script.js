const sampleInput = [
  [5, 4, 4, 2, 2, 8],
  [1, 2, 3, 4, 3, 3, 2, 1],
];

function cutTheSticks(arr) {
  const answer = [];
  arr.sort((a, b) => a - b); // Ordenar el array
  let previous = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > previous) {
      answer.push(arr.length - i);
      previous = arr[i];
    }
  }
  return answer;
}

sampleInput.forEach((sample) => console.log(cutTheSticks(sample)));
