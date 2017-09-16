var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;
var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();
driver.get('http://www.webdriverjs.com/');
driver.findElement(By.css('.search-field.form-control')).sendKeys("WebdriverJs");
driver.findElement(By.css('button.search-submit i')).click();
driver.wait(until.elementTextIs(driver.findElement(By.css('.vl-main-header>h1')), "Search Results for: WebdriverJs"), 10000);
driver.quit();