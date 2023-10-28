'use client'
import React, { useMemo, useState } from 'react'

// Atoms
import { Icons } from '@atoms'
// Types
interface TextFieldProps extends React.ComponentPropsWithoutRef<'input'> {}

export default function TextField({ type, placeholder }: TextFieldProps) {
  const [showPass, setShowPass] = useState(false)

  const handleInputType = () => {
    setShowPass(p => !p)
  }

  const inputType = useMemo(() => {
    if (!showPass) return 'password'
    return 'text'
  }, [showPass])

  return (
    <div className="flex w-full rounded-xl border-2 border-gray-300">
      <input
        type={inputType}
        placeholder={placeholder}
        className="w-full rounded-xl bg-transparent px-4 py-[9.5px]"
      />
      {type === 'password' && (
        <button className="mr-3" onClick={handleInputType}>
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
