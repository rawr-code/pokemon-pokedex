import user from '../fixtures/user.json'

describe('Verify Authentication', () => {
  it('try redirect without auth', () => {
    cy.visit('/')

    cy.get('h1').contains('Pokedex')
    cy.get('button').contains('LOGIN')
  })
  it('login user', () => {
    cy.visit('/login')
    cy.intercept('POST', '/api/**').as('api')

    const email = cy.get('input[type="email"]')
    const password = cy.get('input[type="password"]')
    const button = cy.get('button[type="submit"]').contains('LOGIN')

    email.type(user.email)

    // type wrong password
    password.type('1234')
    button.click()
    cy.wait('@api')
    cy.get('span').contains('Error').wait(2000).click()

    // type correct password
    password.clear().type(user.password)
    button.click()
    cy.wait('@api')

    cy.get('p').contains('Emmanuel Villegas')
  })
})
