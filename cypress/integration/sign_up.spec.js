/// <reference types="Cypress" />

describe('Conduit - Sign Up', () => {
  const usuario = 'usuario' + (new Date()).getTime();
  const senha = 'senha' + (new Date()).getTime();

  it('should create a new user', () => {
    cy.visit('/register');
    cy.get('[formcontrolname=username]').type(usuario);
    cy.get('[formcontrolname=email]').type(usuario + '@email.com');
    cy.get('[formcontrolname=password]').type(senha);
    cy.get('.btn').click();
    cy.contains('.nav-item:nth-child(4) > .nav-link', usuario);
  });

  it('should not create a new user with a registered email', () => {
    cy.visit('/register');
    cy.get('[formcontrolname=username]').type(usuario);
    cy.get('[formcontrolname=email]').type(usuario + '@email.com');
    cy.get('[formcontrolname=password]').type(senha);
    cy.get('.btn').click();
    cy.location('pathname').should('equal', '/register');
    cy.get('.error-messages > li:nth-child(1)').should('not.be.empty');
  });

});
