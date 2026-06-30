import test, { expect } from "@playwright/test";

test("Select Bootstrap drop down", async ({page}) =>
{
    await page.goto("https://leafground.com/select.xhtml");
    await page.locator("//label[normalize-space()='Select Language']").click();
    const locators =await page.locator("//li[normalize-space()='Select Language']/following-sibling::li").all();
    for(const loc of locators)
    {
        if (await loc.innerText() === "Tamil")
        {
            await loc.click()
        }
    }
    await expect(page.locator("//h5[text()='Choose language randomly']/following-sibling::div//label")).toHaveText("Tamil");
    console.log("Value selected in bootstrap drop down");
})