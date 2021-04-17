describe("working with plugins",function () {
    it("files upload",function () {
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')

        //upload file
        const fileName = 'SimpleFile.pdf';
        cy.fixture(fileName).then(fileContent => {
            cy.get('[type="file"]').attachFile({fileContent, fileName, MimeType: 'application/pdf'});
        })
        cy.get('[type="submit"]').click()
        cy.contains("You've upload a file. Your notes on the file were: ")
    })
})