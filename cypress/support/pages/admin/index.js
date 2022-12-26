import { ELEMENT as el } from "./element";
import { faker } from '@faker-js/faker';
/// <reference types="cypress" />


class admin{
    adminPageValidation(){
        cy.visit(el.adminURL);
        cy.get(el.topBar).contains('Admin').should('be.visible')
    }

    addUser(){
        let userProject=faker.name.fullName()

        cy.get('button').contains('Add').click()
        cy.get('h6').contains('Add User').should('be.visible')
        cy.get(el.userRole).click()
        cy.get('[role="option"]').contains('Admin').click()
        cy.get(el.statusSelect).click()
        cy.get('[role="option"]').contains('Enabled').click()
        cy.get(el.passwordInput).type('aB123$.8')
        cy.get(el.confirmPasswordInput).type('aB123$.8');
        cy.get(el.usernameInput).type(userProject);
        cy.get(el.employeeInput).type('a')
        cy.intercept({
            method: 'GET',
            url: '/web/index.php/api/v2/pim/employees?nameOrId=**',
        }).as('api')
        cy.wait('@api')
        cy.get('.oxd-autocomplete-option > span').first().click()
        cy.get(el.saveButton).click();
        cy.get(el.savedCard).should('be.visible')
        cy.intercept('/web/index.php/admin/viewSystemUsers').as('systemusers')
        cy.wait('@systemusers');
        cy.get('.orangehrm-container').should('contain',userProject)
    }

}















export default new admin();