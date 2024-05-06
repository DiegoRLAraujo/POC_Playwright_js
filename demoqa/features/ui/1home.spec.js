// @ts-check
// const { test, expect } = require('@playwright/test');

import { test, expect } from '@playwright/test'

test('Acesso_a_Home', async ({ page }) => {
  await page.goto('/');
  await page.close();
});

test('Interação_com_a_Home', async ({ page }) => {
  await page.goto('/');
  
  const cardbody = [
    'Elements',
    'Forms',
    'Alerts, Frame & Windows',
    'Widgets',
    'Interactions',
    'Book Store Application'
  ];

  const widgets = page.locator('.cardboard');
  for (const text of cardbody) {
    await expect(widgets.locator('h5').getByText(text)).toBeVisible();
  };

  const widgetElement = page.locator("//div[contains(@class, 'card-body')]//h5[text()='Widgets']");
  if (cardbody.length > 0) {
    await widgetElement.click();
  } else {
    throw new Error("Elemento 'Widgets' não encontrado.");
  };
});

