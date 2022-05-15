import "cypress-localstorage-commands";

class LoginPage {
    navigate() {
        cy.visit('/auth/login?guarantor=false');
    }

    enterEmail(email) {
        cy.get('input[data-testid="sign_in_email"]')
            .clear()
            .type(email);
        return this
    }

    enterPassword(email) {
        cy.get('input[data-testid="sign_in_password"]')
            .clear()
            .type(email);
        return this
    }

    submit() {
        cy.get('div[data-testid="sign_in_button"]').click()
    }

    loginViaApi() {
        cy.request({
            url: 'https://gateway.hydrogen.canopy.rent/renter/auth/login/email',
            method: 'POST',
            headers: {
                'content-type': 'application/json; charset=utf-8',  
                'accept-version': '2.61',      
            },
            body: {
                email: '03092019dev113@mailforspam.com',
                password: 'a!11111111'
              },
        })
        .its("body")
        .then((body) => {
            const token = body.data.token
            console.log(token)
            return token;
        })
    }

}

export default LoginPage;