import {DEFAULT_TIMEOUT} from '../configs/e2eConstants';

export default class BasePage {
  constructor(selector) {
    this.selector = selector;
  }

  /**
   * Wait for the element to be displayed
   *
   * @return {Promise<boolean>}
   */
  async waitForIsShown(isShown = true) {
    try {
      return $(this.selector).waitForDisplayed({
        timeout: DEFAULT_TIMEOUT,
        reverse: !isShown
      });
    } catch (e) {
      return !isShown;
    }
  }

  /**
   * Give back if the element is displayed
   *
   * @return {Promise<boolean>}
   */
  async isDisplayed() {
    return $(this.selector).isDisplayed();
  }
}
