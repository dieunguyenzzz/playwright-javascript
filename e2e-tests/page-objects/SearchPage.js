const { expect } = require("@playwright/test");

exports.SearchPage = class SearchPage {
  constructor(page) {
    this.page = page;
    this.allLinkLoc = page.locator("//a[text()='All']");
    this.shirstLinkLoc = page.locator("a[href='/search/shirts']");
    this.productLinkLoc = page.locator("//h3[text()='Acme T-Shirt']");
    this.pageHeaderLoc = page.locator("//h1");
  }

  async navigatetoProductDetailPage() {
    await this.allLinkLoc.click();
    await this.shirstLinkLoc.click();
    await this.productLinkLoc.click();
  }

  async pageHeader() {
    await expect(this.pageHeaderLoc).toHaveText("Acme T-Shirt");
  }
};
