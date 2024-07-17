describe('Redbus', () => {
    it('test1', () => {
        
        cy.visit('www.redbus.com');  
        //cy.xpath('//div[@class="rdc-login"]').click();
        //cy.xpath('//div[@id="curr_chosen"]').click();
        cy.xpath('//input[@id="onward_cal"]').click(); 
    });
});