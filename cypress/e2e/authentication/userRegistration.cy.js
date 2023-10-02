/// <reference types="cypress" />

describe('Register a user', () => {
  const validEmail = 'john.doe@gmail.com';
  const invalidEmail = 'john.doe.gmail.com';
  const validPassword = '123456!';
  const invalidPassword = '123';

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

  it('should show an error if the passwords do not match', () => {
    cy.get('@emailInput').type(validEmail);
    cy.get('@passwordInput').type(validPassword);
    cy.get('@confirmInput').type(invalidPassword);
    cy.get('@submit')
      .click()
      .then(() => {
        cy.contains('Passwords do not match');
      });
  });

  it('should show an error if the password is too short', () => {
    cy.get('@emailInput').type(validEmail);
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

  it('should show an error if the email is invalid', () => {
    cy.get('@emailInput').type(invalidEmail);
    cy.get('@submit')
      .click()
      .then(() => {
        cy.contains('Please enter a valid email address');
      });
  });

  it('should redirect in case of a successful registration', () => {
    cy.get('@emailInput').type(validEmail);
    cy.get('@passwordInput').type(validPassword);
    cy.get('@confirmInput').type(validPassword);

    cy.get('@submit')
      .click()
      .then(() => {
        cy.get('input').should(
          'have.attr',
          'placeholder',
          `👋 Welcome, ${validEmail.split('@')[0]}!`
        );
      });
  });
});
