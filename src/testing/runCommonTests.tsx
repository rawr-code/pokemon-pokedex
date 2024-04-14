import type { ComponentType, ReactNode } from 'react'
import { screen } from '@testing-library/react'
import render from './render'

interface ICommonProps {
  className?: string
  classes?: {
    root?: string
  }
  testIDs?: {
    root?: string
  }
  children?: ReactNode
}

interface IComponentOptions {
  rootTestID: string
  fragment?: false
}

interface IFragmentOptions {
  rootTestID?: undefined | null
  fragment: true
}

function runCommonTests<T extends Record<string, unknown>>(
  Component: ComponentType<T & ICommonProps>,
  options: IComponentOptions | IFragmentOptions,
): void

function runCommonTests<T extends ICommonProps>(
  Component: ComponentType<T>,
  options: IComponentOptions | IFragmentOptions,
  props: T,
): void

function runCommonTests(
  Component: ComponentType<ICommonProps & Record<string, unknown>>,
  { rootTestID, fragment }: IComponentOptions | IFragmentOptions,
  props: Record<string, unknown> = {},
): void {
  it('should mount component gracefully', () => {
    expect.assertions(rootTestID ? 1 : 0)

    render(<Component {...props} />)

    if (rootTestID) {
      expect(screen.getByTestId(rootTestID)).toBeInTheDocument()
    }
  })

  it('should unmount component gracefully', () => {
    expect.assertions(rootTestID ? 2 : 0)

    const { unmount } = render(<Component {...props} />)

    if (rootTestID) {
      expect(screen.getByTestId(rootTestID)).toBeInTheDocument()
    }

    unmount()

    if (rootTestID) {
      expect(screen.queryByTestId(rootTestID)).toBe(null)
    }
  })

  it('should cleanup any global event listeners on unmount', () => {
    expect.assertions(rootTestID ? 4 : 3)

    const body = document.getElementsByTagName('BODY')[0]

    const add1 = jest.spyOn(window, 'addEventListener')
    const add2 = jest.spyOn(document, 'addEventListener')
    const add3 = jest.spyOn(body, 'addEventListener')

    const remove1 = jest.spyOn(window, 'removeEventListener')
    const remove2 = jest.spyOn(document, 'removeEventListener')
    const remove3 = jest.spyOn(body, 'removeEventListener')

    const { unmount } = render(<Component {...props} />)

    if (rootTestID) {
      expect(screen.getByTestId(rootTestID)).toBeInTheDocument()
    }

    unmount()

    expect(remove1).toHaveBeenCalledTimes(add1.mock.calls.length)
    expect(remove2).toHaveBeenCalledTimes(add2.mock.calls.length)
    expect(remove3).toHaveBeenCalledTimes(add3.mock.calls.length)
  })

  if (!fragment) {
    it('should contain className and classes.root classes in the root', () => {
      expect.assertions(2)

      render(
        <Component
          {...props}
          className={'className'}
          classes={{ root: 'classes.root' }}
        />,
      )

      expect(screen.getByTestId(rootTestID)).toHaveClass('className')
      expect(screen.getByTestId(rootTestID)).toHaveClass('classes.root')
    })

    it('should insert className and classes.root with the correct priority', () => {
      expect.assertions(1)

      render(
        <Component
          {...props}
          className={'className'}
          classes={{ root: 'classes.root' }}
        />,
      )

      const elem = screen.getByTestId(rootTestID)

      const classList = Array.from(elem.classList)

      const a = classList.indexOf('className')
      const b = classList.indexOf('classes.root')

      expect(a).toBeLessThan(b)
    })

    it('should allow overriding data-testid', () => {
      expect.assertions(1)

      render(<Component {...props} testIDs={{ root: 'custom-test-id' }} />)

      expect(screen.getByTestId('custom-test-id')).toBeInTheDocument()
    })
  }

  it('should match snapshot', () => {
    expect.assertions(1)

    const { container } = render(
      <Component
        {...props}
        className={'className'}
        classes={{ root: 'classes.root' }}
      />,
    )

    expect(container).toMatchSnapshot()
  })
}

export default runCommonTests
