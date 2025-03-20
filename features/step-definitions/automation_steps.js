const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^I open the form page$/, async () => {
  await browser.url("https://demoqa.com/automation-practice-form");
});

When(/^I enter firstname and lastname in the First Name field$/, async () => {
  await $("#firstName").scrollIntoView();
  await $("#firstName").setValue("John");
  await $("#lastName").setValue("Doe");
});

When(/^clicks on submit button$/, async () => {
  await $('button[type="submit"]').scrollIntoView();
  await $('button[type="submit"]').click();
});

Then("I wait for 5 seconds before closing", async () => {
  await browser.pause(5000);
});
