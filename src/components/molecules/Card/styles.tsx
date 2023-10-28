import React from 'react'
import tw, { css, styled } from 'twin.macro'

export const Wrapper = tw.div`w-1/2 pb-3 pl-3 h-32`

interface StyledContainerProps {
  color: string
  children: React.ReactNode
}

export const StyledContainer = styled.div<StyledContainerProps>`
  ${({ color }) => css`
    background-color: ${color};
  `}
  ${tw`relative w-full cursor-pointer overflow-hidden rounded-xl p-3 pt-2 h-full`}
`

export const Container = ({ color, children }: StyledContainerProps) => (
  <StyledContainer color={color}>{children}</StyledContainer>
)

export const PokeballWrapper = tw.div`absolute -bottom-4 -right-3 z-10 w-1/2 contrast-100`

export const Header = tw.div`flex items-start justify-between text-white`

export const ContentWrapper = tw.div`relative z-20 mt-2.5 flex justify-between`

export const TypesWrapper = tw.div`flex flex-col space-y-1`

export const Bagde = tw.div`flex items-center rounded-full bg-black/20 px-1 py-1`

export const StyledBadgeContainer = styled.div<StyledContainerProps>`
  ${({ color }) => css`
    background-color: ${color};
  `}
  ${tw`flex h-5 w-5 items-center justify-center rounded-full`}
`

export const BadgeContainer = ({ color, children }: StyledContainerProps) => (
  <StyledBadgeContainer color={color}>{children}</StyledBadgeContainer>
)

export const BadgeText = tw.span`mx-1 text-sm capitalize text-white`

export const ImageWrapper = tw.div`relative flex h-14 w-14 items-center justify-center`
