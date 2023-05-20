/// <reference types="cypress" />

describe("Loading home page", () => {
  before(function () {
    cy.fixture("test").then((data) => {
      this.data = data
    })
  })

  beforeEach(() => {
    cy.eyesOpen({
      appName: "Vetlog Application",
      testName: Cypress.currentTest.title,
    })
  })

  it("validates page title", function () {
    cy.visit(this.data.vetlogUrl)
    cy.eyesCheckWindow({
      tag: "Home Page",
      target: "window",
      fully: false,
    })
    cy.title().should("eq", this.data.expectedTitle)
  })

  afterEach(() => {
    cy.eyesClose()
  })
})
