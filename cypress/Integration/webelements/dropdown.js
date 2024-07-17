describe('Dropdown tests', () => {
    it('test1', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 

        cy.get('#dropdown-class-example').select('option2').should('have.value','option2');

        cy.get('#dropdown-class-example').select('option1').should('have.value','option1');

        cy.get('#dropdown-class-example').select('option3').should('have.value','option3');

        cy.xpath('//select[@id="dropdown-class-example"]').select('').should('have.value',"");

        
    });

    it('select - by Index', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 

        cy.get('#dropdown-class-example').select(2).should('have.value','option2');

        cy.get('#dropdown-class-example').select(3).should('have.value','option3'); 

        cy.get('#dropdown-class-example').select(1).should('have.value','option1');

    });
    

});