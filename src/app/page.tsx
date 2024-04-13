'use client'
import { useMemo, useState } from 'react'

// Atoms
import { Loader } from '@atoms'

// Molecules
import { Card, Modal } from '@molecules'

// Hooks
import { usePokemons } from '@hooks'

// Models
import { pokemonModels } from '@models'

const PokeballIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 26 26" fill="none">
    <path d="M2.167 13a10.834 10.834 0 1021.667 0H2.166z" fill="#fff" />
    <path d="M23.833 13a10.834 10.834 0 00-21.666 0h21.666z" fill="#CD3131" />
    <circle cx={13} cy={12.999} r={3.25} fill="#fff" />
    <path
      d="M13 23.833c5.983 0 10.833-4.85 10.833-10.833 0-5.983-4.85-10.834-10.833-10.834C7.017 2.166 2.167 7.016 2.167 13c0 5.983 4.85 10.833 10.833 10.833z"
      stroke="#173EA5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 16.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5v0z"
      stroke="#173EA5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M2.167 13H9.75m6.5 0h7.583" stroke="#173EA5" strokeWidth={1.5} />
  </svg>
)

export default function HomePage() {
  const [page, setPage] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [pkSelected, setPkSelected] = useState<pokemonModels.PokemonInfo>()
  const offset = useMemo(() => 14, [])

  const { data, isFetching, isFetched } = usePokemons.useGetPokemons(
    page,
    offset,
    offset,
  )

  const totalPages = Math.ceil((data?.count || 1) / offset)

  const handlePrev = () =>
    setPage(p => {
      if (p > 0) return p - 1
      return p
    })

  const handleNext = () => setPage(p => p + 1)
  return (
    <div className="relative flex h-full w-full flex-col bg-pokedex-screen">
      {modalIsOpen && pkSelected && (
        <Modal pokemon={pkSelected} onClose={() => setModalIsOpen(false)} />
      )}
      {isFetching && !isFetched && <Loader />}
      <header className=" flex h-16 w-full">
        <div className="flex w-full items-center justify-end py-3 pr-5">
          <div className="mr-3 h-8 w-8">
            <PokeballIcon />
          </div>
          <div className="flex flex-col">
            <p className="text-md font-bold">Emmanuel Villegas</p>
            <p className="text-sm">Trainer</p>
          </div>
        </div>
      </header>
      <div
        id="cards"
        className="flex w-full flex-1 flex-wrap overflow-auto p-1"
      >
        {data?.data?.map((i: any) => (
          <div key={i.id} className="w-1/2 p-1">
            <Card
              name={i.name}
              id={i.id}
              types={i.types}
              img={i.img}
              onClick={() => {
                setPkSelected(i)
                setModalIsOpen(true)
              }}
            />
          </div>
        ))}
      </div>
      <footer className="flex items-center justify-between border-t-2">
        <button
          className="text-md px-5 py-3 font-bold disabled:opacity-40"
          disabled={page < 1}
          onClick={handlePrev}
        >
          Prev
        </button>
        <p className="text-md font-baold">
          {page + 1} - {totalPages}
        </p>
        <button
          className="text-md px-5 py-3 font-bold"
          disabled={page >= totalPages}
          onClick={handleNext}
        >
          Next
        </button>
      </footer>
    </div>
  )
}
