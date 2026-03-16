import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Sikeres bejelentkezés tesztelése a Saucedemo oldalon', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  // 1. Megnyitjuk az oldalt
  await loginPage.goto();
  
  // 2. Bejelentkezünk a demo adatokkal
  await loginPage.login('standard_user', 'secret_sauce');
  
  // 3. Ellenőrizzük, hogy sikeres volt-e (pl. a terméklista megjelent)
  await expect(page).toHaveURL(/.*inventory.html/);
  
  const inventoryTitle = page.locator('.title');
  await expect(inventoryTitle).toHaveText('Products');
});