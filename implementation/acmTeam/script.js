const sampleInput = [
  ["10101", "11110", "00010"],
  ["10101", "11100", "11010", "00101"],
  ["11101", "10101", "11001", "10111", "10000", "01110"],
];

function acmTeam(topic) {
  // Write your code here
  let result = [0, 0];

  for (let i = 0; i < topic.length; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      let count = 0;
      for (let k = 0; k < topic[0].length; k++) {
        if (topic[i][k] === "1" || topic[j][k] === "1") {
          count++;
        }
      }
      if (count > result[0]) {
        result[0] = count;
        result[1] = 1;
      } else if (count === result[0]) {
        result[1]++;
      }
    }
  }
  return result;
}

sampleInput.forEach((sample) => console.log(acmTeam(sample)));
