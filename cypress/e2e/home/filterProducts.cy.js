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

  it('should not show items that are filtered out', () => {
    cy.get('input').type(invalidSearchTerm);
    cy.contains('No products found');
  });
});
