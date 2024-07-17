import Login_po from "../../support/Pageobjects/orangehrm/loginPage"; 
import Link_po from "../../support/Pageobjects/orangehrm/linkPage"; 
import Logout_po from "../../support/Pageobjects/orangehrm/logoutPage"; 



describe('', () => {

    const login_po = new Login_po(); 
    const link_po = new Link_po();
    const logout_po = new Logout_po(); 

    it('test1', () => {
        //Login 
        login_po.EnterURL();
        login_po.Login();

        //clicking on Admin link 

        link_po.linkclick('Admin');

        //Logging out 

        logout_po.logout();
        
    });
});