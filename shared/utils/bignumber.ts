import { BigNumber } from 'bignumber.js'

export function bigDivide(num1: number | BigNumber, num2: number | BigNumber): BigNumber {
  if (num1 instanceof BigNumber) {
    return num1.div(num2)
  }
  else if (num2 instanceof BigNumber) {
    return new BigNumber(num1).div(num2)
  }
  else {
    return new BigNumber(num1).div(new BigNumber(num2))
  }
}

export function bigMultiply(num1: number | BigNumber, num2: number | BigNumber): BigNumber {
  if (num1 instanceof BigNumber) {
    return num1.multipliedBy(num2)
  }
  else if (num2 instanceof BigNumber) {
    return new BigNumber(num1).multipliedBy(num2)
  }
  else {
    return new BigNumber(num1).multipliedBy(new BigNumber(num2))
  }
}

export function bigAdd(num1: number | BigNumber, num2: number | BigNumber): BigNumber {
  if (num1 instanceof BigNumber) {
    return num1.plus(num2)
  }
  else if (num2 instanceof BigNumber) {
    return new BigNumber(num1).plus(num2)
  }
  else {
    return new BigNumber(num1).plus(new BigNumber(num2))
  }
}

export function bigSubstract(num1: number | BigNumber, num2: number | BigNumber): BigNumber {
  if (num1 instanceof BigNumber) {
    return num1.minus(num2)
  }
  else if (num2 instanceof BigNumber) {
    return new BigNumber(num1).minus(num2)
  }
  else {
    return new BigNumber(num1).minus(new BigNumber(num2))
  }
}

export function bigPow(base: number | BigNumber, exponent: number | BigNumber): BigNumber {
  if (base instanceof BigNumber) {
    return base.exponentiatedBy(exponent)
  }
  else if (exponent instanceof BigNumber) {
    return new BigNumber(base).exponentiatedBy(exponent)
  }
  else {
    return new BigNumber(base).exponentiatedBy(new BigNumber(exponent))
  }
}

export function bigToFixed(num: number | BigNumber, decimalPlaces: number = 2): string {
  if (num instanceof BigNumber) {
    return num.toFixed(decimalPlaces)
  }
  else {
    return new BigNumber(num).toFixed(decimalPlaces)
  }
}
