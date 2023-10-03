/// <reference types="cypress" />

describe('Add an item to the cart', () => {
  const firstProduct =
    '[data-testid="products"] > :nth-child(1) > :nth-child(1)';

  beforeEach(() => {
    cy.dropby();
  });

  it('should increase the amount button by one', () => {
    cy.get(firstProduct)
      .contains('Add to Cart')
      .click()
      .click()
      .then(() => {
        cy.get('[data-testid="cart-amount"]').should('have.text', '2');
      });
  });

  it('should put the selected item to the cart', () => {
    cy.get(firstProduct)
      .invoke('text')
      .then((fullText: string) => {
        cy.wrap(fullText.substring(0, 5)).as('product');
      });

    cy.get(firstProduct).contains('Add to Cart').click();

    cy.get('[data-testid="cart"]').click().should('be.visible');

    cy.get('@product').then((value) => {
      cy.get('[data-testid="cart-modal"]')
        .invoke('text')
        .then((modalText) => {
          expect(modalText).to.contain(value);
        });
    });
  });
});
