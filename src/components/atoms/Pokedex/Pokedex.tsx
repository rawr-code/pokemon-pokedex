import React from 'react'
import tw from 'twin.macro'

// Styles
import {
  BlueCircle,
  Border,
  Screen,
  CornerBody,
  CornerBorder,
  Light,
  LightWrapper,
  Speaker,
  SpeakerWrapper,
  Wrapper,
} from './styles'

// Types
interface PokedexProps {
  children: React.ReactNode
}

export default function Pokedex({ children }: PokedexProps) {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <Wrapper>
        <BlueCircle />
        <SpeakerWrapper>
          <Speaker />
          <Speaker />
        </SpeakerWrapper>

        <LightWrapper>
          <Light color="#ee0707" />
          <Light color="#dde214" />
          <Light color="#91f913" />
        </LightWrapper>
        <Border>
          <CornerBorder />
          <CornerBody />
          <Screen>{children}</Screen>
        </Border>
      </Wrapper>
    </main>
  )
}
