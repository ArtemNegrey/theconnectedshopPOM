import{expect, Locator, Page} from "@playwright/test"

export class Login {

    readonly logInFormInput:Locator
    readonly page:Page;
    readonly logInButton:Locator; //hw
    readonly logInTitleSuccess:Locator; //hw
    readonly logInDisabledButton:Locator; //hw

    constructor (page:Page){

        this.page = page;
        this.logInFormInput = page.locator('input.next-input.email-typo-input');
        this.logInButton = page.locator('button.ui-button.ui-button--primary.ui-button--full-width.h-captcha.ui-button--size-large.login-button.ui-button--has-hover-icon'); //hw
        this.logInTitleSuccess = page.locator('h2.ui-heading') //hw
        this.logInDisabledButton = page.locator('button.ui-button.ui-button--primary.ui-button--full-width.h-captcha.ui-button--size-large.login-button.ui-button--has-hover-icon'); //hw

    }

    async openLoginPage(){

        await this.page.goto('https://shopify.com/authentication/52646707372/login?client_id=bab453b6-fd6a-4aec-ac3f-142ceb01bcd4&locale=en&redirect_uri=https%3A%2F%2Fshopify.com%2Fauthentication%2F52646707372%2Foauth%2Fauthorize%3Fclient_id%3Dbab453b6-fd6a-4aec-ac3f-142ceb01bcd4%26locale%3Den%26nonce%3D617c8f81-3bdc-4223-ba7d-bd1d52949c61%26redirect_uri%3Dhttps%253A%252F%252Faccount.theconnectedshop.com%252Fcallback%253Fsource%253Dcore%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bcustomer-account-api%253Afull%26state%3D01JEJR45PQQASN2SP2EMNCVJVE');
    }

    async fillEmail(email:string){

        await this.logInFormInput.fill(email);
        await expect(this.logInFormInput).toHaveValue(email);
    }

    //hw

    async clickSubmitButton(){

        await this.logInButton.click();
        await expect (this.logInTitleSuccess).toBeVisible();
    }

    async checkDisabledSubmitButton(){

        await expect (this.logInDisabledButton).toBeDisabled();

    }

    


}