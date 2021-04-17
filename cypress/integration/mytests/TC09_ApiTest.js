
describe('API Testing',() => {

    Cypress.config('baseUrl','http://dummy.restapiexample.com/api/v1')

   it('GET - read',() => {
       cy.request('GET','/employees').then((response) => {
           expect(response).to.have.property('status',200)
           expect(response.body).to.not.have.null
           expect(response.body.data).to.have.length(24)
       })
   })
   it('POST - create',() => {
        const item = {"name":"test","salary":"123","age":"23"}
        cy.request('POST','/create',item)
        .its('body')
        .its('data')
        .should('include',{"name":"test","salary":"123","age":"23"})
    })
    it('PUT - update',() => {
        const item = {"name":"test","salary":"123","age":"23"}
        cy.request('PUT','/update/0',item)
        
    })
})