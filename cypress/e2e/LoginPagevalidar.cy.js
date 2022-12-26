import login from '../support/pages/login'
import admin from '../support/pages/admin'
/// <reference types="cypress" />

describe('Login Validate', () => {
  it('Login with wrong values', () => {
    login.invalidLogin()
  });
  it('Login with right values', () => {
    login.login()
    cy.visit('/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
    
  });
})

describe('Logout and Admin validation', () => {
  beforeEach(() => {
    login.login()
    
  });

  it('Admin page validation and add user test', () => {
    admin.adminPageValidation()
    admin.addUser()
    
  });



  it('Logout test', () => {
    login.logout()
    
  })
})

