import React from 'react'
import tw, { css, styled } from 'twin.macro'

export const Backdrop = tw.div`absolute inset-0 z-40 bg-black/50`
export const Wrapper = tw.div`absolute left-1/2 top-1/2 z-50 w-80 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-white`

interface StyledContainerProps {
  color: string
  children: React.ReactNode
}

export const StyledContainer = styled.div<StyledContainerProps>`
  ${({ color }) => css`
    background-color: ${color};
  `}
  ${tw`relative flex h-1/2 w-full items-center justify-end`}
`

export const Container = ({ color, children }: StyledContainerProps) => (
  <StyledContainer color={color}>{children}</StyledContainer>
)

export const Bagde = tw.div`flex items-center rounded-full bg-black/20 px-1 py-1 w-max`

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
