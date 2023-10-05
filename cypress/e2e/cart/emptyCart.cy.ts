/// <reference types="cypress" />

describe('Add an item to the cart', () => {
  beforeEach(() => {
    cy.stubVisit();
    cy.get('[data-testid="cart"]').click();
  });

  it('should show "No items (yet!)" when cart is empty', () => {
    cy.get('[data-testid="cart-modal"] > .r-paddingTop-bijgke').contains(
      'No items (yet!)'
    );
  });
});
