export const Code = {
  utils:
`import { BigNumber } from 'bignumber.js'

export function bigDivide(num1: number | BigNumber, num2: number | BigNumber): BigNumber { // [!code highlight]
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

export function bigMultiply(num1: number | BigNumber, num2: number | BigNumber): BigNumber { // [!code highlight]
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

export function bigAdd(num1: number | BigNumber, num2: number | BigNumber): BigNumber { // [!code highlight]
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

export function bigSubstract(num1: number | BigNumber, num2: number | BigNumber): BigNumber { // [!code highlight]
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

export function bigPow(base: number | BigNumber, exponent: number | BigNumber): BigNumber { // [!code highlight]
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

export function bigToFixed(num: number | BigNumber, decimalPlaces: number = 2): string { // [!code highlight]
  if (num instanceof BigNumber) {
    return num.toFixed(decimalPlaces)
  }
  else {
    return new BigNumber(num).toFixed(decimalPlaces)
  }
}`,
  page:
`<script setup lang="ts">
import { BigNumber } from 'bignumber.js'

const num1 = new BigNumber(43210) // '43210'
const num2 = new BigNumber('4.321e+4') // '43210'
const num3 = new BigNumber('-735.0918e-430') // '-7.350918e-428'
const num4 = new BigNumber('123412421.234324', 5) // '607236.557696'
</script>

<template>
  <div>
    <p>Number 1: {{ num1 }}, {{ num1.toString() === '43210' ? 'Correct' : 'Error' }}</p>
    <p>Number 2: {{ num2 }}, {{ num2.toString() === '43210' ? 'Correct' : 'Error' }}</p>
    <p>Number 3: {{ num3 }}, {{ num3.toString() === '-7.350918e-428' ? 'Correct' : 'Error' }}</p>
    <p>Number 4: {{ num4 }}, {{ num4.toString() === '607236.557696' ? 'Correct' : 'Error' }}</p>
    <p>Number 1 * Number 2: {{ bigMultiply(num1, num2) }}, {{ bigMultiply(num1, num2).toString() === '1867104100' ? 'Correct' : 'Error' }}</p>
    <p style="overflow-wrap: anywhere;">
      Number 3 + Number 4: {{ bigAdd(num3, num4) }}, {{ bigAdd(num3, num4).toString() === '607236.55769599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992649082' ? 'Correct' : 'Error' }}
    </p>
    <p>Number 1 / Number 2: {{ bigDivide(num1, num2) }}, {{ bigDivide(num1, num2).toString() === '1' ? 'Correct' : 'Error' }}</p>
    <p>Number 4 ^ 2: {{ bigPow(num4, 2) }}, {{ bigPow(num4, 2).toString() === '368736237002.487536828416' ? 'Correct' : 'Error' }}</p>
    <p>Number 1 toFixed(2): {{ bigToFixed(num1, 2) }}, {{ bigToFixed(num1, 2).toString() === '43210.00' ? 'Correct' : 'Error' }}</p>
  </div>
</template>`,
}

export default Code
