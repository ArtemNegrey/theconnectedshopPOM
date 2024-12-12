import{ test } from "@playwright/test"
import { HomePage } from "../pages/homePage"
import { Search } from "../pages/search";

test.describe('check search', async()=>{

    let homePage:HomePage;
    let search:Search;

    test.beforeEach(async({page})=> {

        homePage = new HomePage(page);
        search = new Search(page);

        await homePage.openSite();
        await search.openSearchBar();
    })

    test('find exsistent product', async()=>{

        await search.checkExsistProduct();
    })

    test('find nonexsistent product', async()=>{

        await search.checkNonExsistProduct();
    })

})