const {By} = require('selenium-webdriver');

const search = async (driver, searchTerm) => {
    await driver.findElement(By.name('q')).sendKeys(`${searchTerm}\n`)
    // await driver.sleep(2000)
    await driver.findElement(By.xpath('(//div[text()="Images"])[1]')).click()
    await driver.sleep(5000)
    await driver.findElement(By.xpath(find something))
}
// \n tells site to hit enter button

module.exports = {
    search
}