/// <reference types="Cypress" />

describe('Conduit - Comment', () => {
  const email = 'leonardo@email.com';
  const password = 'senhadoemail';

  it('should comment on a post', () => {
    const comment = 'It is just a comment...';

    cy.login(email, password);
    cy.contains('Global Feed').click();
    cy.get('.preview-link').first().click();
    cy.get('.form-control').type(comment);
    cy.contains('Post Comment').click();
    cy.contains(comment);
  });

});
