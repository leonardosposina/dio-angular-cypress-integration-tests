/// <reference types="Cypress" />

describe('Conduit - Sign In', () => {

  it('should login with a registered user', () => {
    cy.login('leonardo@email.com','senhadoemail');
    cy.get('.nav-item:nth-child(4) > .nav-link').click();
    cy.get('.btn:nth-child(5)').click();
    cy.url().should('contain', '/settings');
  });

  it('should not login with wrong e-mail or password', () => {
    cy.login('wrong-email@email.com', 'wrong-password');
    cy.get('.error-messages > li')
      .should('contain', 'email or password is invalid');
  });

});
