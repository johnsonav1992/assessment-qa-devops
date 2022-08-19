
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

/* This is testing a known bug and the fix I discovered would be to change
the bot array being sent back to the front end to be called 'bots' instead
of 'botsArr'. I am intentionally leaving this test to fail here to show
that the test is detecting the bug. */
test('See All Bots Button display bot cards correctly', async () => {
    await driver.findElement(By.id('see-all')).click()
    const botCardContainer = await driver.findElement(By.id('all-bots'))
    const displayed = await botCardContainer.isDisplayed()

    expect(displayed).toBe(true)

})

test('Check if remove from duo button removes bot from duo', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    await driver.findElement(By.css('.bot-btn')).click()
    await driver.sleep(2000)
    await driver.findElement(By.css('.remove')).click()
    await driver.sleep(2000)
    const botCardVisible = await driver.findElement(By.id('player-duo')).isDisplayed()

    expect(botCardVisible).not.toBe(true)
})