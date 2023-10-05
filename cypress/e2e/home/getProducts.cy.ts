/// <reference types="cypress" />

describe('Check if products are loaded correctly', () => {
  beforeEach(function _() {
    cy.fixture('common').then(({ data, api }) => {
      this.data = data;
      this.request = api;
    });
  });

  it('should call the API on page visit', function _() {
    cy.intercept(this.request, this.data).as('stubbed');
    cy.visitEn();

    cy.contains('Sandals');
  });
});
