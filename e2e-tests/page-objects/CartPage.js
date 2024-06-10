const { expect } = require("@playwright/test");

exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.colorBtnLoc = page.locator("button[title='Color Black']");
    this.sizeBtnLoc = page.locator("button[title='Size XL']");
    this.addToCartBtnLoc = page.locator("button[aria-label='Add to cart']");
    this.productInCartLoc = page.locator("span[class='leading-tight']");
  }

  async pageTitle() {
    await expect(this.page).toHaveText(
      "Acme T-Shirt | Acme Store"
    );
  }

  async selectColour() {
    await this.colorBtnLoc.click();
  }

  async selectSize() {
    await this.sizeBtnLoc.click();
  }

  async addToCart() {
    await this.addToCartBtnLoc.click();
  }

  async productInCart() {
    expect(this.productInCartLoc).toContainText("Acme T-Shirt");
  }
};
