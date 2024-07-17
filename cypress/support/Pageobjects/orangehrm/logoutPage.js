class Logout_po{
  // this is my logout page class
  // here only the methods wrt logout will be written. 

    logout(){

        cy.get("p[class='oxd-userdropdown-name']").click();
        
        cy.get(".oxd-dropdown-menu").find(".oxd-userdropdown-link").should("have.length",4);

        cy.get("a[href='/web/index.php/auth/logout']").click();

    }


}

export default Logout_po; 