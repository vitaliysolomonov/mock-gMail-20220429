describe('My First Test', function(){
    it('Finds element, email, assert', function(){
        // cy.visit('http://localhost:3000/')
        // cy.contains('h1', 'gMail')
        // cy.contains('Standup').click()
        // // expect(true).to.equal(false)
        // cy.pause()
        // cy.url().should('include', '3000/')
        // cy.get('.modal')
        //     .should('contain','X')

        cy.visit('http://google.com')
        cy.get('.gLFyf')
            .type('Platform One{enter}')
        cy.url().should('include', 'q=Platform+One')

    })
})