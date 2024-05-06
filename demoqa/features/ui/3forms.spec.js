// @ts-check
// const { test, expect } = require('@playwright/test');

import { test, expect } from '@playwright/test'

test('Interação_com_o_formulário', async ({ page }) => {
  await page.goto('/forms');

const menuforms = page.locator('//div[contains(@class, "element-list collapse show")]//span[text()="Practice Form"]').click();
  await page.close();

});


test('Preenchimento_do_formulário', async ({ page }) => {
  await page.goto('/forms');

  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Testadobr3');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Qa');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('testadorbr3@gmail.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').click();
  await page.getByPlaceholder('Mobile Number').fill('+174379253');
  await page.locator('#dateOfBirthInput').click();
  await page.locator('#dateOfBirthInput').fill('06 May 2024 20 Mar 1989');
  await page.locator('#dateOfBirthInput').click();
  await page.getByText('Sports').click();
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('No Pictures');
  await page.locator('.container > div > div:nth-child(3)').click();
  await page.locator('.css-tlfecz-indicatorContainer').first().click();
  await page.getByText('Uttar Pradesh', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Select City$/ }).nth(2).click();
  await page.locator('.css-1gtu0rj-indicatorContainer').click();
  await page.locator('#city svg').dblclick();
  await page.getByText('Lucknow', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});