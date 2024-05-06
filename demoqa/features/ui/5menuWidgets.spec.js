// @ts-check
// const { test, expect } = require('@playwright/test');

import { test, expect } from '@playwright/test'

test('Interação_com_o_widgetElement', async ({ page }) => {
  await page.goto('/');

  const widgetElement = await page.locator("//div[contains(@class, 'card-body')]//h5[text()='Widgets']").click();
  const element = await page.locator('//div[contains(@class, "element-list collapse show")]//span[text()="Menu"]').click();

  await page.close();
  
});

  test('Interação_com_menu', async ({ page }) => {
    await page.goto('/menu');
    await page.getByRole('link', { name: 'Main Item 2' }).click();
    await page.getByRole('link', { name: 'Sub Item' }).nth(1).click();
    await expect(page.getByRole('link', { name: 'S//div[contains(@class, "nav-menu-container")]//a[text()="Sub Sub Item 2"]' })).toBeVisible();
    });


/* 
  // const element = await page.waitForSelector('//div[contains(@class, "element-list collapse show")]//span[text()="Menu"]');
  if (element instanceof Array || element instanceof NodeList) {
    const itemCount = element.length;
    if (itemCount === 3) {
      console.log('Os três itens existem na página.');
    } else {
      console.error('Não foi possível encontrar os três itens.');
    }
  } else {
    console.error('Element is not an array or NodeList');
  }

  const itemCount = element.length;
    if (itemCount === 3) {
      console.log('Os três itens existem na página.');
    } else {
      console.error('Não foi possível encontrar os três itens.');
    }

  const items = element.$$eval('ul > li', lis => lis.map(li => li.textContent.trim()));
    if (items.includes('Main Item 1') && items.includes('Main Item 2') && items.includes('Main Item 3')) {
      console.log('Os três itens foram encontrados.');

      // Interagir com o 'Main Item 2'
      const mainItem2 = await element.$('ul > li:nth-child(2)'); // Assumindo que 'Main Item 2' é o segundo item
      await mainItem2.click(); // Clicar no 'Main Item 2'

      console.log('Interagiu com o Main Item 2 com sucesso.');
    } else {
      console.log('Não foi possível encontrar todos os itens esperados.');
    } */

/*   const menuWidgets = page.locator('.btn btn-light active');
    await page.locator('//div[contains(@class, "element-list collapse show")]//span[text()="Menu"]').click();
    await expect(menuWidgets.getByText('Main Item 1')).toBeVisible(); */

  // await page.close();
// });

// test('Interação_com_o_menuWidgets', async ({ page }) => {
//   await page.goto('/widgets');


// const menuWidgets = page.locator('.btn btn-light active');
//   await page.locator('//div[contains(@class, "element-list collapse show")]//span[text()="Menu"]').click();
//   await expect(page.getByText('Main Item 1')).toBeVisible();

// });


