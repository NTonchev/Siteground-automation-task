import { test as base } from '@playwright/test';
import { DashboardPage } from './Pages/DashboardPage';

type Pages = {
    dashboardPage: DashboardPage;
}
export const test = base.extend<Pages>({
    dashboardPage: async ({ page }, use) => { await use(new DashboardPage(page)); },
});