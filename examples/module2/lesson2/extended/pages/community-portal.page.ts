import { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class CommunityPortalPage {
  private readonly page: Page;
  private readonly url = URLs.COMMUNITY_PORTAL_PAGE;
  private readonly helpDeskLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.helpDeskLink = this.page.getByRole('link', { name: 'Help desk', exact: true });
  }

  async goToHelpDesk() {
    const helpDeskLinkHref = (await this.helpDeskLink.getAttribute('href'))!;
    await this.helpDeskLink.click();
    return this.page.waitForURL(helpDeskLinkHref);
  }

  navigate() {
    return this.page.goto(this.url);
  }

}
