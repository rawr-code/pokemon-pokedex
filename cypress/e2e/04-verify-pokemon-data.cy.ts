import user from '../fixtures/user.json'
import pokemons from '../fixtures/pokemons.json'

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

describe('Verify Pokemon Data', () => {
  beforeEach(() => {
    cy.setCookie('userToken', user.token)
  })
  it('Visit Home', () => {
    cy.visit('/')
    cy.url().should('not.contain', 'login')
    cy.get('h1').should('not.exist')
    cy.get('button[type="submit"]').should('not.exist')

    cy.intercept('/api/**').as('getPokemons')
    cy.wait('@getPokemons')

    for (const pokemon of pokemons) {
      cy.get(`#${pokemon.name}`).should('exist')
      cy.get('p').contains(pokemon.name)
      cy.get('span').contains(pokemon.id)
      cy.get(`img[src="${pokemon.img}"]`).should('exist')
    }

    const randomPokemon = pokemons[randomNumber(0, 9)]
    cy.get(`#${randomPokemon.name}`).should('exist').click()
    cy.get('p').contains(randomPokemon.name)
    cy.get('p').contains(randomPokemon.id)
    cy.get('span').contains(randomPokemon.height)
    cy.get('span').contains(randomPokemon.weight)
  })
})
