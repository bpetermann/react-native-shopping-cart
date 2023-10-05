/// <reference types="cypress" />

describe('Add an item to the cart', () => {
  const firstProduct =
    '[data-testid="products"] > :nth-child(1) > :nth-child(1)';

  beforeEach(() => {
    cy.visitEn();

    cy.get(firstProduct)
      .invoke('text')
      .then((fullText) => {
        cy.wrap(fullText.substring(0, 5)).as('product');
      });

    cy.get(firstProduct).find('[data-testid="img"]').click();
  });

  it('should put the selected item to the favorites', () => {
    cy.get('[data-testid="favorite-btn"]').click();

    cy.get('[data-testid="favorites"]')
      .should('be.visible')
      .click({ force: true, multiple: true });

    cy.get('@product').then((value) => {
      cy.get('[data-testid="favs-modal"]')
        .invoke('text')
        .then((modalText) => {
          expect(modalText).to.contain(value);
        });
    });
  });

  it('should increase the favorites amount by one', () => {
    cy.get('[data-testid="favorite-btn"]').click();
    cy.get('[data-testid="favorites"]').click({ multiple: true, force: true });
    cy.get('[data-testid="favs-modal"]').contains('Favorites (1)');
  });
});
