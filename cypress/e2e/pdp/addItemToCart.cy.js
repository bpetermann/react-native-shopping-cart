/// <reference types="cypress" />

describe('Add an item to the cart', () => {
  const firstProduct =
    '[data-testid="products"] > :nth-child(1) > :nth-child(1)';

  beforeEach(() => {
    cy.visit('/', {
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

    cy.get(firstProduct)
      .invoke('text')
      .then((fullText) => {
        cy.wrap(fullText.substring(0, 5)).as('product');
      });

    cy.get(firstProduct).find('[data-testid="img"]').click();
  });

  it('should put the selected item to the cart', () => {
    cy.contains('Add to Cart').click({ force: true });

    cy.get('[data-testid="cart"]')
      .should('be.visible')
      .click({ force: true, multiple: true });

    cy.get('@product').then((value) => {
      cy.get('[data-testid="cart-modal"]').contains(value);
    });
  });

  it('should increase the amount button by one', () => {
    cy.contains('Add to Cart')
      .click({ force: true })
      .then(() => {
        cy.get('[data-testid="cart-amount"]').should('have.text', '1');
      });
  });
});
