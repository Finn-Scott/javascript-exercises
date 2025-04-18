const sumAll = function (first, last) {
  if (!Number.isInteger(first) || !Number.isInteger(last)) return "ERROR";
  if (first < 0 || last < 0) return "ERROR";
  if (typeof first != "number" || typeof last != "number") return "ERROR";
  if (first > last) {
    const temp = first;
    first = last;
    last = temp;
  }

  let i = first - 1;
  let finalSum = 0;
  while (i < last) {
    i++;
    finalSum += i;
  }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
