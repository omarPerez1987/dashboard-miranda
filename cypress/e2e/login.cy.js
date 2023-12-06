describe("Comprobación de login", () => {
  it("Tiene que dirigir a /home/dashboard después de meter los datos correctos", () => {
    cy.visit("http://localhost:5173/");

    cy.get("input[type=email]").type("test@test.com");

    cy.get("input[type=password]").type("9999");

    cy.get("button[type=submit]").click();
    cy.url().should("include", "/home/dashboard");
  });
  it("Tiene que quedarse en Login al introducir los datos incorrectos", () => {
    cy.visit("http://localhost:5173/");

    cy.get("input[type=email]").type("test@test.com");

    cy.get("input[type=password]").type("2323");

    cy.get("button[type=submit]").click();
    cy.url().should("include", "/");
  });
});
