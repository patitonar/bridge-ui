import numeral from 'numeral'

export const formatBalance = (balance) => {
  return isNaN(numeral(balance).format('0.00', Math.floor))
    ? numeral(0).format('0,0.00', Math.floor)
    : numeral(balance).format('0,0.00', Math.floor)
}
