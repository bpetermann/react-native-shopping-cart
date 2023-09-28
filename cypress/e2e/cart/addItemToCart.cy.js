/// <reference types="cypress" />

describe('Add an item to the cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should increase the amount button by one', () => {
    cy.get('[data-testid="add-i1"]')
      .click()
      .then(() => {
        cy.get('[data-testid="cart-amount"]').should('have.text', '1');
      });
  });

  it('should put the selected item to the cart', () => {
    const item = { id: 'i1', name: 'Sandals' };

    cy.get(`[data-testid="add-${item.id}"]`).click();
    cy.get('[data-testid="cart"]')
      .click()
      .then(() => {
        cy.get('[data-testid="cart-modal"]').contains(`${item.name}`);
      });
  });
});
