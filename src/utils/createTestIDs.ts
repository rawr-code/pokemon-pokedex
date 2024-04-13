import { toKebabCase } from './string-helpers'

const createTestIDs = <T extends string>(
  scopeName: string,
  keys: T[],
): Record<T, string> => {
  const output: Partial<Record<T, string>> = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    output[key] = `${scopeName}-${toKebabCase(key)}`
  }

  return output as Record<T, string>
}

export default createTestIDs
