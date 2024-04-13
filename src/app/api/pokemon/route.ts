import urls from '@/services/urls'
import { parseUrl } from '@/utils'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const offset = searchParams.get('offset') || 0
  const limit = searchParams.get('limit') || 14

  const response = await fetch(
    process.env.NEXT_API_URL +
      parseUrl(urls.POKEMONS.getAll, { offset, limit }),
  )

  const { count, results } = await response.json()

  const mappedArray = await Promise.all(
    results.map((p: any) => {
      return fetch(p.url).then(i => i.json())
    }),
  )

  return Response.json({ data: mappedArray, count })
}
