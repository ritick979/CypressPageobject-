///<reference types="cypress"/>

describe('OrangeHRM Suite', () => {
    it('Login Test', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 

        // I have to write locator for username and enter my username.

        cy.get("Input[name='username']").type('Admin');

        // Write locators for password and enter my password. 

        cy.get("Input[name='password']").type('admin123');

        // Locators for clicking on Login button. 

        cy.get("button[type='submit']").click(); 
    });

    it('facebook login', () => { 

        cy.visit('https://www.facebook.com/login'); 

        cy.get("#email").type('ritickraj35@gamil.com');

        cy.get("#pass").type('paritick45&'); 

        cy.get("#loginbutton").click();
        
     });

     it('using xpath test', () => {
        
        cy.visit('https://the-internet.herokuapp.com/login'); 

        //Xpath for user name 

        cy.xpath('//input[@id="username"]').type('ahfjgjgg'); 

        //Xpath for password 

        cy.xpath('//input[@id="password"]').type('askhfj'); 

        //Xpath for login button. 

        cy.xpath('//button[@class="radius"]').click();

     });

});