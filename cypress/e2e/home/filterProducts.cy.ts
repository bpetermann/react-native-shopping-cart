/// <reference types="cypress" />

describe('Filter products', () => {
  const firstProduct =
    '[data-testid="products"] > :nth-child(1) > :nth-child(1)';
  const invalidSearchTerm = 'abcdefghijklmopqrstuvwxyz';

  beforeEach(() => {
    cy.visitEn();

    cy.get(firstProduct)
      .invoke('text')
      .then((fullText: string) => {
        cy.wrap(fullText.substring(0, 5)).as('product');
      });
  });

  it('should show items matching the filter', () => {
    cy.get<string>('@product').then((value) => {
      cy.get('input').type(value);
      cy.get('[data-testid="products"]').contains(value);
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
