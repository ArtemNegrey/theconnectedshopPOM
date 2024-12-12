import{Locator, expect, Page} from "@playwright/test"

export class Header {

    readonly logoContainer: Locator;
    readonly primaryLogo: Locator;
    readonly transparentLogo: Locator;
    readonly countLazy: Locator;
    readonly countWidth: Locator;
    readonly secondaryNavigationList: Locator; //hw
    readonly secondaryNavigationListAccount: Locator; //hw
    readonly secondaryNavigationListSearch: Locator; //hw
    readonly secondaryNavigationListCart: Locator; //hw

    constructor(page: Page){

        this.logoContainer = page.locator('.Header__LogoLink');
        this.primaryLogo = page.locator('img.Header__LogoImage--primary');
        this.transparentLogo = page.locator('img.Header__LogoImage--transparent');
        this.countLazy = page.locator('img.Header__LogoImage');
        this.countWidth = page.locator('img.Header__LogoImage');
        this.secondaryNavigationList = page.locator('ul.HorizontalList.HorizontalList--spacingLoose.hidden-pocket.hidden-lap'); //hw
        this.secondaryNavigationListAccount = page.getByRole('link').filter({hasText: 'Account'}); //hw
        this.secondaryNavigationListSearch = page.getByRole('link').filter({hasText: 'Search'}).nth(0) //hw
        this.secondaryNavigationListCart = page.getByRole('link').filter({hasText: 'Cart ('}) //hw
    }

    async checkLogoContainer(){

        await expect(this.logoContainer).toBeVisible();
        await expect(this.logoContainer).toHaveAttribute('href', '/');
    }

    async checkPrimaryLogo(){

        await expect(this.primaryLogo).toBeVisible();
        await expect(this.primaryLogo).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137');
        await expect(this.primaryLogo).toHaveAttribute('srcset', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137 1x, //theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x@2x.png?v=1705959137 2x');
        await expect(this.primaryLogo).toHaveAttribute('alt', 'The Connected Shop Logo');
    }

    async checkTransparentLogo(){

        await expect(this.transparentLogo).toBeTruthy();
        await expect(this.transparentLogo).toBeVisible();
        await expect(this.transparentLogo).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163');
        await expect(this.transparentLogo).toHaveAttribute('srcset', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163 1x, //theconnectedshop.com/cdn/shop/files/The_Connected_Shop_logo_250x@2x.png?v=1705959163 2x');
        await expect(this.transparentLogo).toHaveAttribute('alt', 'The Connected Shop Logo White');
        await this.primaryLogo.hover();
        await expect(this.transparentLogo).toBeVisible();
    }

    async checkCountlazy(){

        const lazy = await this.countLazy.count ();
        for (let i = 0; i < lazy; i++) {
        await expect(this.countLazy.nth(i)).toHaveAttribute('loading', 'lazy');
        }
    }

    async checkCountWidth(){

        const width = await this.countWidth.count ();
        for (let i = 0; i < width; i++) {
        await expect(this.countWidth.nth(i)).toHaveAttribute('width', '250');
        }
    }

    //hw 69-96

    async checkSecondaryNavigationList(){

        await expect(this.secondaryNavigationList).toBeVisible();
    }

    async checkSecondaryNavigationListAccount(){

        await expect (this.secondaryNavigationListAccount).toBeVisible();
        await expect (this.secondaryNavigationListAccount).toHaveAttribute('href', '/account');
    }

    async checkSecondaryNavigationListSearch(){

        await expect (this.secondaryNavigationListSearch).toBeVisible();
        await expect (this.secondaryNavigationListSearch).toHaveAttribute('href', '/search');
        await expect (this.secondaryNavigationListSearch).toHaveAttribute('data-action', 'toggle-search');
    }

    async checkSecondaryNavigationListCart(){

        await expect (this.secondaryNavigationListCart).toBeVisible();
        await expect (this.secondaryNavigationListCart).toHaveAttribute('href', '/cart');
        await expect (this.secondaryNavigationListCart).toHaveAttribute('data-action', 'open-drawer');
        await expect (this.secondaryNavigationListCart).toHaveAttribute('data-drawer-id', 'sidebar-cart');
        await expect (this.secondaryNavigationListCart).toHaveAttribute('aria-label', 'Open cart');
    }

}