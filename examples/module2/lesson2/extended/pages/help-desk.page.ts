import { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class HelpDeskPage {
  private readonly page: Page;
  private readonly url = URLs.HELP_DESK_PAGE;
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = this.page.getByRole('cell', { name: 'Search the frequently asked' }).getByRole('textbox');
    this.searchButton = this.page.getByRole('cell', { name: 'Search the frequently asked' }).getByRole('button', { name: 'Search the frequently asked' });

  }

  async searchForWatchlist() {
    await this.searchInput.fill("watchlist");
    await this.searchButton.click();
    return await this.page.waitForURL(/.*&search=watchlist.*/i);
  }

  navigate() {
    return this.page.goto(this.url);
  }
}
