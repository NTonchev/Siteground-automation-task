import { Page } from '@playwright/test';
import { DashboardElements } from '../Elements/dashboard.elements';

export class DashboardPage
{
    public readonly dashboardElements: DashboardElements;
    
    constructor(private readonly page: Page)
    {
        this.dashboardElements = new DashboardElements(page);
    }

     /**
     * Navigates to the Dashboard page
     */
    async NavigateToDashboardPage()
    {
        await this.page.goto(DashBoardURL)
    }

    /**
     * Selects menu from the side bar and if needed a sub menu
     * @param menuName The name of the menu in the side bar
     * @param subMenuName The name of the sub menu
     */
    async SelectMenuFromNavigationBar(menuName: string, subMenuName?: string)
    {
        const parentMenu = this.dashboardElements.MenuOption(menuName);
        await parentMenu.click();

        if(subMenuName)
        {
            const subMenu = this.dashboardElements.SubMenuOption(subMenuName);
            await subMenu.click();
        }
    }

    /**
     * Clicks on the domains drop down
     */
    async ClickDomainDropDown()
    {
        await this.dashboardElements.DomainDropDown.click();
    }

    /**
     * Select domain from the domains drop down by name
     * @param domainName the name of the domain you want to select
     */
    async SelectDomainFromDropdown(domainName: string) 
    {
        const domain = this.dashboardElements.DomainDropDownOptions.filter({ hasText: `${domainName}` });
        await domain.click();
    }

    /**
     * Enters user name in the UserName field
     * @param userName the user name you want to have
     */
    async EnterUserName(userName: string)
    {
        await this.dashboardElements.UserNameField.fill(userName)
    }

    /**
     * Clicks generate password button
     */
    async ClickGeneratePasswordButton()
    {
        await this.dashboardElements.GeneratePasswordButton.click();
    }

    /**
     * Clicks the create button
     */
    async ClickCreateButton()
    {
        await this.dashboardElements.CreateButton.click();
    }
}

const DashBoardURL = 'https://sqqadevs.com/?demoToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiUSIsImxhc3RfbmFtZSI6IkEiLCJlbWFpbCI6InEuYUBzaXRlZ3JvdW5kLmNvbSIsImRvbWFpbiI6IiIsImxhbmciOiJlbiIsImV4cCI6MTk3MDEyNTA3NzJ9.DJBXphJ-h7zrtYDzz9FumCVejgSygtPObaTT5Zki8w8';
