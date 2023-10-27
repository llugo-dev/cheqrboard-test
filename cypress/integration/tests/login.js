/// <reference types="cypress" />


describe('Login to Cheqrboard', () => {

    const userCredentials = {
        username: 'test2@test.com',
        password: 'password'
    };

    it('Enter the username and password', () => {

        cy.visit('https://development.sqrl.zcl.lol/');

        cy.get('#email')
            .should('not.contain.text')
            .type(userCredentials.username);

        cy.get('input[type="password"]')
            .should('not.contain.text')
            .type(userCredentials.password);

        cy.get('.p-button-label').click();
        cy.wait(2000);

    });

});



