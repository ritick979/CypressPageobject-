describe('automation', () => {
    it('test', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('//nav[@class="subnav"]["Apparel & accessories"]').click();
        //cy.get('//nav[@class="subnav"]');
        cy.get('//img[@title="T-shirts"]');
        //cy.get('//a[@id="category_68"]').click();
    });
});