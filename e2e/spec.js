// spec.js
describe('Protractor - App', function() {
  it('should add one and two', function() {
// TODO add URL browser.get
    browser.get('');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).
        toEqual('0');
  });
});
