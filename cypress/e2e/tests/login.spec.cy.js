import LoginPage from "../../pages/LoginPage"

describe("Shopping app Login and Logout feature test cases", () => {
  const loginObj = new LoginPage();
  const baseURL = Cypress.env("baseUrl");

  beforeEach(function () {
    cy.visit(baseURL);
  });

  it("Verify login with standard user", () => {
    loginObj.enterUsername("standard_user");
    loginObj.enterPassword("secret_sauce");
    loginObj.clickLogin();
    
  });

  
});