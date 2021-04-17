describe('Create and mark_unmark as favorite', function () {

    Cypress.config('pageLoadTimeout', 5000)
    before(function () {
        cy.SignIn()
    })

    it('Create a new poste', function () {
        //cy.contains('New Post').click()
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        //cy.hash().should('include','#/editor')
        cy.location('hash').should('include', '#/editor')
        cy.get('form').within(($form) => {
            // cy.get('input[placeholder="Article Title"]').type('test1')
            cy.get('input').first().type('test1')
            // cy.get('input[placeholder="What\'s this article about?"]').type('test2')
            cy.get('input').eq(1).type('test2')
            // cy.get('textarea[placeholder="Write your article (in markdown)"]').type('test3')
            cy.get('textarea').type('test3')
            // cy.get('input[placeholder="Enter tags"]').type('test4')
            cy.get('input').last().type('test4')
            cy.contains('Publish Article').click()
        })
        cy.url().should('include', 'article')
    })

    it('Mark_unmark as favorite', function () {
        //cy.get('.nav-link').contains('Sulaiman').click()
        cy.get('ul.navbar-nav').children().contains('Sulaiman').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.btn-primary').first().then(($fav) => {
            const favCount = $fav.text()
            expect(parseInt(favCount)).to.eq(1)
        }).click()
        cy.reload()
        cy.contains('No articles are here... yet.',{ timeout: 4000 }).should('be.visible')
        cy.go('back') //cy.go(-1)
        //cy.go('forward') //cy.go(1)
    })

})