import { test } from "../BasePages"
import { expect } from "@playwright/test";

test ('Add an email account', async ({page, dashboardPage})=>{

    // Open Email > accounts menu
    await dashboardPage.NavigateToDashboardPage();
    await dashboardPage.SelectMenuFromNavigationBar(MenuOptionAccount, SubMenuAccount);
    await expect(dashboardPage.dashboardElements.EmailAccountHeader).toBeVisible();

    // Select chosen domain and verify the values
    await dashboardPage.ClickDomainDropDown();
    const actualDomains = await dashboardPage.dashboardElements.DomainDropDownOptions.allInnerTexts();
    await expect(actualDomains).toEqual(ExpectedDomains);
    await dashboardPage.SelectDomainFromDropdown(DomainName);

    // Generate password and verify it is populated
    await dashboardPage.EnterUserName(UserName);
    await dashboardPage.ClickGeneratePasswordButton();
    await expect(dashboardPage.dashboardElements.PasswordField).not.toHaveValue("");

    // Click create button and verify success message
    await dashboardPage.ClickCreateButton();
    const successMessageText = await dashboardPage.dashboardElements.SuccessMessage.innerText();
    await expect(dashboardPage.dashboardElements.SuccessMessage).toBeVisible();
    await expect(successMessageText).toEqual(ExpectedSuccessMessage);

    // Verify email is present in Manage emails table
    await expect(dashboardPage.dashboardElements.ManageEmailAccountTableRow.filter({ hasText: `${Email}`})).toBeVisible();
})

test ('Add an empty email forwarder', async ({page, dashboardPage})=>{

    // Open Email > Forwarders menu
    await dashboardPage.NavigateToDashboardPage();
    await dashboardPage.SelectMenuFromNavigationBar(MenuOptionAccount, SubMenuForwarders);
    await expect(dashboardPage.dashboardElements.EmailForwardersHeader).toBeVisible();

    // Select chosen domain and verify the values
    await dashboardPage.ClickDomainDropDown();
    const actualDomains = await dashboardPage.dashboardElements.DomainDropDownOptions.allInnerTexts();
    await expect(actualDomains).toEqual(ExpectedDomains);
    await dashboardPage.SelectDomainFromDropdown(DomainName);

    // Click create button
    await dashboardPage.ClickCreateButton();
    await expect(dashboardPage.dashboardElements.ValidationMessage).toBeVisible();
})

const MenuOptionAccount = 'navigation-group-mail';
const SubMenuAccount = 'Accounts';
const SubMenuForwarders = 'Forwarders';
const ExpectedDomains = ['qa-automation-tools.com', 'store.qa-automation-tools.com', 'parked-qa-automation-tools.com', 'site-tools-demo.net'];
const DomainName = 'site-tools-demo.net';
const UserName = 'test_account';
const Email = 'test_account@site-tools-demo.net';
const ExpectedSuccessMessage = 'Email account test_account@site-tools-demo.net is created.';