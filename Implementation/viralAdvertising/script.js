const viralAdvertising = (day) => {
  let cumulative = 0;
  let likes = 0;
  let recipients = 5;
  for (let i = 1; i <= day; i++) {
    likes = Math.floor(recipients / 2);
    cumulative += likes;
    recipients = likes * 3;
  }
  return cumulative;
};

console.log(viralAdvertising(3));
console.log(viralAdvertising(4));
