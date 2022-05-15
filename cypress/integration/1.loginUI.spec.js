
import LoginPage from "./pageObject/loginPage";
import IncomePage from "./pageObject/incomePage";
import credentials from '../fixtures/credentials.json'


describe("Login feature", function() {

    it("Login UI", function() {
        const login = new LoginPage();
        login.navigate();
        cy.fixture('credentials.json').as('credentials')
        login.enterEmail(credentials.email);
        login.enterPassword(credentials.password);
        login.submit();
        cy.url().should('be.equal', 'https://selva.hydrogen.canopy.rent/home')
    })

})