describe('Dynamic dropdown', () => {
    it('test1', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 

        cy.get('.ui-autocomplete-input').type('in');

        cy.get('.ui-menu-item').each(($option)=>{

            if($option.text()=='India'){

                cy.wrap($option).click();
            }
        })
    });

    it.only('dynamic test2', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
        
        cy.get('#autocomplete').type('an');

        cy.get('.ui-menu-item').contains('Poland').click();
    });
});