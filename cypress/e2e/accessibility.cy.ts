describe('accessibility', () => {
  it('accessibility metric should resolve', () => {
    cy.visit('localhost:3000')
    cy.url().then((url) => console.log(url));
    cy.pa11y({})
  })
})