describe("login",function(){
    it("log in", function(){
        cy.visit('https://qa3.vytrack.com/')
        cy.get('input[type="text"]').type('user1')
        cy.get('input[type="password"]').type('UserUser123')
        cy.get('.btn').contains('Log in').should('be.visible').click()
    })
})