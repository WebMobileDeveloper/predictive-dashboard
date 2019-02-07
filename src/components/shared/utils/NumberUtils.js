const decimalFormatUpTo2Digits = new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export const roundDecimal = (val) =>
  parseFloat(decimalFormatUpTo2Digits.format(val).replace(/,/g, ''));
