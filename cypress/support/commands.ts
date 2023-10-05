/// <reference types="cypress" />

Cypress.Commands.add('visitEn', () => {
  cy.visit(Cypress.env('host'), {
    onBeforeLoad(win) {
      Object.defineProperty(win.navigator, 'language', { value: 'en-EN' });
      Object.defineProperty(win.navigator, 'languages', { value: ['en'] });
      Object.defineProperty(win.navigator, 'accept_languages', {
        value: ['en'],
      });
    },
    headers: {
      'Accept-Language': 'en',
    },
  });
});

Cypress.Commands.add('stubVisit', () => {
  cy.fixture('common').then(({ data, api }) => {
    this.data = data;
    this.request = api;

    cy.intercept(this.request, this.data).as('stubbed');
    cy.visitEn();
  });
});
