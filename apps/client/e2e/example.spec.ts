import { test, expect } from '@playwright/test';

const clientBaseUrl = 'http://localhost:3000';

test('has title', async ({ page }) => {
  await page.goto(clientBaseUrl);

  const title = await page.getByText(/web/i);
  await expect(title).toBeVisible();
});

test('has beep button', async ({ page }) => {
  await page.goto(clientBaseUrl);

  const button = await page.getByText(/beep/i);
  await expect(button).toBeVisible();
});
