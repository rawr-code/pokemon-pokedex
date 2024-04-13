import Image from 'next/image'

// Atoms
import { Icons } from '@atoms'

// Models
import { pokemonModels } from '@models'

// Utils
import { getColor } from '@utils'

// Types
interface ModalProps {
  pokemon: pokemonModels.PokemonInfo
  onClose: () => void
}

export default function Modal({ pokemon, onClose }: ModalProps) {
  const backgroundColor = getColor(pokemon.types[0])

  return (
    <div className="absolute inset-0 z-40 bg-black/50">
      <div className="absolute left-1/2 top-1/2 z-50 w-80 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-white">
        {/* Container */}
        <div
          className="relative flex h-1/2 w-full items-center justify-end"
          style={{
            backgroundColor,
          }}
        >
          {/* Icon */}
          <div className="m-3 opacity-10">
            <Icons.pokeball size={176} color="white" />
          </div>
          {/* Info */}
          <div className="absolute left-0 top-0 m-4 flex w-3/5 items-center text-white">
            <button
              onClick={onClose}
              className="mr-3 flex items-center justify-center rounded-full p-2 hover:bg-white/20"
            >
              <svg width={20} height={20} viewBox="0 0 30 30" fill="none">
                <path
                  d="M13.9 23.967L4.633 14.7a1.016 1.016 0 01-.233-.333.978.978 0 01-.067-.367c0-.133.022-.256.067-.367.044-.11.122-.222.233-.333l9.3-9.3a.904.904 0 01.667-.267c.267 0 .5.1.7.3.2.2.3.434.3.7 0 .267-.1.5-.3.7L7.733 13h16.534c.288 0 .527.094.716.283a.972.972 0 01.284.717.972.972 0 01-.284.717.971.971 0 01-.716.283H7.733l7.6 7.6c.178.178.267.4.267.667 0 .266-.1.5-.3.7-.2.2-.433.3-.7.3a.96.96 0 01-.7-.3z"
                  fill="#fff"
                />
              </svg>
            </button>
            <div className="w-full">
              <p className="w-full text-ellipsis text-2xl font-bold capitalize">
                {pokemon.name}
              </p>
              <p className="font-bolad text-sm">{pokemon.id}</p>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="relative flex h-8 items-center justify-center">
          <div className="relative mb-28 h-40 w-40">
            {pokemon.img && <Image src={pokemon.img} alt="" fill />}
          </div>
        </div>
        <div className="absolute right-0 top-0 m-4 flex flex-col items-end space-y-1">
          {pokemon.types.map(t => {
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
        <div className="flex items-end divide-x px-3 py-5">
          <div className="flex w-1/3 flex-col items-center justify-center">
            <div className="flex h-14 items-center justify-center">
              <Icons.weight size={20} color="black" />
              <span className="ml-2 text-lg">{pokemon.weight} kg</span>
            </div>
            <p className="text-sm">Weight</p>
          </div>
          <div className="flex w-1/3 flex-col items-center justify-center">
            <div className="flex h-14 items-center justify-center">
              <Icons.straighten size={20} color="black" />
              <span className="ml-2 text-lg">{pokemon.height} m</span>
            </div>
            <p className="text-sm">Height</p>
          </div>
          <div className="flex w-1/3 flex-col items-center justify-center">
            <div className="flex h-14 flex-col items-center justify-center text-sm">
              {pokemon.abilities.map(a => (
                <span key={a} className="text-ellipsis">
                  {a}
                </span>
              ))}
            </div>
            <p className="text-sm">Moves</p>
          </div>
        </div>
      </div>
      {/* <Backdrop>
        <Wrapper>
          <Container color={typeColor}>
            <div className="m-3 opacity-10">
              <Icons.pokeball size={176} color="white" />
            </div>
            <div className="absolute left-0 top-0 m-4 flex w-3/5 text-white">
              <button onClick={onClose}>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 30 30"
                  fill="none"
                  className="mr-2 mt-1.5"
                >
                  <path
                    d="M13.9 23.967L4.633 14.7a1.016 1.016 0 01-.233-.333.978.978 0 01-.067-.367c0-.133.022-.256.067-.367.044-.11.122-.222.233-.333l9.3-9.3a.904.904 0 01.667-.267c.267 0 .5.1.7.3.2.2.3.434.3.7 0 .267-.1.5-.3.7L7.733 13h16.534c.288 0 .527.094.716.283a.972.972 0 01.284.717.972.972 0 01-.284.717.971.971 0 01-.716.283H7.733l7.6 7.6c.178.178.267.4.267.667 0 .266-.1.5-.3.7-.2.2-.433.3-.7.3a.96.96 0 01-.7-.3z"
                    fill="#fff"
                  />
                </svg>
              </button>
              <div className="w-full">
                <p className="w-full text-ellipsis text-2xl font-bold capitalize">
                  {pokemon.name}
                </p>
                <p className="font-bolad text-sm">{pokemon.id}</p>
              </div>
            </div>
          </Container>
          <div className="relative flex h-8 items-center justify-center">
            <div className="relative mb-28 h-40 w-40">
              {pokemon.img && <Image src={pokemon.img} alt="" fill />}
            </div>
          </div>
          <div className="absolute right-0 top-0 m-4 flex flex-col items-end space-y-1">
            {pokemon.types.map(t => {
              const Icon = Icons[t]
              return (
                <Bagde key={t}>
                  <BadgeContainer color={getColor(t)}>
                    <Icon size={12} color="#fff" />
                  </BadgeContainer>
                  <BadgeText>{t}</BadgeText>
                </Bagde>
              )
            })}
          </div>
          <div className="flex items-end divide-x px-3 py-5">
            <div className="flex w-1/3 flex-col items-center justify-center">
              <div className="flex h-14 items-center justify-center">
                <Icons.weight size={20} color="black" />
                <span className="ml-2 text-lg">{pokemon.weight} kg</span>
              </div>
              <p className="text-sm">Weight</p>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center">
              <div className="flex h-14 items-center justify-center">
                <Icons.straighten size={20} color="black" />
                <span className="ml-2 text-lg">{pokemon.height} m</span>
              </div>
              <p className="text-sm">Height</p>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center">
              <div className="flex h-14 flex-col items-center justify-center text-sm">
                {pokemon.abilities.map(a => (
                  <span key={a} className="text-ellipsis">
                    {a}
                  </span>
                ))}
              </div>
              <p className="text-sm">Moves</p>
            </div>
          </div>
        </Wrapper>
      </Backdrop> */}
    </div>
  )
}
