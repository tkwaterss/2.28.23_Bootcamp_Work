const {By} = require('selenium-webdriver')

const addMovie = async (driver, movieTitle) => {
    await driver.findElement(By.css('input')).sendKeys(`${movieTitle}`)
    await driver.findElement(By.css('button')).click()
}

module.exports = {
    addMovie
}