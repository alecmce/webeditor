import { CodeplayPage } from './app.po';

describe('codeplay App', () => {
  let page: CodeplayPage;

  beforeEach(() => {
    page = new CodeplayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
