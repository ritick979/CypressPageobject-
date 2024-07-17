
describe('Mouse action test', () => {
    it('Right click', () => {
        
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html') 

        cy.xpath("//*[.='right click me']").rightclick();

        cy.get('.context-menu-list.context-menu-root').contains('Quit').click();

        cy.xpath('//button').dblclick();
    });

    it('Hover test', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
        
        cy.get('#mousehover').invoke('show')

        cy.contains('Top').click({force:true});

        cy.url().should('include','top');
    });  
    
    it('Hover test - 2', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
        
        cy.get('#mousehover').trigger('mousehover')

        cy.contains('Top').click({force:true});

        cy.url().should('include','top');
    });    
});