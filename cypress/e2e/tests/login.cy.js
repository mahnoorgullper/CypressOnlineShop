import LoginPage from "../../pages/LoginPage"
import mainPage from "../../pages/mainPage";
import { USERS } from "../../support/data/users";


describe("Shopping app Login and Logout feature test cases", () => {
  const loginObj = new LoginPage();
  const mainPageObj = new mainPage();
  const baseURL = Cypress.env("baseUrl");

  beforeEach(function () {
    cy.visit(baseURL);
  });

  it("Verify login with standard user", () => {
  loginObj.enterUsername(USERS.userCreds.userName);
  loginObj.enterPassword(USERS.userCreds.password);
  loginObj.clickLogin();
  
    mainPageObj.elements.cart().should("be.visible");
    mainPageObj.clickLogout();
    loginObj.elements.usernameInput().should("be.visible");

  });
   it("Verify login with visual user", () => {
  loginObj.enterUsername(USERS.userCreds.visualUser);
  loginObj.enterPassword(USERS.userCreds.password);
  loginObj.clickLogin();
  
    mainPageObj.elements.cart().should("be.visible");
    mainPageObj.clickLogout();
    loginObj.elements.usernameInput().should("be.visible");

  });

  it("Verify login with problem user", () => {
  loginObj.enterUsername(USERS.userCreds.problemUser);
  loginObj.enterPassword(USERS.userCreds.password);
    loginObj.clickLogin();
    mainPageObj.elements.cart().should("be.visible");
  });

  it("Verify login with performance glitch user", () => {
  loginObj.enterUsername(USERS.userCreds.glitchUserName);
  loginObj.enterPassword(USERS.userCreds.password);
    loginObj.clickLogin();
    mainPageObj.elements.cart().should("be.visible");

  });

  it("Verify login with error user", () => {
  loginObj.enterUsername(USERS.userCreds.errorUserName);
  loginObj.enterPassword(USERS.userCreds.password);
    loginObj.clickLogin();
    mainPageObj.elements.cart().should("be.visible");
  });

  it("Verify login with locked-out user", () => {
  loginObj.enterUsername(USERS.userCreds.lockedUserName);
  loginObj.enterPassword(USERS.userCreds.password);
    loginObj.clickLogin();
    loginObj.elements
      .error()
      .should(
        "have.text",
        "Epic sadface: Sorry, this user has been locked out."
      );
  });

  it("Verify login with invalid username and password ", () => {
    loginObj.enterUsername(USERS.userCreds.invalidUserName);
  loginObj.enterPassword(USERS.userCreds.inValidPassword);
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
