const numberWithCommas = (num: number | string | undefined | null) => {
  if (!num || typeof +num !== "number") {
    return "NaN";
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { numberWithCommas };
