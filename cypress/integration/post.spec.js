/// <reference types="Cypress" />

describe('Conduit - Post', () => {

  beforeEach(() => {
    cy.login('leonardo@email.com', 'senhadoemail');
  });

  it('should create a new post', () => {
    const title = 'Cypress E2E';
    const description = 'JavaScript End to End Testing Framework';
    const body = 'Fast, easy and reliable testing for anything that runs in a browser.';

    cy.contains('New Article').click();
    cy.location('pathname').should('equal', '/editor');
    cy.get('[formcontrolname=title]').type(title);
    cy.get('[formcontrolname=description]').type(description);
    cy.get('[formcontrolname=body]').type(body);
    cy.get('[placeholder="Enter tags"]')
      .type('cypress{enter}')
      .type('integration-test{enter}')
      .type('software-quality{enter}');
    cy.contains('Publish Article').click();
    cy.get('h1').contains(title);
  });

  it('should edit a created post', () => {
    cy.get('.nav-item:nth-child(4) > .nav-link').click(); // Profile link
    cy.location('pathname').should('contains', '/profile');
    cy.get('.article-preview').get('h1').first().click();
    cy.contains('Edit Article').click();
    cy.get('[formcontrolname=body]').clear().type('Edited!');
    cy.contains('Publish Article').click();
  });

});
