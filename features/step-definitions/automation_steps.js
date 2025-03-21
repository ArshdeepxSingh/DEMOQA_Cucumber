const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^Login page is opened$/, async () => {
  await browser.url("https://practicetestautomation.com/practice-test-login/");
});

When(/^I enter (.*) and (.*)$/, async (username, password) => {
  await $("#username").setValue(username);
  await $("#password").setValue(password);
});

When(/^clicks on submit button$/, async () => {
  await $("#submit").click();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect($("#error")).toHaveText(message);
});

Then(/^I should see a success message$/, async () => {
  const successMessage = await $(".post-title"); 
  await successMessage.waitForExist({ timeout: 5000 }); 
  await expect(successMessage).toHaveText("Logged In Successfully"); 
});

Then(/^the logout button should be displayed$/, async () => {
  await expect($(".wp-block-button__link")).toBeDisplayed();
  await $(".wp-block-button__link").click();
});
