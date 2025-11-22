
import "@testing-library/cypress/add-commands";
import { USERS } from "../support/data/users";

class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginBtn: () => cy.get('[data-test="login-button"]'),
    error: () => cy.get('[data-test="error"]'),
  
  
  };

  enterUsername(username) {
    this.elements.usernameInput().clear().type(username);
  }

  enterPassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  loginAsStandard() {
    this.login(USERS.userCreds.userName, USERS.userCreds.password);
  }
}
  
export default LoginPage;
