/// <reference types="cypress" />

describe('Register a user', () => {
  beforeEach(function () {
    cy.fixture('common').then(({ guest }) => {
      this.user = guest;
    });
    cy.stubVisit();

    cy.get('[data-testid="auth-link"]').click();
    cy.get('[data-testid="auth-switch"]')
      .click()
      .then(() => {
        cy.get('[data-testid="registration-email"]').as('emailInput');
        cy.get('[data-testid="registration-password"]').as('passwordInput');
        cy.get('[data-testid="registration-confirm"]').as('confirmInput');
        cy.get('[data-testid="registration-submit"]').as('submit');
      });
  });

  it('should show an error if the passwords do not match', function () {
    cy.get('@emailInput').type(this.user.validEmail);
    cy.get('@passwordInput').type(this.user.validPassword);
    cy.get('@confirmInput').type(this.user.invalidPassword);
    cy.get('@submit')
      .click()
      .then(() => {
        cy.contains('Passwords do not match');
      });
  });

  it('should show an error if the password is too short', function () {
    cy.get('@emailInput').type(this.user.validEmail);
    cy.get('@submit')
      .click()
      .then(() => {
        cy.contains('Your password must be at least 6 characters long');
      });
  });

  it('should show an error if no email is provided', () => {
    cy.get('@submit')
      .click()
      .then(() => {
        cy.contains('Please enter a valid email address');
      });
  });

  it('should show an error if the email is invalid', function () {
    cy.get('@emailInput').type(this.user.invalidEmail);
    cy.get('@submit')
      .click()
      .then(() => {
        cy.contains('Please enter a valid email address');
      });
  });

  it('should redirect in case of a successful registration', function () {
    cy.get('@emailInput').type(this.user.validEmail);
    cy.get('@passwordInput').type(this.user.validPassword);
    cy.get('@confirmInput').type(this.user.validPassword);

    cy.get('@submit')
      .click()
      .then(() => {
        cy.get('input').should(
          'have.attr',
          'placeholder',
          `👋 Welcome, ${this.user.validEmail.split('@')[0]}!`
        );
      });
  });
});
