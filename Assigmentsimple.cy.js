import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps";
Given('open the url',()=>{
cy.visit('https://v1.training-support.net/selenium/simple-form');
})
When("Users enter firstname,lastname,email, contact number and message",()=>{
   cy.get('[id="firstName"]').type("Puja");
   cy.get('[placeholder="Last Name"]').type("Kumari");
   cy.get('[type="email"]').type("puja291196@gmail.com");
   cy.get('[placeholder="9876543210"]').type("7739461062");
   cy.get('[rows="2"]').type("Thankyou!");
})
And("click on button",()=>{
    cy.get('[value="submit"]').click();
})
Then("Then succesfully login", () => {
    cy.on('window:alert',(alertText)=>{
        expect(alertText).to.equal("Thank You for reaching out to us, Puja Kumari");
    });
  });
  