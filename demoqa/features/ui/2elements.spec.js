// @ts-check
// const { test, expect } = require('@playwright/test');

import { test, expect } from '@playwright/test'

test('Interação_com_a_opcao_elements', async ({ page }) => {
  await page.goto('/elements');

const menuElements = await page.locator('//div[contains(@class, "header-wrapper")]//div[text()="Elements"]').click();
});
