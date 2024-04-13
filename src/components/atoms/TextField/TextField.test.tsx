import { fireEvent, screen } from '@testing-library/react'
import { runCommonTests, render } from '@utils'

// Component
import TextField, { testIDs } from './TextField'

describe('Atom | TextField', () => {
  runCommonTests(TextField, { rootTestID: testIDs.root })

  it('should render the correct TextField', () => {
    expect.assertions(2)

    render(<TextField type="password" />)

    const elem = screen.getByTestId(testIDs.root)
    const input = screen.getByTestId<HTMLInputElement>(testIDs.input)

    fireEvent.change(input, { target: { value: '23' } })

    expect(input.value).toBe('23')
    expect(elem).toBeVisible()
  })

  it('show password', () => {
    expect.assertions(3)

    render(<TextField type="password" />)

    const elem = screen.getByTestId(testIDs.root)
    const input = screen.getByTestId<HTMLInputElement>(testIDs.input)
    const button = screen.getByTestId<HTMLButtonElement>(testIDs.action)

    expect(elem).toBeVisible()

    fireEvent.click(button)

    expect(input).toHaveAttribute('type', 'text')

    fireEvent.click(button)

    expect(input).toHaveAttribute('type', 'password')
  })
})
