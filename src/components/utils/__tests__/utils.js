import { formatBalance } from '../utils'

describe('formatBalance', () => {

  it('Should show two decimals', () => {
    let result = formatBalance(1)
    expect(result).toEqual('1.00')

    result = formatBalance(10)
    expect(result).toEqual('10.00')

    result = formatBalance(0.1)
    expect(result).toEqual('0.10')

    result = formatBalance(0.1004)
    expect(result).toEqual('0.10')
  })

  it('Should work with string or number', () => {
    const stringResult = formatBalance('0.1')
    expect(stringResult).toEqual('0.10')

    const numberResult = formatBalance(0.1)
    expect(numberResult).toEqual('0.10')
  })

  it('Should return 0.00 if very small balance', () => {
    const result = formatBalance('0.0000000000001123')
    expect(result).toEqual('0.00')
  })

  it('Should not round decimals', () => {
    const result = formatBalance(0.237)
    expect(result).toEqual('0.23')
  })

  it('Should return 0.00 if not a number', () => {
    let result = formatBalance(null)
    expect(result).toEqual('0.00')

    result = formatBalance(undefined)
    expect(result).toEqual('0.00')

    result = formatBalance('test')
    expect(result).toEqual('0.00')

    result = formatBalance({})
    expect(result).toEqual('0.00')

    result = formatBalance([])
    expect(result).toEqual('0.00')
  })

  it('Should show commas if big number', () => {
    const result = formatBalance(1234567.89)
    expect(result).toEqual('1,234,567.89')
  })
})
