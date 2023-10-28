import urls from './urls'

// Utils
import { fetcher, parseUrl } from '@utils'

// Interfaces
import { pokemonModels } from '@models'

const genId = (id: string) => {
  let decoratorLength = 0
  if (id.length < 3) {
    decoratorLength = 3 - id.length
  } else {
    decoratorLength = 0
  }

  return '#' + '0'.repeat(decoratorLength) + id
}

export const formatData = (data: pokemonModels.Pokemon) => {
  const formatedData: pokemonModels.PokemonInfo = {
    id: genId(data.id.toString()),
    img: data.sprites.other?.dream_world.front_default,
    name: data.name,
    height: data.height,
    weight: data.weight,
    types: data.types.map((t: any) => t.type.name),
    abilities: data.abilities.map((a: any) => a.ability.name),
    stats: {
      hp: data.stats.find((s: any) => s.stat.name === 'hp')?.base_stat,
      attack: data.stats.find((s: any) => s.stat.name === 'attack')?.base_stat,
      defense: data.stats.find((s: any) => s.stat.name === 'defense')
        ?.base_stat,
      speed: data.stats.find((s: any) => s.stat.name === 'speed')?.base_stat,
    },
  }

  return formatedData
}

export const getPokemon =
  (offset = 0, limit = 10) =>
  async () => {
    const { data } = await fetcher.get<{ data: pokemonModels.Pokemon[] }>(
      parseUrl(urls.POKEMONS.getAll, { offset, limit }),
    )

    return data.data.map(p => formatData(p))
  }
