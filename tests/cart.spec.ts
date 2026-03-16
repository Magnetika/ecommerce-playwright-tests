import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Termék kosárba helyezése', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // 1. Bejelentkezés
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // 2. Termék hozzáadása
  await productsPage.addItemToCart('Sauce Labs Backpack');

  // 3. Ellenőrzés: Megjelent a 1-es szám a kosár ikonon?
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});