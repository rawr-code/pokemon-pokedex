'use client'
import Image from 'next/image'

// Atoms
import { TextField } from '@atoms'

// Assets
import logo from '@assets/images/pokeball.png'

export default function LoginPage() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center pt-16">
      <Image
        src={logo}
        alt="logo"
        className="garayscale absolute left-1/2 top-1/2 mx-auto -mt-12 mb-10 w-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      />
      <h1 className="relative z-30 text-7xl font-bold">Pokedex</h1>
      <div className="relative z-30 mx-auto mt-4 flex w-4/6 flex-col items-center justify-center space-y-2 bg-white">
        <TextField placeholder="emmanuel@gmail.com" />
        <TextField type="password" placeholder="**********" />
        <div className="w-full">
          <button className="mt-2 w-full rounded-2xl border-b-4 border-b-pokedex-border bg-pokedex-body py-3 text-sm font-bold text-white delay-75 duration-100 hover:bg-pokedex-border">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  )
}
