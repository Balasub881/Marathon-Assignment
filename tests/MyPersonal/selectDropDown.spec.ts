import test, { expect } from"@playwright/test"

test("Handling Select Alert with Alert using label", async ({page}) =>
{
   await page.goto("https://leafground.com/select.xhtml");
   await page.selectOption(".layout-main-content select.ui-selectonemenu", {label : "Selenium"})
   await page.waitForTimeout(3000);
   await expect(page.locator(".layout-main-content select.ui-selectonemenu")).toHaveValue("Selenium")
   console.log("Selected option using label is selected and verified");
})

test("Handling Select Alert with Alert using Index", async({page}) =>
{
    await page.goto("https://leafground.com/select.xhtml");
    await page.selectOption(".layout-main-content select.ui-selectonemenu", {index : 2});
    //await page.locator('select').selectOption('value');
    await page.waitForTimeout(3000);
    await expect(page.locator(".layout-main-content select.ui-selectonemenu")).toHaveValue("Playwright")
    console.log("Selected option using label is selected and verified");
})

test("Printing all the values in dropdown using enhanced for loop", async({page}) =>
{
    await page.goto("https://leafground.com/select.xhtml");
    let locators = await page.locator(".layout-main-content select.ui-selectonemenu option").all();
    for (let loc of locators)
    {
        console.log(await loc.innerText());
    }
})

test("Printing all the values in dropdown using classical for loop", async({page}) =>
{
    await page.goto("https://leafground.com/select.xhtml");
    let locators = await page.locator(".layout-main-content select.ui-selectonemenu option").all();
    for (let i=0; i<locators.length; i++)
    {
        console.log(await locators[i].innerText());
    }
})

test("Printing all the values without using for loop", async({page}) =>
{
    await page.goto("https://leafground.com/select.xhtml");
    const locators = await page.locator(".layout-main-content select.ui-selectonemenu option").allInnerTexts();
    console.log(locators)
})