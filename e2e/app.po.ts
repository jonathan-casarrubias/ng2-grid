export class ContainerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('container-app h1')).getText();
  }
}
