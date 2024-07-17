import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps" 

Given('user opens the simple form url',()=>{

    cy.visit('https://v1.training-support.net/selenium/simple-form')

})

When('user enters firstname, lastname, email, message',()=>{ 
    cy.get('#firstName').type('Ritik');
    cy.get('#lastname').type('kumar');
    cy.get('#email').type('ritickraj35@gmail.com');
    cy.get('#number').type('8228801179'); 
    cy.xpath('//textarea').type('hello');

})

And('clicks on submit',()=>{
    cy.xpth('//input[@value="submit"]').click();

})

Then('An alert saying successful message has to be displayed',()=>{
    cy.on('window:confirm',(alertmsg)=>{
        expect(alertmsg).to.equal('Thank You for reaching out to us, Ritik kumar');
        return true;
    })

})