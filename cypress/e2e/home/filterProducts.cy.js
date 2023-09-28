/// <reference types="cypress" />

describe('Filter products', () => {
  const invalidSearchTerm = 'abcdefghijklmopqrstuvwxyz';

  beforeEach(() => {
    cy.visit('/');
  });

  it('should show items matching the filter', () => {
    cy.contains('Sandals').then(() => {
      cy.get('input').type('Sandals');
      cy.contains('Sandals');
    });
  });

  it('should show zero search on invalid search term', () => {
    cy.get('input')
      .type(invalidSearchTerm)
      .then(() => {
        cy.contains(`did not match any entries`);
      });
  });
});
