describe("login",function(){
    it("sign in", function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=tgjew7')
        cy.fixture('userLoginDetails').then((user) => {
            cy.get('input[type="email"]').type(user.email)
            cy.get('input[type="password"]').type(user.password)
        })
        
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})
