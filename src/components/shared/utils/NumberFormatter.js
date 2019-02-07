const currencyFormat0Digits = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const currencyFormatUpTo3Digits = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
  minimumFractionDigits: 0,
  maximumFractionDigits: 3,
});

const percentFormat = new Intl.NumberFormat('en', {
  style: 'percent',
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
});

export const currencyFormatter = (val) =>
  val >= 1000000
    ? `${currencyFormatUpTo3Digits.format(val / 1000000)}M`
    : val >= 1000
      ? `${currencyFormat0Digits.format(val / 1000)}K`
      : currencyFormatUpTo3Digits.format(val);

export const currencyFormatter0Digits = (val) =>
  currencyFormat0Digits.format(val);

export const currencyFormatterAsIs = (val) =>
  currencyFormatUpTo3Digits.format(val);

export const percentFormatter = (val) =>
  `${percentFormat.format(val / 100)}`;
