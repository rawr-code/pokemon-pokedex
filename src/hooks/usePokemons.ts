import { useEffect } from 'react'
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

// Services
import { pokemonService } from '@services'

const KEY = 'pokemons'
export const useGetPokemons = (page: number, offset: number) => {
  const queryClient = useQueryClient()

  const { status, data, error, isFetching, isPlaceholderData, isFetched } =
    useQuery({
      queryKey: [KEY, page],
      queryFn: pokemonService.getPokemon(page * offset),
      placeholderData: keepPreviousData,
      staleTime: 50000,
    })

  useEffect(() => {
    if (!isPlaceholderData && !isFetching) {
      queryClient.prefetchQuery({
        queryKey: [KEY, page + 1],
        queryFn: pokemonService.getPokemon((page + 1) * offset),
        staleTime: 50000,
      })
    }
  }, [data, isFetching, isPlaceholderData, offset, page, queryClient])

  return { status, data, error, isFetching, isPlaceholderData, isFetched }
}
