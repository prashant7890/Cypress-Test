describe("Qa Test", () => {
  it(
    "Test 54",
    {
      tags: ["@regression"],
    },
    () => {
      for (let i = 1; i < 4; i += 1) {

        cy.log('waiting for a min : '+i);
        cy.wait(60000);
      }
    },
  );
});
