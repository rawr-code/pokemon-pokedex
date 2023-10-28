'use client'
import Image from 'next/image'

// Atoms
import { Pokedex } from '@atoms'

// Assets
import logo from '@assets/images/pokeball.png'

export default function Home() {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <Pokedex>
        <div className="relative flex h-full items-center justify-center">
          <Image
            src={logo}
            alt="logo"
            className="garayscale absolute left-1/2 top-1/2 mx-auto w-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
          />
        </div>
      </Pokedex>
    </main>
  )
}
