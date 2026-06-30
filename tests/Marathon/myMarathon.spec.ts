import test, { expect } from "@playwright/test";


test("Service Automation", async({page}) =>
{
    // Launching the URL
    await page.goto("https://dev296651.service-now.com/navpage.do");

    // Enter Valid Credentials and submit click button
    await page.getByRole("textbox",{name : "User name"}).fill("admin");
    await page.getByRole("textbox",{name : "Password"}).fill("E7i*7wNgX*mM");
    await page.getByRole("button",{name : "Log in"}).click();

    // Click on ervice catalogue
    await page.locator("div[aria-label='All']").click();
    await page.getByPlaceholder("Filter").type("Service", { delay: 100 });
    await page.waitForTimeout(7000);
    await page.keyboard.press('Enter');

    // Click on Hardware
    await expect(page.getByAltText("ServiceNow Service Management")).toBeVisible();  
    await page.waitForTimeout(7000);
    const mainFrame = page.frameLocator("iframe")
    await mainFrame.getByAltText("Hardware").click(); 
    
    // Click on Mobiles and select Apple iPhone 13 details
    await mainFrame.getByText("Mobiles", { exact: true }).click();
    await mainFrame.getByText('Apple iPhone 13', { exact: true }).click();
    await page.waitForTimeout(5000);

    // Fill on the order details and submit the button
    await mainFrame.locator("//div[@role='radiogroup']//label[text()='Yes']").click();
    await mainFrame.locator("//div[@type='6']/following-sibling::div/input[2]").fill("99");
    await mainFrame.locator("//div[@type='5']/following-sibling::div/select").selectOption('Unlimited');
    await mainFrame.getByText('Blue', { exact: true }).click();
    await mainFrame.locator("//label[contains(text(),'512 GB')]").click();
    await mainFrame.getByRole("button", {name : "Order Now"}).click();

    // Verify the confirmation message
    await expect (mainFrame.locator("//*[@id='sc_order_status_intro_text']/div[1]/span[2]")).toContainText("Thank you")
     //const verify:string = await mainFrame.locator("//*[@id='sc_order_status_intro_text']/div[1]/span[2]").innerText();
     //expect(verify).toContain("Thank you");
    console.log("verified successfully");

    // Take Screenshot
    await page.screenshot({ path: 'screenshots/request-submitted.png' });




})