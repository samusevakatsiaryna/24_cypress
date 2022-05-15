import "cypress-localstorage-commands";

export default Cypress.Commands.add('postToken', () => {
  cy.request({
    method: 'POST',
    url: 'https://gateway.hydrogen.canopy.rent/renter/auth/login/email', //get from cypress.env.json
    headers: {
        'content-type': 'application/json; charset=utf-8',  
        'accept-version': '2.61',      
    },
    body: {
        email: '03092019dev113@mailforspam.com',
        password: 'a!11111111'
    },
  })
  .its('body')
  .then(body => {
    cy.setLocalStorage("identity_token", body.data.token);
  });
});


describe("postToken", ()=> {
  before(() => {
    cy.postToken();
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  it("should exist identity in localStorage", () => {
    cy.getLocalStorage("identity_token").should("exist");
    cy.getLocalStorage("identity_token").then(token => {
      console.log("Identity token", token);
    });
  });

  it("should still exist identity in localStorage", () => {
    cy.getLocalStorage("identity_token").should("exist");
    cy.getLocalStorage("identity_token").then(token => {
      console.log("Identity token", token);
    });
  });
});