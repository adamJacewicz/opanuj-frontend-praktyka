export type NumericValidationMethod = (input: number) => boolean;

export function isEven(value: number) {
  return value % 2 === 0
}

export function isGreaterThan(boundary: number): NumericValidationMethod {
  return function(value: number) {
    return value > boundary
  }
}

export function isLessThan(boundary: number): NumericValidationMethod {
  return function(value: number) {
    return value < boundary
  }
}

export function isValidInteger(value: string) {
  return value !== "" && Number.isInteger(Number(value))
}