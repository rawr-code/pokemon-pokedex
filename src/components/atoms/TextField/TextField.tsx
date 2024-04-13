import { FC, useMemo, useState } from 'react'

// Atoms
import { Icons } from '@atoms'

// Utils
import { createTestIDs, cn } from '@utils'

const ownTestIDs = createTestIDs('TextField', ['root', 'input', 'action'])

// Types
interface TextFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  className?: string
  classes?: {
    root?: string
  }
  testIDs?: { [k in keyof typeof ownTestIDs]?: string | undefined }
}

const TextField: FC<TextFieldProps> = ({
  type,
  placeholder,
  required,
  value,
  onChange,
  className = '',
  classes = {},
  testIDs = {},
}) => {
  const [showPass, setShowPass] = useState(false)

  const handleInputType = () => {
    setShowPass(p => !p)
  }

  const inputType = useMemo(() => {
    if (type === 'password') {
      if (!showPass) return 'password'
      return 'text'
    }
    return type
  }, [showPass, type])

  return (
    <div
      className={cn(
        'flex w-full rounded-xl border-2 border-gray-300',
        className,
        classes.root,
      )}
      data-testid={testIDs.root || ownTestIDs.root}
    >
      <input
        required={required}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl bg-transparent px-4 py-[9.5px]"
        data-testid={testIDs.input || ownTestIDs.input}
      />
      {type === 'password' && (
        <button
          type="button"
          className="mr-3"
          onClick={handleInputType}
          data-testid={testIDs.action || ownTestIDs.action}
        >
          {showPass ? (
            <Icons.eyeClose size={24} color="stroke-pokedex-body" />
          ) : (
            <Icons.eye size={24} color="stroke-pokedex-body" />
          )}
        </button>
      )}
    </div>
  )
}

export default TextField
export { ownTestIDs as testIDs }
