import { FC } from 'react'
import Image from 'next/image'

// Atoms
import { Icons } from '@atoms'
import { IconsName } from '@/components/atoms/Icons/Icons'

// Utils
import { createTestIDs, getColor, cn } from '@utils'

const ownTestIDs = createTestIDs('Card', [
  'root',
  'pokeball',
  'header',
  'content',
  'types',
  'image',
])

// Types
interface ICardProps {
  name: string
  id: string
  types: IconsName[]
  img?: string
  onClick: () => void

  className?: string
  classes?: {
    root?: string
  }
  testIDs?: { [k in keyof typeof ownTestIDs]?: string | undefined }
}

const Card: FC<ICardProps> = ({
  name,
  id,
  types,
  img,
  onClick,
  className = '',
  classes = {},
  testIDs = {},
}) => {
  const backgroundColor = getColor(types[0])

  return (
    <div
      className={cn(
        'relative h-full w-full cursor-pointer overflow-hidden rounded-xl p-3 pt-2',
        className,
        classes.root,
      )}
      onClick={onClick}
      id={name}
      style={{ backgroundColor }}
      data-testid={testIDs.root || ownTestIDs.root}
    >
      {/* Pokeball */}
      <div
        className="absolute -bottom-4 -right-3 z-10 w-1/2 contrast-100"
        data-testid={testIDs.pokeball || ownTestIDs.pokeball}
      >
        <Icons.pokeball size={96} color="#fff" className="opacity-10" />
      </div>
      {/* Header */}
      <div
        className="flex items-start justify-between text-white"
        data-testid={testIDs.header || ownTestIDs.header}
      >
        <p className="text-md capitalize">{name}</p>
        <span className="text-xs">{id}</span>
      </div>
      {/* Content */}
      <div
        className="relative z-20 mt-2.5 flex justify-between"
        data-testid={testIDs.content || ownTestIDs.content}
      >
        {/* Types */}
        <div
          className="flex flex-col space-y-1"
          data-testid={testIDs.types || ownTestIDs.types}
        >
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
        <div
          className="relative flex h-14 w-14 items-center justify-center"
          data-testid={testIDs.image || ownTestIDs.image}
        >
          {img ? (
            <Image src={img} alt="" className="h-full w-full" fill />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Card
export { ownTestIDs as testIDs }
