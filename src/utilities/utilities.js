const dateCalculator = (date) => {
  const oneDay = 1000 * 60 * 60 * 24;
  const publishDate = new Date(date);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - publishDate.getTime();
  const inDays = Math.round(differenceInTime);
  const days = inDays / oneDay;
  return days.toFixed(0)-1;
};

export { dateCalculator };
