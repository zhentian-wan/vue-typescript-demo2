// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Increase two times', () => {
    cy.visit('/')
   
    cy.contains('.total', 0)
    cy.get('button')
      .contains('+')
      .click()
      .click()
    cy.contains('.total', 2)  
  })

  it('decrease two times', () => {
    cy.visit('/')

    cy.contains('.total', 0)
    cy.get('button')
      .contains('-')
      .click()
      .click()
    cy.contains('.total', -2)  
  })

  it('increase two times, then decrease two times', () => {
    cy.visit('/')

    cy.contains('.total', 0)
    cy.get('button')
      .contains('+')
      .click()
      .click()
    cy.get('button')
      .contains('-')
      .click()
      .click()
    cy.contains('.total', 0)  
  })

  it('reset to zero', () => {
    cy.visit('/')
   
    cy.contains('.total', 0)
    cy.get('button')
      .contains('+')
      .click()
      .click()

      cy.get('button')
      .contains('c')
      .click()
    cy.contains('.total', 0)  
  })

  it('display overflow', () => {
    cy.visit('/')
   
    cy.contains('.total', 0)
    cy.get('button')
      .contains('+')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click();

    cy.contains('.total', 6).should('have.attr', 'style', 'color: red;')
  })
})
