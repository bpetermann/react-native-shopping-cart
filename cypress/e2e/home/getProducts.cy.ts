/// <reference types="cypress" />

describe('Check if products are loaded correctly', () => {
  beforeEach(function _() {
    cy.stubVisit();
  });

  it('should call the API on page visit', function _() {
    cy.wait('@stubbed');
  });
});
