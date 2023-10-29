'use client'
import { useState } from 'react'

// Atoms
import { Loader } from '@atoms'

// Molecules
import { Card } from '@molecules'

// Hooks
import { usePokemons } from '@hooks'

export default function HomePage() {
  const [page, setPage] = useState(0)
  const [offset] = useState(10)

  const { data, isFetching, isFetched } = usePokemons.useGetPokemons(
    page,
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
      {isFetching && !isFetched && <Loader />}
      <header className=" flex h-16 w-full">
        <div className="flex w-full items-center justify-end py-3 pr-2">
          <svg width={32} height={32} viewBox="0 0 26 26" fill="none">
            <path d="M2.167 13a10.834 10.834 0 1021.667 0H2.166z" fill="#fff" />
            <path
              d="M23.833 13a10.834 10.834 0 00-21.666 0h21.666z"
              fill="#CD3131"
            />
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
            <path
              d="M2.167 13H9.75m6.5 0h7.583"
              stroke="#173EA5"
              strokeWidth={1.5}
            />
          </svg>
          <div className="ml-3 mr-14 flex flex-col">
            <p className="text-md font-bold">Emmanuel Villegas</p>
            <p className="text-sm">Entrenador</p>
          </div>
          <svg
            width={32}
            height={32}
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.667 15.833L19 22.167l6.333-6.334"
              stroke="#000"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </header>
      <div className="space-x-a4 p-a4 flex w-full flex-1 flex-wrap overflow-auto pr-3 pt-3">
        {data?.data?.map((i: any) => (
          <Card
            key={i.id}
            name={i.name}
            id={i.id}
            types={i.types}
            img={i.img}
          />
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
