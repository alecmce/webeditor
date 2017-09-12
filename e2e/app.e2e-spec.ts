import { WebEditorPage } from './app.po';

describe('webeditor App', () => {
  let page: WebEditorPage;

  beforeEach(() => {
    page = new WebEditorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
