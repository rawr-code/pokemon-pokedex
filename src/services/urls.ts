const AllUrls = {
  POKEMONS: {
    getAll: '/pokemon/?offset={offset}&limit={limit}',
  },
} as const

export type AllUrls = keyof typeof AllUrls

export default AllUrls
