describe('Create and mark_unmark as favorite',function(){
    it('sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=tgjew7')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('sulaiman@gmail.com')
        cy.get('input[type="password"]').type('sulaiman')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed',{timeout:2000}).should('be.visible')
    })

    it('Create a new poste',function(){
        cy.contains('New Post').click()
        //cy.hash().should('include','#/editor')
        cy.location('hash').should('include','#/editor') //same 
        cy.get('input[placeholder="Article Title"]').type('test1')
        cy.get('input[placeholder="What\'s this article about?"]').type('test2')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('test3')
        cy.get('input[placeholder="Enter tags"]').type('test4')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')
    })

    it('Mark_unmark as favorite',function(){
        cy.get('.nav-link').contains('Sulaiman').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.get('.ion-heart').click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back') //cy.go(-1)
        cy.go('forward') //cy.go(1)
    })

})