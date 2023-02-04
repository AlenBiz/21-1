describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.contains('Создать коробку').should("exist");
  })
})