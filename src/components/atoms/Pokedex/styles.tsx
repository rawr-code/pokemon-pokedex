import tw, { css, styled } from 'twin.macro'

export const Wrapper = tw.div`relative w-[540px] h-[720px] bg-pokedex-body rounded-[20px] p-8 overflow-hidden border-2 border-pokedex-border`
export const Border = tw.div`relative w-full h-full border-2 border-pokedex-border bg-pokedex-wrapper rounded-b-2xl p-5`
export const Screen = tw.div`w-full h-full rounded-b-md bg-white`

export const BlueCircle = tw.div`
    absolute z-10 w-16 h-16 bg-white border-2 border-pokedex-border rounded-full top-4 mt-0.5 left-10 flex items-center justify-center
    after:content-[""] after:w-12 after:h-12 after:bg-cyan-400 after:border-2 after:border-pokedex-border after:rounded-full
`
export const LightWrapper = tw.div`absolute right-8 top-0 flex`

interface StyledLightProps {
  color: string
}

export const StyledLight = styled.div<StyledLightProps>`
  ${({ color }) => css`
    background-color: ${color};
    &::after {
      background-color: ${color};
    }
  `}
  ${tw`
    relative z-10 h-4 w-4 mt-2 mr-2 border-2 border-pokedex-border rounded-full
    before:content-[""] before:absolute before:w-[90%] before:h-[90%] before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:rounded-full before:bg-black/20
    after:content-[""] after:absolute after:w-[60%] after:h-[60%] after:top-[10%] after:left-[10%] after:rounded-full
    `}
`

export const Light = ({ color }: StyledLightProps) => (
  <StyledLight color={color} />
)

export const SpeakerWrapper = tw.div`absolute top-3 left-1/2 -translate-x-1/2 flex`
export const Speaker = tw.div`bg-pokedex-wrapper w-12 h-2 border-2 border-pokedex-border rounded-md mx-1`

export const CornerBorder = tw.div`
  absolute left-2 top-5
  before:absolute before:left-0 before:top-0 before:bg-pokedex-wrapper before:w-24 before:h-16
  after:absolute after:-rotate-[41deg] after:left-16 after:-top-6 after:bg-pokedex-wrapper after:w-24 after:h-16
`

export const CornerBody = tw.div`
  absolute -left-0.5 top-0
  before:absolute before:left-0 before:-top-4 before:bg-pokedex-body before:w-24 before:h-20 before:border-b-2 before:border-pokedex-border
  after:absolute after:-rotate-[41deg] after:left-16 after:-top-6 after:bg-pokedex-body after:w-24 after:h-16 after:border-b-2 after:border-pokedex-border
`