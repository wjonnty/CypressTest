import { ELEMENT as el } from "./element";
/// <reference types="cypress" />
class login{
    invalidLogin(){
        cy.visit(el.loginURL)
        cy.get(el.username).type('aH!9 ')
        cy.get(el.password).type('0 ')
        cy.get(el.loginButton).click()
        cy.get(el.errorAlert).should('be.visible')
    }

    logout(){
        cy.visit('/web/index.php/dashboard/index')
        cy.get(el.userDropdown).click()  
        cy.get('a').contains('Logout').click()
        cy.get('[name="username"]').should('be.visible')
    }

    



}

export default new login();