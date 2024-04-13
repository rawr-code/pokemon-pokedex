import type { RenderResult } from '@testing-library/react'
import { render as _render } from '@testing-library/react'
import type { FC, ReactNode } from 'react'

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>
}

const render = (ui: ReactNode): RenderResult => {
  return _render(ui, { wrapper: Providers })
}

export default render
