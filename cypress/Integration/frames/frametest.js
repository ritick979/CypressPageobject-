/// <reference types="cypress"/>
///<reference types="@cypress/xpath" /> 
describe('Ritick', () => {
    it('frame test', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')  

        cy.frameLoaded('#courses-iframe');

        cy.iframe().contains('Blog').click();
    });
});