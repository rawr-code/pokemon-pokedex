import Image from 'next/image'

// Atoms
import { Icons } from '@atoms'
import { IconsName } from '@/components/atoms/Icons/Icons'

// Utils
import { getColor } from '@utils'

// Types
interface CardProps {
  name: string
  id: string
  types: IconsName[]
  img?: string
  onClick: () => void
}

export default function Card({ name, id, types, img, onClick }: CardProps) {
  const backgroundColor = getColor(types[0])

  return (
    <div
      className="relative h-full w-full cursor-pointer overflow-hidden rounded-xl p-3 pt-2"
      onClick={onClick}
      id={name}
      style={{ backgroundColor }}
    >
      {/* Pokeball */}
      <div className="absolute -bottom-4 -right-3 z-10 w-1/2 contrast-100">
        <Icons.pokeball size={96} color="#fff" className="opacity-10" />
      </div>
      {/* Header */}
      <div className="flex items-start justify-between text-white">
        <p className="text-md capitalize">{name}</p>
        <span className="text-xs">{id}</span>
      </div>
      {/* Content */}
      <div className="relative z-20 mt-2.5 flex justify-between">
        {/* Types */}
        <div className="flex flex-col space-y-1">
          {types.map(t => {
            const Icon = Icons[t]
            return (
              <div
                key={t}
                className="flex w-max items-center rounded-full bg-black/20 px-1 py-1"
              >
                <div
                  className="flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ backgroundColor }}
                >
                  <Icon size={12} color="#fff" />
                </div>
                <span className="mx-1 text-sm capitalize text-white">{t}</span>
              </div>
            )
          })}
        </div>
        {/* Image */}
        <div className="relative flex h-14 w-14 items-center justify-center">
          {img ? (
            <Image src={img} alt="" className="h-full w-full" fill />
          ) : null}
        </div>
      </div>
    </div>
  )
}
