/// <reference types="Cypress" />

describe('Conduit - Follow', () => {
  const username = 'user-' + (new Date()).getTime();
  const password = 'pass-' + (new Date()).getTime();

  it('should follow a user', () => {
    cy.visit('/register', { timeout: 10000 });
    cy.get('[formcontrolname=username]').type(username);
    cy.get('[formcontrolname=email]').type(username + '@email.com');
    cy.get('[formcontrolname=password]').type(password);
    cy.get('.btn').click();
    cy.wait(10000);
    cy.visit('/profile/testecypress');
    cy.contains('Follow').click();
  });

});
