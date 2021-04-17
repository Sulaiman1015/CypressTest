//import login from '../PageObjects/login'
import Login from '../PageObjects/login'

describe("Login",function(){
    const login = new Login()

    it("sign in", function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=tgjew7')
        login.email().type('sulaiman@gmail.com')
        login.password().type('sulaiman')
        login.signin().should('be.visible').click()
    })
})