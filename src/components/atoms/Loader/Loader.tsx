import { FC } from 'react'

// Atoms
import { Icons } from '@atoms'

// Utils
import { createTestIDs, getColor, cn } from '@utils'

const ownTestIDs = createTestIDs('Loader', ['root', 'icon', 'text'])

interface ILoaderProps {
  className?: string
  classes?: {
    root?: string
  }
  testIDs?: { [k in keyof typeof ownTestIDs]?: string | undefined }
}

const Loader: FC<ILoaderProps> = ({
  className = '',
  classes = {},
  testIDs = {},
}) => {
  return (
    <div
      className={cn(
        'absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/50',
        className,
        classes.root,
      )}
      data-testid={testIDs.root || ownTestIDs.root}
    >
      <div
        className="animate-spin"
        data-testid={testIDs.icon || ownTestIDs.icon}
      >
        <Icons.loader color={getColor('loader')} size={36} />
      </div>
      <p
        className="mt-5 text-xl font-black"
        data-testid={testIDs.text || ownTestIDs.text}
      >
        Loading
      </p>
    </div>
  )
}

export default Loader
export { ownTestIDs as testIDs }
