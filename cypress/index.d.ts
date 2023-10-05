/// <reference types="cypress" />

type Product = {
  name: string;
  id: string;
  description: string;
  price: number;
  amount: number;
  category: string;
};

declare namespace Cypress {
  interface Chainable<Subject> {
    visitEn(): Chainable<void>;
  }
}
