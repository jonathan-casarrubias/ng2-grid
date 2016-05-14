import { ContainerPage } from './app.po';

describe('container App', function() {
  let page: ContainerPage;

  beforeEach(() => {
    page = new ContainerPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('container works!');
  });
});
