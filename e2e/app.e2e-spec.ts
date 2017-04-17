import { AngularTeslaRangeCalculator2Page } from './app.po';

describe('angular-tesla-range-calculator2 App', () => {
  let page: AngularTeslaRangeCalculator2Page;

  beforeEach(() => {
    page = new AngularTeslaRangeCalculator2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
