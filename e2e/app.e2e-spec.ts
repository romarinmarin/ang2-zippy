import { Ang2ZippyPage } from './app.po';

describe('ang2-zippy App', function() {
  let page: Ang2ZippyPage;

  beforeEach(() => {
    page = new Ang2ZippyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
