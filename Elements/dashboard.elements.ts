import { Page, Locator } from "@playwright/test";

export class DashboardElements
{
    constructor(private readonly page: Page){}

    // Made those two to methods because i saw every single menu shares the same structure and have uniqe data-e2e. The methods can be reused for any menu not just Email > Account
    MenuOption(menuName: string): Locator {return this.page.locator(`li[data-e2e="${menuName}"]`)}
    SubMenuOption(subMenuName: string): Locator {return this.page.getByRole('link', {name: subMenuName})}

    get EmailAccountHeader() {return this.page.locator('h1:has-text("Email Accounts")')}
    get EmailForwardersHeader() {return this.page.locator('h1:has-text("Email Forwarders")')}

    get DomainDropDown() {return this.page.locator('div[data-e2e="domain-select-wrapper"]')}
    get DomainDropDownOptions() {return this.DomainDropDown.locator('div.sg-dropdown__option')}

    get UserNameField() {return this.page.locator('input[data-e2e="text-input-name"]')}
    get PasswordField() {return this.page.locator('input[data-e2e="form-password-password"]')}
    get GeneratePasswordButton() {return this.page.locator('button[data-e2e="password-generate"]:visible')}
    get CreateButton() {return this.page.locator('button[data-e2e="create-box-submit"]')} // this one is also generic / shared between the screens thats why i reuse it in both tests

    get NotificationBox() {return this.page.locator('div[data-e2e="box-notification"]')}
    get SuccessMessage() {return this.NotificationBox.locator('h3')}

    get ManageEmailAccountsTable() {return this.page.locator('table.sg-table.sg-table--no-footer')}
    get ManageEmailAccountTableRow() {return this.ManageEmailAccountsTable.locator('tr')}

    get ValidationMessage() {return this.page.locator('div[data-e2e="validation"]')}
}