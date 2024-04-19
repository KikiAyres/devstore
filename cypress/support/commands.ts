/// <reference types="cypress" />
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands


declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>
   
  }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/')

  cy.get('input[name=q]').type(query).parent('form').submit()
})
