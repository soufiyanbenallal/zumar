export function moneyFormat(value: number, fixed = 2, currency = '$'): string {
  const re = '\\d(?=(\\d{' + 3 + '})+' + (fixed > 0 ? '\\.' : '$') + ')'
  return currency + Number(value).toFixed(Math.max(0, ~~fixed)).replace(new RegExp(re, 'g'), '$&,')
}
