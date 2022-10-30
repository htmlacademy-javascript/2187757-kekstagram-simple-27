function getRandomPositiveInteger(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random(1 * (upper - lower + 1) + lower);
  return Math.floor(result);
}

function checkStringLength(string, length) {
  return string.lehgth <= length;
}


getRandomPositiveInteger(1, 10);
checkStringLength('', 100);
