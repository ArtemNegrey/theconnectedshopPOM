import{ test } from "@playwright/test"
import { HomePage } from "../pages/homePage"
import { Header } from "../pages/header";

test.describe('check home page', async()=>{

    let homePage:HomePage;
    let header:Header;

    test.beforeEach(async({page})=> {

        homePage = new HomePage(page);
        header = new Header(page);
        await homePage.openSite();
    })

    test('check url and title', async()=>{

        await homePage.checkCurrentUrl();
        await homePage.checkTitle();
    })

    test('check logo elements', async()=>{

        await header.checkLogoContainer();
        await header.checkPrimaryLogo();
        await header.checkTransparentLogo();
        await header.checkCountlazy();
        await header.checkCountWidth();
    })

    //hw

    test('check secondary navigation', async()=>{

        await header.checkSecondaryNavigationList();
        await header.checkSecondaryNavigationListAccount();
        await header.checkSecondaryNavigationListSearch();
        await header.checkSecondaryNavigationListCart();
    })


})