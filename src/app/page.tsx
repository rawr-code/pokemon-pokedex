'use client'
import { useState } from 'react'

// Molecules
import { Card } from '@molecules'

// Hooks
import { usePokemons } from '@hooks'

export default function HomePage() {
  const [page, setPage] = useState(0)

  const { data } = usePokemons.useGetPokemons(page, 10)

  return (
    <div className="relative flex h-full w-full flex-col bg-pokedex-screen">
      <header className=" flex h-16 w-full">
        <div
          className="flex w-full items-center justify-end py-3 pr-2"
          onClick={() => setPage(p => p + 1)}
        >
          <svg
            width={32}
            height={32}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
      <div className="space-x-a4 p-a4 flex w-full flex-wrap overflow-auto pr-3 pt-3">
        {data?.map((i: any) => (
          <Card
            key={i.id}
            name={i.name}
            id={i.id}
            types={i.types}
            img={i.img}
          />
        ))}
      </div>
    </div>
  )
}
