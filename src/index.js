module.exports = function toReadable(number) {
  let words = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
};

let dozens = {
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

if (number >= 20) {
    const numberArr = String(number).split("");

    if (numberArr.length === 2) {
        if (number % 10 === 0) {
            return dozens[number];
        } else {
            return `${dozens[numberArr[0] * 10]} ${words[numberArr[1]]}`;
        }
    } else if (numberArr.length === 3) {
        if (number % 100 === 0) {
          return `${words[numberArr[0]]} hundred`;
        } else if (Number(numberArr[1] + numberArr[2]) < 20) {
          return `${words[numberArr[0]]} hundred ${words[Number(numberArr[1] + numberArr[2])]}`;
        } else {
          return `${words[numberArr[0]]} hundred ${dozens[numberArr[1] * 10]}${numberArr[2] === '0' ? '' : ' ' + words[numberArr[2]]}`;
        }
    }
} else {
    return words[number];
}
};
