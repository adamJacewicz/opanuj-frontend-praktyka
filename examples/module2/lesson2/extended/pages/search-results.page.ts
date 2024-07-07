import { Locator, Page } from '@playwright/test';

export class SearchResultsPage {
  private readonly page: Page;
  private readonly searchParagraph: Locator;
  private readonly resultsContainer: Locator;
  private readonly firstResult: Locator;
  private readonly secondResult: Locator;
  private readonly thirdResult: Locator;


  constructor(page: Page) {
    this.page = page;
    this.searchParagraph = this.page.getByText('There is a page named "Watchlist" on Wikipedia', { exact: true });
    this.resultsContainer = this.page.getByLabel('Search results').locator('div').filter({ hasText: 'Wikipedia:FAQ/Contributing If' }).nth(2);
    this.firstResult = this.resultsContainer.getByRole('link', { name: 'Wikipedia:FAQ/Contributing' });
    this.secondResult = this.resultsContainer.getByRole('link', { name: 'Wikipedia:FAQ/Overview' });
    this.thirdResult = this.resultsContainer.getByRole('link', { name: 'Wikipedia:FAQ/Schools' });
  }

  getSearchParagraph() {
    return this.searchParagraph
  }

  getFirstResult() {
    return this.firstResult
  }

  getSecondResult() {
    return this.secondResult
  }

  getThirdResult() {
    return this.thirdResult
  }
}
