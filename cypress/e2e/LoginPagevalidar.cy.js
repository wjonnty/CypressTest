import login from '../support/pages/login'
/// <reference types="cypress" />

describe('Login Validate', () => {
  it('Login with wrong values', () => {
    login.invalidLogin()
  });
  it('Login with right values', () => {
    cy.login()
    cy.visit('/web/index.php/dashboard/index')
    cy.get
  });
})

describe('Logout', () => {
  beforeEach(() => {
    cy.login()
    
  });
  it('Logout test', () => {
    
    login.logout()
    
  
    
  })
})

