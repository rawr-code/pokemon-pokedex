'use client'
import Image from 'next/image'

// Atoms
import { Icons } from '@atoms'
import { IconsName } from '@/components/atoms/Icons/Icons'

// Utils
import { getColor } from '@utils'

// Styles
import {
  Container,
  Header,
  PokeballWrapper,
  ContentWrapper,
  Wrapper,
  TypesWrapper,
  ImageWrapper,
  Bagde,
  BadgeContainer,
  BadgeText,
} from './styles'

// Types
interface CardProps {
  key: string // TODO: esto es por un problema con eslint en nextjs 14
  name: string
  id: string
  types: IconsName[]
  img: string
  onClick: () => void
}

export default function Card({ name, id, types, img, onClick }: CardProps) {
  const typeColor = getColor(types[0])

  return (
    <Wrapper onClick={onClick} id={name}>
      <Container color={typeColor}>
        <PokeballWrapper>
          <Icons.pokeball size={96} color="#fff" className="opacity-10" />
        </PokeballWrapper>
        <Header>
          <p className="text-md capitalize">{name}</p>
          <span className="text-xs">{id}</span>
        </Header>
        <ContentWrapper>
          <TypesWrapper>
            {types.map(t => {
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
          </TypesWrapper>
          <ImageWrapper>
            <Image src={img} alt="" className="h-full w-full" fill />
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </Wrapper>
  )
}
