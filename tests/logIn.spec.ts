import{ test } from "@playwright/test"
import { HomePage } from "../pages/homePage"
import { Login } from "../pages/login";

test.describe('check login', async()=>{

    let homePage:HomePage;
    let login:Login;

    test.beforeEach(async({page})=> {

        homePage = new HomePage(page);
        login = new Login(page);
        await homePage.openSite();
    })

    //hw

    test('log in from site success', async()=>{

        await login.openLoginPage();
        await login.fillEmail('test@gmail.com');
        await login.clickSubmitButton();
    })

    test('log in from site failure', async()=>{

        await login.openLoginPage();
        await login.fillEmail('test@gmail');
        await login.checkDisabledSubmitButton();
    })

})