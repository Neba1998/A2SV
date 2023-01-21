/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
     let longestMountainLength = 0;
  let mountainFrom = arr.length;

  for (let i = 1; i < arr.length; ++i) {
    const beforePrevious = i >= 2 ? arr[i - 2] : Infinity;
    const previous = arr[i - 1];
    const current = arr[i];
    if (current > previous && previous <= beforePrevious) {
      mountainFrom = i - 1;
      continue;
    }
    if (current === previous || beforePrevious === previous) {
      mountainFrom = i;
      continue;
    }
    if (current < previous) {
      longestMountainLength = Math.max(longestMountainLength, i - mountainFrom + 1);
    }
  }

  return longestMountainLength >= 3 ? longestMountainLength : 0;
};
