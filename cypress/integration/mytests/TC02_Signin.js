describe("login",function(){
    it("sign in", function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=tgjew7')
        cy.get('input[type="email"]').type('sulaiman@gmail.com')
        cy.get('input[type="password"]').type('sulaiman')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})