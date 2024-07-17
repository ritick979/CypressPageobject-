///<reference types="cypress"/>
///<reference types="@cypress/xpath" />

describe('radio and checkbox tests', () => {
    it('radio button', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 

        cy.xpath("(//input[@class='radioButton'])[1]").check().should('be.visible').and('be.checked').and('have.attr','type','radio');

        cy.xpath("(//input[@class='radioButton'])[2]").check().should('be.visible').and('be.checked').and('have.attr','type','radio');

        cy.xpath("(//input[@class='radioButton'])[3]").check().should('be.visible').and('be.checked').and('have.attr','type','radio');

    });

    it('checkboxes', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
        
        cy.xpath('//label/input[@type="checkbox"]').check().should('be.checked'); 

        cy.wait(1000);

        cy.xpath('//label/input[@type="checkbox"]').uncheck().should('not.be.checked');
    });
});