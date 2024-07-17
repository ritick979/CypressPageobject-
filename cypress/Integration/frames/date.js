
describe('datepicker', () => {
    it('test1', () => {
        
        cy.visit('https://jqueryui.com/datepicker/') 

        cy.frameLoaded('.demo-frame');

        //cy.iframe().contains('Date').type('07/07/2024{enter}'); 
          
        cy.iframe().xpath('//input[@type="text"]').type('31/03/2003{enter}');
    });
});