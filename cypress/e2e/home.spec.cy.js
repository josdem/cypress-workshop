/// <reference types="cypress" />

describe("Loading home page", () => {
  before(function () {
    cy.fixture("test").then((data) => {
      this.data = data
    })
  })

  it("validates page title", function () {
    cy.visit(this.data.vetlogUrl)
    cy.title().should('eq', 'Vetlog')
  })
})
