/// <reference types="cypress"/>
///<reference types="@cypress/xpath" />

describe('web Table', () => {
    it('test1', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); 

        cy.xpath('//table[@name="courses"]/tbody/tr[6]/td[3]').should('include.text','Learn JMETER from Scratch - (Performance + Load) Testing Tool');

    });
    
    it('test2', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); 
      
        cy.xpath('//table[@name="courses"]/tbody/tr[9]/td').each(($ele)=>{

            if($ele.text().includes('Python')){

                cy.wrap($ele).next().then((num)=>{

                    cy.log(num.text())
                })
            }
        })
    });    

});