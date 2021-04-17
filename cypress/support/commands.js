import 'cypress-file-upload';

Cypress.Commands.add("SignIn", () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=tgjew7')
    cy.title().should('eq', 'Conduit')
    cy.location('protocol').should('eq', 'https:')
    cy.get('form').within(($form) => {
        //that only search elements within 'form'
        cy.get('input[type="email"]').type('sulaiman@gmail.com')
        cy.get('input[type="password"]').type('sulaiman')
        cy.root().submit()
    })
    cy.contains('Your Feed', { timeout: 2000 }).should('be.visible')

})