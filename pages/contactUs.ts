import{expect, Locator, Page} from "@playwright/test"

export class ContactUs {

    readonly page:Page;
    readonly contactUsFormTitle:Locator;
    readonly sendMessageBnt:Locator;
    readonly confirmationAlert:Locator;
    readonly yourEmailField:Locator;
    readonly openContactUsFormButton:Locator;


    constructor (page: Page) {

        this.page=page;
        this.contactUsFormTitle = page.locator( 'h1.SectionHeader__Heading.Heading.u-h1');
        this.sendMessageBnt = page.locator('button.Form__Submit.Button.Button--primary.Button--full');
        this.confirmationAlert = page.locator('p.Alert.Alert--success');
        this.yourEmailField = page.locator('[aria-label="Your email"]');
        this.openContactUsFormButton = page.getByRole('link', { name: 'Contact Contact' });

    }

    async openContactUsForm(){

        await this.page.goto('/');

        await this.openContactUsFormButton.click();

        await expect (this.contactUsFormTitle).toBeVisible();

    }

    async checkContactUsFormContent(){

        await expect (this.page.getByPlaceholder('Your name')).toBeVisible();

        await expect (this.yourEmailField).toBeVisible();
    
        await expect (this.page.getByPlaceholder('Your phone')).toBeVisible();
    
        await expect (this.page.getByPlaceholder('Your message')).toBeVisible();
    
        await expect (this.sendMessageBnt).toBeVisible();

    }

    async checkSuccessFlowContactUsForm(){

        await this.page.locator('[aria-label="Your name"]').fill('Artem');

        await expect (this.page.locator('[aria-label="Your name"]')).toHaveValue('Artem');

        await this.page.locator('[aria-label="Your email"]').fill('test@gmail.com');

        await expect (this.page.locator('[aria-label="Your email"]')).toHaveValue('test@gmail.com');

        await this.page.locator('[aria-label="Your phone"]').fill('0686868686');

        await expect (this.page.locator('[aria-label="Your phone"]')).toHaveValue('0686868686');

        await this.page.locator('[aria-label="Your message"]').fill('test');

        await expect (this.page.locator('[aria-label="Your message"]')).toHaveValue('test');

        await expect (this.page.locator('button:text("Send message")')).toBeEnabled();

        await this.page.locator('button:text("Send message")').click();

        // await expect (this.confirmationAlert).toBeVisible();

    }

    async checkFailFlowContactUsForm(){

        await this.page.locator('[aria-label="Your name"]').fill('Artem');

        await expect (this.page.locator('[aria-label="Your name"]')).toHaveValue('Artem');

        await this.page.locator('button:text("Send message")').click();

        const isInvalid = await this.yourEmailField.evaluate((input: HTMLInputElement) => !input.checkValidity());

        expect(isInvalid).toBeTruthy();

    }



}