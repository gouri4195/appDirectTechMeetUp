describe('Login test', () => {
  const username = cypress.env('username');
  const password = cypress.env('password');

  it('Login with valid credentials', () => {
    cy.login(username, password);
  });
});
