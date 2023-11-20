const formatCurrency = (value: number, currencyType: string) => {
  const currencyValue = Math.trunc(value).toLocaleString("pt-br", {
    style: "currency",
    currency: currencyType,
    maximumFractionDigits: 0,
  });
  return currencyValue.replace(/\s/g, "");
};

export default formatCurrency;
