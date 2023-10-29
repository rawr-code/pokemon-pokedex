const AllUrls = {
  AUTH: {
    login: '/auth/login',
  },
  POKEMONS: {
    getAll: '/pokemon/?offset={offset}&limit={limit}',
  },
} as const

export type AllUrls = keyof typeof AllUrls

export default AllUrls
