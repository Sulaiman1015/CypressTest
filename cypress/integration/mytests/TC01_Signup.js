describe("login",function(){
    it("sign up", function(){
        cy.visit('https://react-redux.realworld.io/#/register?_k=7ob171')
        cy.get('input[type="text"]').type('sulaiman')
        cy.get('input[type="email"]').type('sulaiman@gmail.com')
        cy.get('input[type="password"]').type('sulaiman')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})