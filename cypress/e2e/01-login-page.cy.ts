describe('Login Page', () => {
  it('should visit login page', () => {
    cy.visit('/login')

    cy.get('h1').contains('Pokedex')
    cy.get('input[type="email"]').should('have.value', '')
    cy.get('input[type="password"]').should('have.value', '')
    cy.get('button[type="submit"]').contains('LOGIN')
  })
})
