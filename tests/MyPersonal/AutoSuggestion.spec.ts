import test, { expect } from "@playwright/test";

test("Autosuggestionselection",async({page})=>
{
    await page.goto("https://www.google.com/");
    await page.getByRole("combobox", {name: "Search"}).fill("playwright jobs in chennai");
    const locators = await page.locator("div[role='presentation'] li").all();
    for (const locator of locators)
    {
        if (await locator.innerText()==="playwright jobs in chennai")
        {
            await locator.click();
            break;
        }
       
    }
    await expect (page.getByRole("combobox", {name: "Search"})).toHaveValue("playwright jobs in chennai");
    console.log("Suggestion selected from the auto selected is verified");
    
})