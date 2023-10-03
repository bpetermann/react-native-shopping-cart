/// <reference types="cypress" />

describe('Login a existing user', () => {
  beforeEach(function () {
    cy.fixture('users/registered').then((user) => {
      this.user = user;
    });
    cy.dropby();

    cy.get('[data-testid="auth-link"]')
      .click()
      .then(() => {
        cy.get('[data-testid="login-email"]').as('emailInput');
        cy.get('[data-testid="login-password"]').as('passwordInput');
        cy.get('[data-testid="login-submit"]').as('submit');
      });
  });

  it('should redirect in case of a successful login', function () {
    cy.get('@emailInput').type(this.user.email);
    cy.get('@passwordInput').type(this.user.password);

    cy.get('@submit')
      .click()
      .then(() => {
        cy.get('input').should(
          'have.attr',
          'placeholder',
          `👋 Welcome, ${this.user.email.split('@')[0]}!`
        );
      });
  });
});
