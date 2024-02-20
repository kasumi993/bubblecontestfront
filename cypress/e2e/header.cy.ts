// https://on.cypress.io/api

describe('Header exists', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    // Assert that the Header component exists
    cy.get('header').should('exist')

    // Assert that the logo exists within the Header component
    cy.get('header').find('img').should('have.attr', 'src').should('include', 'logo') // replace 'logo' with the actual name or part of the logo source
  })
})
