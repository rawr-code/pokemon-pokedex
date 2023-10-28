'use client'
import React, { useMemo, useState } from 'react'

// Types
interface TextFieldProps extends React.ComponentPropsWithoutRef<'input'> {}

export default function TextField({
  type,
  placeholder,
  children,
}: TextFieldProps) {
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
        data-lpignore
      />
      {type === 'password' && (
        <button className="mr-3" onClick={handleInputType}>
          {showPass ? (
            <svg width={24} height={24} viewBox="0 0 32 30" fill="none">
              <path
                className="fill-pokedex-body"
                fillRule="evenodd"
                d="M30.212 2.16c.52-.521.552-1.335.069-1.817-.483-.483-1.296-.452-1.817.069l-26.88 27.05c-.52.52-.55 1.334-.068 1.817.482.482 1.296.451 1.816-.07l13.44-13.524 13.44-13.526ZM15.649 3.991c2.232 0 4.462.519 6.503 1.354L20.534 6.98c-1.58-.556-3.245-.884-4.884-.884-3.254 0-6.693 1.407-9.333 3.31-1.313.946-2.391 1.989-3.13 2.99-.755 1.023-1.082 1.9-1.082 2.536 0 .635.327 1.512 1.082 2.535.739 1.002 1.817 2.044 3.13 2.99.17.124.345.245.522.363l-1.505 1.521a20.09 20.09 0 0 1-.247-.175c-1.453-1.047-2.7-2.238-3.594-3.449C.615 17.528 0 16.212 0 14.933c0-1.28.615-2.595 1.493-3.785.894-1.212 2.14-2.402 3.594-3.449 2.892-2.084 6.752-3.707 10.563-3.707Zm0 3.767c1.195 0 2.322.292 3.314.81l-1.582 1.598a5.069 5.069 0 0 0-6.479 6.548L9.32 18.314a7.174 7.174 0 0 1 6.329-10.555Zm6.41 3.951-1.6 1.619a5.069 5.069 0 0 1-6.363 6.43l-1.602 1.619a7.174 7.174 0 0 0 9.566-9.667ZM15.65 23.77c-1.55 0-3.142-.32-4.67-.86L9.36 24.543c1.992.819 4.148 1.33 6.288 1.33 3.867 0 7.726-1.556 10.612-3.619 1.448-1.035 2.686-2.221 3.571-3.449.875-1.213 1.467-2.552 1.467-3.872 0-1.32-.592-2.66-1.467-3.872-.885-1.228-2.123-2.415-3.571-3.45l-.085-.06-1.504 1.519c.123.083.245.168.365.254 1.3.93 2.362 1.961 3.088 2.968.737 1.021 1.07 1.932 1.07 2.64 0 .71-.333 1.62-1.07 2.642-.726 1.006-1.787 2.038-3.088 2.968-2.613 1.867-6.052 3.227-9.387 3.227Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg width={24} height={24} viewBox="0 0 33 32" fill="none">
              <g clipPath="url(#a)">
                <path
                  className="stroke-pokedex-body"
                  strokeWidth={2}
                  d="M16.086 26.323c7.4 0 15-5.993 15-10.162 0-4.169-7.6-10.161-15-10.161-7.259 0-15 6.227-15 10.161 0 3.935 7.741 10.162 15 10.162Z"
                />
                <path
                  className="fill-pokedex-body"
                  d="M16.086 19.548a3.387 3.387 0 1 0 0-6.774 3.387 3.387 0 0 0 0 6.774Z"
                />
                <path
                  className="stroke-pokedex-body"
                  strokeWidth={2}
                  d="M16.085 22.452a6.29 6.29 0 1 0 0-12.581 6.29 6.29 0 0 0 0 12.58Z"
                />
              </g>
            </svg>
          )}
        </button>
      )}
    </div>
  )
}
