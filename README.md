# ecommerce-playwright-tests

End-to-end test suite for the [SauceDemo](https://www.saucedemo.com/) e-commerce demo application, built with [Playwright](https://playwright.dev/) and TypeScript. The project follows the **Page Object Model (POM)** pattern to keep tests clean, readable, and maintainable.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)
- [Page Objects](#page-objects)
- [Configuration](#configuration)

---

## Project Structure

```
ecommerce-playwright-tests/
├── pages/                  # Page Object Model classes
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/                  # Test specifications
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   └── example.spec.ts
├── playwright.config.ts    # Playwright configuration
└── package.json
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

---

## Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## Running Tests

```bash
# Run all tests (headless, all browsers)
npx playwright test

# Run tests in a specific file
npx playwright test tests/login.spec.ts

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run tests in a specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Open the HTML test report
npx playwright show-report
```

---

## Test Coverage

| Test file | Description |
|---|---|
| `login.spec.ts` | Verifies successful login with valid credentials and redirect to the product inventory page |
| `cart.spec.ts` | Verifies that a product can be added to the shopping cart and the cart badge updates correctly |
| `checkout.spec.ts` | Covers the full purchase flow: login → add to cart → checkout → fill in shipping info → confirm order |
| `example.spec.ts` | Default Playwright example tests against the Playwright documentation site |

**Test credentials (SauceDemo):**
- Username: `standard_user`
- Password: `secret_sauce`

---

## Page Objects

| Class | Responsibility |
|---|---|
| `LoginPage` | Navigates to the site and performs login |
| `ProductsPage` | Interacts with the product inventory list (add to cart, navigate to cart) |
| `CartPage` | Accesses the shopping cart and proceeds to checkout |
| `CheckoutPage` | Fills in shipping information and completes the order |

---

## Configuration

The Playwright configuration is defined in [`playwright.config.ts`](playwright.config.ts). Key settings:

- **Browsers:** Chromium, Firefox, WebKit (Desktop)
- **Parallelism:** Tests run fully in parallel by default; single worker on CI
- **Retries:** 0 locally, 2 on CI
- **Reporter:** HTML (`playwright-report/index.html`)
- **Tracing:** Captured on first retry of a failed test
