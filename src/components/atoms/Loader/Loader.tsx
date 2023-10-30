'use client'
// Atoms
import { Icons } from '@atoms'

// Utils
import { getColor } from '@utils'

export default function Loader() {
  return (
    <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/50">
      <div className="animate-spin">
        <Icons.loader color={getColor('loader')} size={36} />
      </div>
      <p className="mt-5 text-xl font-black">Cargando</p>
    </div>
  )
}
