import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Teljes vásárlási folyamat ellenőrzése', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 1. Belépés és termék kosárba tétele
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.addItemToCart('Sauce Labs Backpack');
  await productsPage.shoppingCartLink.click();

  // 2. Checkout folyamat
  await cartPage.clickCheckout();
  await checkoutPage.fillInformation('Teszt', 'Elek', '1234');
  await checkoutPage.finishOrder();

  // 3. Ellenőrzés
  await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
});