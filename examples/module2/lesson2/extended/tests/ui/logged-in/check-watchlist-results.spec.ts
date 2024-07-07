import { expect, test } from '../../../fixtures';
import { MainPage } from '../../../pages/main.page';
import { CommunityPortalPage } from '../../../pages/community-portal.page.ts';
import { HelpDeskPage } from '../../../pages/help-desk.page.ts';
import { SearchResultsPage } from '../../../pages/search-results.page.ts';



test('check watch list results', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToCommunityPortalPage()
  const communityPortalPage = new CommunityPortalPage(page)
  await communityPortalPage.goToHelpDesk()
  const helpDeskPage = new HelpDeskPage(page)
  await helpDeskPage.searchForWatchlist()
  const searchResultsPage = new SearchResultsPage(page)
  await expect(searchResultsPage.getSearchParagraph()).toBeVisible()
  await expect(searchResultsPage.getFirstResult()).toBeVisible()
  await expect(searchResultsPage.getSecondResult()).toBeVisible()
  await expect(searchResultsPage.getThirdResult()).toBeVisible()
});
