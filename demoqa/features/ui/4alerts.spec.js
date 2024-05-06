// @ts-check
// const { test, expect } = require('@playwright/test');

import { test, expect } from '@playwright/test'

test('Interação_com_alertsWindows', async ({ page }) => {
  await page.goto('/alertsWindows');

const alertsWindows = page.locator('.btn btn-light');

await page.locator('#alertButton').click();
await page.locator('#timerAlertButton').click();
await page.locator('#confirmButton').click();
await page.locator('#promtButton').click();
  
/*   page.locator('#alertButton').click();
  page.locator('#timerAlertButton').click();
  page.locator('#confirmButton').click();
  page.locator('#promtButton').click(); */
});
