import{expect, Page} from "@playwright/test"

export class HomePage {

    readonly page:Page;
    readonly title:string='The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office';
    readonly checkUrl:string='https://theconnectedshop.com/';

    constructor (page: Page) {

        this.page=page;


    }

    async openSite(){

        await this.page.goto('/');

    }

    async checkTitle(){

        await expect (this.page).toHaveTitle(this.title);

    }

    async checkCurrentUrl(){

        await expect (this.page).toHaveURL(this.checkUrl);

    }



}



