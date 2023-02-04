describe('Visit', () => {
  it('Visit', () => {
    cy.visit('/');
    cy.contains('Создать коробку').should("exist");
  })

})