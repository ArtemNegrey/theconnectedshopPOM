import{ test } from "@playwright/test"
import { HomePage } from "../pages/homePage"
import { ContactUs } from "../pages/contactUs";

test.describe('check contact us form', async()=>{

    let homePage:HomePage;
    let contactUs:ContactUs;

    test.beforeEach(async({page})=> {

        homePage = new HomePage(page);
        contactUs = new ContactUs (page);
        await homePage.openSite();
        await contactUs.openContactUsForm();
    })


    test('check ContactUs form content', async()=>{

        await contactUs.checkContactUsFormContent();
    })

    test('check Success Flow ContactUs Form', async()=>{

        await contactUs.checkSuccessFlowContactUsForm();
    })

    test('check Fail Flow ContactUs Form', async()=>{

        await contactUs.checkFailFlowContactUsForm();
    })

})