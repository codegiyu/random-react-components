export const getStarArr = (rating: number) => {
  const starArr: number[] = [];
  let ratingNum = rating;

  // Loop exactly 5 times to create an array of 5 numbers that are either 1, 0.5 or 0
  // Each turn of the loop, if ratingNum is still greater than 1, push one into starArr and subtract 1 from ratingNum
  // If ratingNum is between 0 and 1, push 0.5 into starArr and turn rating num to 0
  // if ratingNum is 0, push 0 into starArr

  for (let i = 0; i < 5; i++) {
    if (ratingNum >= 1) {
      starArr.push(1);
      ratingNum--;
    } else if (ratingNum > 0 && ratingNum < 1) {
      starArr.push(0.5);
      ratingNum = 0;
    } else if (ratingNum === 0) {
      starArr.push(0);
    }
  }

  return starArr;
};
