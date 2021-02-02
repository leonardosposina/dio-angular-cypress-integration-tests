/// <reference types="Cypress" />

describe('Conduit - Profile', () => {
  const email = 'leonardo@email.com';
  const password = 'senhadoemail';

  it('should edit a signed in profile', () => {
    cy.login(email, password);
    cy.get('.nav-item:nth-child(4) > .nav-link').click();
    cy.contains('Edit Profile Settings').click();
    cy.get('[formcontrolname=image]')
      .clear()
      .type('https://thispersondoesnotexist.com/image');
    cy.get('[formcontrolname=username]')
      .clear()
      .type('user-' + new Date().getTime());
    cy.get('[formcontrolname=password]').type(password);
    cy.contains('Update Settings').click();
  });

});
