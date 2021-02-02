/// <reference types="Cypress" />

describe('Conduit - Feed', () => {
  const email = 'leonardo@email.com';
  const password = 'senhadoemail';

  it('should favorite the first post of the Global Feed', () => {
    cy.login(email, password);
    cy.get('.nav-pills > .nav-item:nth-child(2) > .nav-link').click(); // Global feed
    cy.get('app-article-preview:nth-child(1) .btn').click();
  });

});
