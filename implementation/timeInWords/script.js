const sampleInput = [
  [12, 45],
  [5, 47],
  [11, 15],
  [11, 35],
];

function timeInWords(h, m) {
  // Write your code here
  const minutes = [
    "",
    "one minute",
    "two minutes",
    "three minutes",
    "four minutes",
    "five minutes",
    "six minutes",
    "seven minutes",
    "eight minutes",
    "nine minutes",
    "ten minutes",
    "eleven minutes",
    "twelve minutes",
    "thirteen minutes",
    "fourteen minutes",
    "quarter",
    "sixteen minutes",
    "seventeen minutes",
    "eighteen minutes",
    "nineteen minutes",
    "twenty minutes",
    "twenty one minutes",
    "twenty two minutes",
    "twenty three minutes",
    "twenty four minutes",
    "twenty five minutes",
    "twenty six minutes",
    "twenty seven minutes",
    "twenty eight minutes",
    "twenty nine minutes",
    "half",
  ];
  const hours = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "one",
  ];

  if (m === 0) return `${hours[h]} o' clock`;
  if (m <= 30) return `${minutes[m]} past ${hours[h]}`;
  else return `${minutes[60 - m]} to ${hours[h + 1]}`;
}

for (let sample of sampleInput) {
  console.log(timeInWords(...sample));
}
