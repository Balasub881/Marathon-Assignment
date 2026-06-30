import test, { expect } from "@playwright/test";

test("Hiddendropdown",async({page})=>
{
    await page.goto("https://www.redbus.in/");
    await page.getByRole("combobox", {name: "From"}).fill("hyd");
    await page.waitForTimeout(1000);
    const locators = await page.locator("//div[@role='listbox']//div[contains(@class,'leftContent')]/div[@role='heading']").all();
    for (const locator of locators)
    {
        if (await locator.innerText()==="Nizampet, Hyderabad")
        {
            await locator.click();
            break;
        }     
    }
    await expect (page.locator("//label[text()='From']/preceding-sibling::input")).toHaveValue("Nizampet, Hyderabad");
    console.log("Suggestion selected from the auto selected is verified");
    
})