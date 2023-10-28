import { parseTemplate, PrimitiveValue } from 'url-template'

const parseUrl = (
  url: string,
  template: Record<
    string,
    PrimitiveValue | PrimitiveValue[] | Record<string, PrimitiveValue>
  >,
): string => {
  const urlParse = parseTemplate(url)
  return urlParse.expand(template)
}

export default parseUrl
