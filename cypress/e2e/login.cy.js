describe('Login test', () => {
  const username = 'Admin';
  const password = 'admin123';

  it('visits the app root', () => {
    cy.login(username, password);
  });
});
