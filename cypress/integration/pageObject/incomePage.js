require('cypress-xpath')

class IncomePage {

    documentInstead() {
        return cy.xpath(`//div[text()='Or upload documents instead']`).click();
       
    }

    uploadDoc() {
        return cy.xpath(`//div[text()='Upload documents']`);
    }

    reconnectBank() {
        return cy.xpath('div[data-testid="id-profile-icon"]');
    }

    profileIcon() {
        return cy.get('div[data-testid="id-profile-icon"]');
    }

    passportMenuItem() {
        return cy.get('div[data-testid="menu_footer_rent_passport"]');
        
    }

    savingName() {
        return cy.get('div[data-testid="saving_name"]');
    }

    savingSection() {
        return cy.get('div[data-testid="savings_status"]');
    }
    savingItem() {
        return cy.get('div[data-testid="income_continue_source_button"]');
    }




}


export default IncomePage;