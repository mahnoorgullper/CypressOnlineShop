import LoginPage from "../../pages/LoginPage"
import mainPage from "../../pages/mainPage";

describe("Shopping app Login and Logout feature test cases", () => {
  const loginObj = new LoginPage();
  const mainPageObj = new mainPage();
  const baseURL = Cypress.env("baseUrl");

  beforeEach(function () {
    cy.visit(baseURL);
  });

  it.only("Verify login with standard user", () => {
    loginObj.enterUsername("standard_user");
    loginObj.enterPassword("secret_sauce");
    loginObj.clickLogin();
    
 mainPageObj.elements.cart().should("be.visible");
    mainPageObj.elements.openMenuButton().click();
    mainPageObj.elements.logoutLink().click();
    loginObj.elements.usernameInput().should("be.visible");

  });

  it("Verify login with problem user", () => {
    loginObj.enterUsername("problem_user");
    loginObj.enterPassword("secret_sauce");
    loginObj.clickLogin();
    mainPageObj.elements.cart().should("be.visible");
  });

  it("Verify login with performance glitch user", () => {
    loginObj.enterUsername("performance_glitch_user");
    loginObj.enterPassword("secret_sauce");
    loginObj.clickLogin();
    mainPageObj.elements.cart().should("be.visible");

  });

  it("Verify login with error user", () => {
    loginObj.enterUsername("error_user");
    loginObj.enterPassword("secret_sauce");
    loginObj.clickLogin();
    mainPageObj.elements.cart().should("be.visible");
  });

  it("Verify login with locked-out user", () => {
    loginObj.enterUsername("locked_out_user");
    loginObj.enterPassword("secret_sauce");
    loginObj.clickLogin();
    loginObj.elements
      .error()
      .should(
        "have.text",
        "Epic sadface: Sorry, this user has been locked out."
      );
  });

  it("Verify login with invalid username and password ", () => {
    loginObj.enterUsername("invalid_user");
    loginObj.enterPassword("test@11334");
    loginObj.clickLogin();
    loginObj.elements
      .error()
      .should(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });
  it("Verify login with blank username and password ", () => {
    loginObj.enterUsername("  ");
    loginObj.enterPassword("  ");
    loginObj.clickLogin();
    loginObj.elements
      .error()
      .should(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });
});