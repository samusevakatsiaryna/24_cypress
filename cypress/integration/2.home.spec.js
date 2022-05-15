import IncomePage from "./pageObject/incomePage";

const income = new IncomePage();
describe("Check UI", function() {
    
    
    it("Check Profile Logo", function() {
        
        income.profileIcon().should('be.visible');
    })

    /*I need help. I can't understand why I am logged out after 'passportMenuItem' was clicked.
    As a result erro is returned: Timed out retrying after 4000ms: Expected to find element: div[data-testid="savings_status"], but never found it.
    */
    it("Visit Saving Details page", () => {
        income.passportMenuItem().click();
        income.savingSection().click();
        income.savingItem().click();
        income.savingName().should('be.visible')
    })

})