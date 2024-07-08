// import { expect, test } from '../../../fixtures';
import { expect, test } from '../../../mocks/test';
import { MainPage } from '../../../pages/main.page';

test.describe('search results', () => {
  test('check playwright search', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    await mainPage.searchFor("Playwright")
    await expect(mainPage.getFirstSearchResult()).toContainText("Mocked description")
    await expect(mainPage.getFirstSearchResult()).toContainText("Mocked title")
  });
});
