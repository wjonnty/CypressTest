import { ELEMENT as el } from "./element";
/// <reference types="cypress" />
class login{
    invalidLogin(){
        cy.visit(el.loginURL)
        cy.get(el.$username).type('aH!9 ')
        cy.get(el.$password).type('0 ')
        cy.get(el.$loginButton).click()
        cy.get(el.$errorAlert).should('be.visible')
    }

    logout(){
        cy.visit(el.dashboardPageURL)
        cy.get(el.$userDropdown).click()
        cy.intercept('/web/index.php/api/v2/dashboard/employees/**').as('home')
        cy.get('a').contains('Logout').click()
        cy.wait('@home') 
        cy.get('[name="username"]').should('be.visible')
    }

    login(){
        const login=()=>{
                    cy.visit('/')
            
                    cy.get(el.$username)
                        .type(el.adminLogin)
                    cy.get(el.$password)
                        .type(el.adminPassword)
            
                    cy.get('[type="submit"]').click()
                
                        
                }
            
        cy.session([el.adminLogin,el.adminPassword],login)
        }

    



}

export default new login();