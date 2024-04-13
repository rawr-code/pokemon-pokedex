// Utils
import { createTestIDs, getColor, cn } from '@utils'
import { FC } from 'react'

const ownTestIDs = createTestIDs('Pokedex', ['root'])

// Types
interface PokedexProps {
  children: React.ReactNode
  className?: string
  classes?: {
    root?: string
  }
  testIDs?: { [k in keyof typeof ownTestIDs]?: string | undefined }
}

const Light = ({ className }: { className: string }) => (
  <div
    className={cn(
      'relative z-10 mr-2 mt-2 h-4 w-4 rounded-full border-2 border-pokedex-border before:absolute before:bottom-0 before:left-1/2 before:h-[90%] before:w-[90%] before:-translate-x-1/2 before:rounded-full before:bg-black/20 before:content-[""] after:absolute after:left-[10%] after:top-[10%] after:h-[60%] after:w-[60%] after:rounded-full',
      className,
    )}
  />
)

const Pokedex: FC<PokedexProps> = ({
  children,
  className = '',
  classes = {},
  testIDs = {},
}) => {
  return (
    <main
      className={cn(
        'flex h-full w-full items-center justify-center',
        className,
        classes.root,
      )}
      data-testid={testIDs.root || ownTestIDs.root}
    >
      <div className="relative h-full w-[540px] overflow-hidden border-pokedex-border bg-pokedex-body pt-8 sm:h-[720px] sm:rounded-[20px] sm:border-2 sm:p-8">
        {/* BlueCircle */}
        <div className='absolute left-7 top-4 z-[60] mt-0.5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-pokedex-border bg-white after:h-12 after:w-12 after:rounded-full after:border-2 after:border-pokedex-border after:bg-cyan-400 after:content-[""] sm:left-10' />
        {/* SpeakerWrapper */}
        <div className="absolute left-1/2 top-3 z-[100] flex -translate-x-1/2">
          <div className="mx-1 h-2 w-12 rounded-md border-2 border-pokedex-border bg-pokedex-wrapper" />
          <div className="mx-1 h-2 w-12 rounded-md border-2 border-pokedex-border bg-pokedex-wrapper" />
        </div>
        {/* LightWrapper */}
        <div className="absolute right-4 top-0 flex sm:right-8">
          <Light className="bg-[#ee0707] after:bg-[#ee0707]" />
          <Light className="bg-[#dde214] after:bg-[#dde214]" />
          <Light className="bg-[#91f913] after:bg-[#91f913]" />
        </div>
        {/* Border */}
        <div className="relative h-full w-full rounded-b-2xl border-pokedex-border bg-pokedex-wrapper pt-5 sm:border-2 sm:p-5">
          <div className="absolute left-0 top-5 z-50 before:absolute before:left-0 before:top-0 before:h-16 before:w-24 before:bg-pokedex-wrapper after:absolute after:-top-6 after:left-16 after:h-16 after:w-24 after:-rotate-[41deg] after:bg-pokedex-wrapper sm:left-2" />
          <div className="absolute -left-1.5 top-0 z-50 before:absolute before:-top-4 before:left-0 before:h-20 before:w-24 before:border-b-2 before:border-pokedex-border before:bg-pokedex-body after:absolute after:-top-6 after:left-16 after:h-16 after:w-24 after:-rotate-[41deg] after:border-b-2 after:border-pokedex-border after:bg-pokedex-body sm:-left-0.5" />
          <div className="h-full w-full overflow-hidden rounded-b-md bg-white">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Pokedex
export { ownTestIDs as testIDs }
