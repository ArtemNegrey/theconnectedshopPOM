import{expect, Locator, Page} from "@playwright/test"

//hw

export class Search {

    readonly page:Page;
    readonly checkExistProduct :Locator
    readonly checkNonExistentProduct: Locator;
    readonly existProductName :string = 'Smart Light Switch'; 
    readonly nonExistentProductName:string = 'testtesttest';
    readonly existProductSuccess:Locator;
    readonly checkSearchOpening: Locator;

    constructor (page:Page){

        this.page = page;
        this.checkExistProduct = page.locator('input.Search__Input');
        this.existProductSuccess = page.getByRole('link').filter({hasText: 'Smart Light Switch'}).nth(0);
        this.checkNonExistentProduct = page.locator('div.Segment__Content').first();
        this.checkSearchOpening = page.locator('[data-action="toggle-search"]').first();
    }

    async openSearchBar(){

        await this.checkSearchOpening.click();
        await expect (this.checkExistProduct).toBeVisible();

    }

    async checkExsistProduct(){

        await this.checkExistProduct.click();
        await expect (this.checkExistProduct).toBeVisible();
        await expect (this.checkExistProduct).toHaveAttribute('placeholder','Search...')
        await this.checkExistProduct.fill(this.existProductName);
        await expect (this.checkExistProduct).toHaveValue(this.existProductName);
        await expect (this.existProductSuccess).toHaveText(this.existProductName);
    }

    async checkNonExsistProduct(){

        await this.checkExistProduct.fill(this.nonExistentProductName);
        await expect (this.checkExistProduct).toHaveValue(this.nonExistentProductName);
        await expect (this.checkNonExistentProduct).toHaveText('No results could be found');
    }
}