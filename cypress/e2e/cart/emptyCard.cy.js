/// <reference types="cypress" />

describe('Add an item to the cart', () => {
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
    cy.get('[data-testid="cart"]').click();
  });

  it('should show "No items (yet!)" when cart is empty', () => {
    cy.get('[data-testid="cart-modal"] > .r-paddingTop-bijgke').contains(
      'No items (yet!)'
    );
  });
});
