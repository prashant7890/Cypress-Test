describe("Qa Test", () => {
  it(
    "Test 2",
    {
      tags: ["@regression"],
    },
    () => {
      for (let i = 1; i < 2; i += 1) {
        cy.log('waiting for a min : '+i);
        cy.wait(60000);
      }
    },
  );
});
