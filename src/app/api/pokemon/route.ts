export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const offset = searchParams.get('offset') || 0
  const limit = searchParams.get('limit') || 10
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  )
  const { count, results } = await res.json()

  const mappedArray = await Promise.all(
    results.map((p: any) => {
      return fetch(p.url).then(i => i.json())
    }),
  )

  return Response.json({ data: mappedArray, count })
}
