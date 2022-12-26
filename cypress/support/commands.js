/// <reference types="cypress" />

Cypress.Commands.add('login',()=>{
    const username=Cypress.env('username')
    const password=Cypress.env('password')
    
    const login=()=>{
        cy.visit('/')
        cy.log(username)
        cy.get('[name="username"]')
            .type(username)
        cy.get('[name="password"]')
            .type(password)

        cy.get('[type="submit"]').click()

        
    }

    cy.session([username,password],login)
    
})



