'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// Assets
import logo from '@assets/images/pokeball.png'

// Atoms
import { TextField, Loader } from '@atoms'

// Hooks
import { useAuth } from '@hooks'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [isLoading, setIsloading] = useState(false)

  const { mutateAsync } = useAuth.useLogin()

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsloading(true)
    const { isOk } = await mutateAsync({
      email,
      password,
    }).finally(() => {
      setIsloading(false)
    })

    if (!isOk) {
      setShowAlert(true)
    } else {
      router.replace('/')
    }
  }

  return (
    <div className="relative flex h-full flex-col items-center justify-center pt-16">
      {isLoading && <Loader />}
      <Image
        src={logo}
        alt="logo"
        className="garayscale absolute left-1/2 top-1/2 mx-auto -mt-12 mb-10 w-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      />
      <h1 className="relative z-30 text-7xl font-bold">Pokedex</h1>
      <form
        className="relative z-30 mx-auto mt-4 flex w-4/6 flex-col items-center justify-center space-y-2 bg-white"
        onSubmit={handleOnSubmit}
      >
        <TextField
          type="email"
          placeholder="admin@gmail.com"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          placeholder="**********"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div className="w-full">
          <button
            type="submit"
            className="mt-2 w-full rounded-2xl border-b-4 border-b-pokedex-border !bg-pokedex-body py-3 text-sm font-bold text-white delay-75 duration-100 hover:bg-pokedex-border"
          >
            LOGIN
          </button>
        </div>
      </form>
      {showAlert && (
        <div
          className="bg-pokaedex-body absolute bottom-0 left-0 right-0 py-4 text-center lg:px-4"
          onClick={() => setShowAlert(false)}
        >
          <div
            className="flex items-center bg-pokedex-border p-2 leading-none text-indigo-100 lg:inline-flex lg:rounded-full"
            role="alert"
          >
            <span className="mr-3 flex rounded-full bg-pokedex-body px-2 py-1 text-xs font-bold uppercase">
              Error
            </span>
            <span className="font-semaibold mr-2 flex-auto text-left">
              Usuario o contraseña incorrecto
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
