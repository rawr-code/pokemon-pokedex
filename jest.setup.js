import '@testing-library/jest-dom'

jest.mock('url-template', () => {
  return {
    parseTemplate: () => ({
      expand: () => '',
    }),
  }
})
