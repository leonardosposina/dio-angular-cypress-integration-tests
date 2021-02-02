/// <reference types="Cypress" />

describe('Conduit - Sign Out', () => {
  const email = 'leonardo@email.com';
  const password = 'senhadoemail';

  it('should sign out a user', () => {
    cy.login(email, password);
    cy.contains('Settings').click();
    cy.url().should('contain', '/settings');
    cy.contains('Or click here to logout').click();
  });

});
