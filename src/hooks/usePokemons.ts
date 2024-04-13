import { useEffect } from 'react'
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

// Services
import { pokemonService } from '@services'

const KEY = 'pokemons'

interface IuseGetPokemonsProps {
  page: number
  offset: number
  limit: number
}
export const useGetPokemons = ({
  page,
  offset,
  limit,
}: IuseGetPokemonsProps) => {
  const queryClient = useQueryClient()

  const { status, data, error, isFetching, isPlaceholderData, isFetched } =
    useQuery({
      queryKey: [KEY, page],
      queryFn: pokemonService.getPokemon(page * offset, limit),
      placeholderData: keepPreviousData,
      staleTime: 50000,
    })

  useEffect(() => {
    if (!isPlaceholderData && !isFetching) {
      queryClient.prefetchQuery({
        queryKey: [KEY, page + 1],
        queryFn: pokemonService.getPokemon((page + 1) * offset, limit),
        staleTime: 50000,
      })
    }
  }, [data, isFetching, isPlaceholderData, limit, offset, page, queryClient])

  return { status, data, error, isFetching, isPlaceholderData, isFetched }
}
