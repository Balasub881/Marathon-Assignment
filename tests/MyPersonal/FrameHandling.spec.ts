import test, { expect } from "@playwright/test";

test("Handling Frames",async({page})=>
{
    await page.goto("https://leafground.com/frame.xhtml");
    await page.frameLocator("//iframe[@src='default.xhtml']").getByRole("button", { name: "Click Me" }).click();
    await page.waitForTimeout(2000);
    const plw =  page.frameLocator("//iframe[@src='default.xhtml']").getByRole("button", { name: "Hurray! You Clicked Me." });
    await expect(plw).toHaveText("Hurray! You Clicked Me.");
})

test("Count of the Frames",async({page}) =>
{
    await page.goto("https://leafground.com/frame.xhtml");
    const frameLength = page.frames().length;
    console.log(frameLength);
})

test("Inside Nested Frame Handling",async({page}) =>
{
    await page.goto("https://leafground.com/frame.xhtml");
    const mainFrame = page.frameLocator("iframe[src='page.xhtml']");
    const nestedFrame = mainFrame.frameLocator("iframe[src='framebutton.xhtml']");
    const button = nestedFrame.getByRole("button", { name: "Click Me" });
    await button.click();
    await page.waitForTimeout(2000);
    const button2 = nestedFrame.getByRole("button", { name: "Hurray! You Clicked Me." });
    await expect(button2).toHaveText("Hurray! You Clicked Me.");
})