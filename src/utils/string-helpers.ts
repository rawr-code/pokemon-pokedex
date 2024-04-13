export function isLowerCase(input: string): boolean {
  return input.toLowerCase() === input
}

export function isUpperCase(input: string): boolean {
  return input.toUpperCase() === input
}

export function splitByWord(input: string): string[] {
  const output: string[] = []

  const isSep = (s: string): boolean => [' ', '-', '_'].indexOf(s) >= 0

  let acc = ''

  let prev = ''
  let curr = input.charAt(0)
  let next = input.charAt(1)

  for (let i = 0; i < input.length; i++) {
    if (isSep(curr)) {
      if (acc) {
        output.push(acc)
        acc = ''
      }

      prev = curr
      curr = next
      next = input.charAt(i + 2)

      continue
    }

    if (prev && !isSep(prev) && isLowerCase(prev) && isUpperCase(curr)) {
      if (acc) {
        output.push(acc)
        acc = ''
      }
    } else if (next && !isSep(next) && isLowerCase(next) && isUpperCase(curr)) {
      if (acc) {
        output.push(acc)
        acc = ''
      }
    }

    acc += curr

    prev = curr
    curr = next
    next = input.charAt(i + 2)
  }

  if (acc) {
    output.push(acc)
  }

  return output
}

export function toKebabCase(input: string, strict: boolean = true): string {
  if (strict) {
    return splitByWord(input)
      .reduce((acc, word) => {
        acc += '-' + word.toLowerCase()
        return acc
      }, '')
      .slice(1)
  } else {
    return splitByWord(input)
      .reduce((acc, word) => {
        acc += '-' + word
        return acc
      }, '')
      .slice(1)
  }
}
