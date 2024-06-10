const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.acceptCookies = page.locator(`//button[text()='Accept cookies']`);
    this.logoLoc = page.locator("(//*[@aria-label='Acme Store logo'])[1]");
    this.topNavLinksLoc = page.locator(
      "//nav[contains(@class,'items-center')]//li"
    );
  }

  async navigate() {
    await this.page.goto("https://demo.vercel.store");
    // Accept cookies
    // await this.acceptCookies.click();
  }

  async pageTitle() {
    await expect(this.page).toHaveTitle("Acme Store");
  }

  async logo() {
    await expect(this.logoLoc).toBeVisible();
  }
};
