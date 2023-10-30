import user from '../fixtures/user.json'

describe('Verify without Authentication', () => {
  beforeEach(() => {
    cy.setCookie('userToken', user.token)
  })
  it('try redirect with auth', () => {
    cy.visit('/login')
    cy.url().should('not.contain', 'login')

    cy.get('h1').should('not.exist')
    cy.get('button[type="submit"]').should('not.exist')
  })
})
