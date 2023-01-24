describe("Qa Test", () => {
  it(
    "Test 1",
    {
      tags: ["@regression"],
    },
    () => {
      cy.visit('https://automationexercise.com/');
      cy.get('a[href*="/login"]').click();
      cy.url().should('contains', 'https://automationexercise.com/login');
      cy.get('form[action*="/login"] input[name*="email"]').click();
      cy.get('form[action*="/login"] input[name*="email"]').type('bhosale.prashant09@gmail.com');
      cy.get('input[name*="password"]').type('Pnb@7890');
      cy.get('button[data-qa*="login-button"]').click();
      cy.url().should('contains', 'https://automationexercise.com/');
      cy.get('a[href*="/logout"]').should('be.visible');
      cy.get('a[href*="/logout"]').click();
      cy.url().should('contains', 'https://automationexercise.com/login');
    },
  );
});
