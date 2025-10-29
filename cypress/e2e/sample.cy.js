describe('Sample test', () => {
  it('visits the app root', () => {
    cy.visit('/');
    cy.title().should('be.a', 'string');
  });
});
