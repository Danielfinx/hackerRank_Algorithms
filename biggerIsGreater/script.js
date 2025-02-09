const sampleInput = [
  "lmno",
  "dcba",
  "dcbb",
  "abdc",
  "abcd",
  "fedcbabcd",
  "ab",
  "bb",
  "hefg",
  "dhck",
  "dkhc",
];

function biggerIsGreater(w) {
  // Write your code here

  const temp = w.split("");
  let aux = null;
  let outp = null;

  for (let i = w.length - 1; i >= 0; i--) {
    if (temp[i] > temp[i - 1]) {
      let smallerRight = null;
      for (let j = w.length - 1; j >= i - 1; j--) {
        if (temp[j] > temp[i - 1]) {
          if (!smallerRight || temp[j] < temp[smallerRight]) {
            smallerRight = j;
          }
        }
      }
      if (smallerRight) {
        const swap = temp[i - 1];
        temp[i - 1] = temp[smallerRight];
        temp[smallerRight] = swap;
        aux = temp.slice(i).sort();
        temp.splice(i, w.length - i);
        outp = temp.concat(aux).join("");

        break;
      }
    }
  }
  return outp > w ? outp : "no answer";
}

sampleInput.forEach((sample) => console.log(biggerIsGreater(sample)));

//acbd
