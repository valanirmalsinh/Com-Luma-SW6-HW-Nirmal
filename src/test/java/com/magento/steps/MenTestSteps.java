package com.magento.steps;

import com.magento.pages.HomePage;
import com.magento.pages.ProductsPage;
import com.magento.pages.ShoppingCart;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class MenTestSteps {

    @Given("^I mouse hover on 'Mens' tab$")
    public void iMouseHoverOnMensTab() throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().mouseHoverOnMensTab();
    }

    @When("^I mouse hover on 'Bottoms' in mens tab$")
    public void iMouseHoverOnBottomsInMensTab() throws InterruptedException {
        Thread.sleep(500);
        new HomePage().mouseHoverOnBottomsInMensTab();

    }

    @And("^I mouse hover and click on 'Pants' in bottoms tab$")
    public void iMouseHoverAndClickOnPantsInBottomsTab() throws InterruptedException {
        Thread.sleep(500);
        new HomePage().mouseHoverAndClickOnPantsInBottoms();

    }

    @And("^I mouse over on product name 'Cronus Yoga Pant'$")
    public void iMouseOverOnProductNameCronusYogaPant() {
        new ProductsPage().mouseHoverOnProductCronusYogaPant();
    }

    @And("^I mouse hover and click on size of 'Cronus Yoga Pant'$")
    public void iMouseHoverAndClickOnSizeOfCronusYogaPant() {
        new ProductsPage().mouseHoverAndClickOnSizeOfCronusYogaPant();

    }

    @And("^I mouse hover and click on colour of 'Cronus Yoga Pant'$")
    public void iMouseHoverAndClickOnColourOfCronusYogaPant() {
        new ProductsPage().mouseHoverAndClickOnCronusYogaPantColour();

    }

    @And("^I mouse hover and click on 'Add To Cart' button$")
    public void iMouseHoverAndClickOnAddToCartButton() {
        new ProductsPage().mouseHoverAndClickOnAddToCart();

    }

    @Then("^I verify the message \"([^\"]*)\" for products$")
    public void iVerifyTheTextForProductCronusYogaPant(String expectedMessage)  {
      String actualMessage = new ProductsPage().verifyProductAddedToCartMessage();
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @When("^I click on 'Shopping Cart' link$")
    public void iClickOnShoppingCartLink() {
        new ProductsPage().clickOnShoppingCartLink();
    }

    @Then("^I verify the text \"([^\"]*)\" on shopping cart page$")
    public void iVerifyTheTextOnShoppingCartPage(String expectedTitle)  {
      String actualTitle =  new ShoppingCart().verifyShoppingCartTitle();
      Assert.assertEquals(actualTitle,expectedTitle);
    }

    @And("^I verify the product name as \"([^\"]*)\" for men's product$")
    public void iVerifyTheProductNameAsForMenSProduct(String expectedProductName)  {
        String actualProductName =  new ShoppingCart().verifyProductCronusYogaPantName();
        Assert.assertEquals(actualProductName,expectedProductName);

    }

    @And("^I verify the size selected as \"([^\"]*)\" for pant$")
    public void iVerifyTheSizeSelectedAsForPant(String expectedSize)  {
        String actualSize =  new ShoppingCart().verifyProductCronusYogaPantSizeText();
        Assert.assertEquals(actualSize,expectedSize);

    }

    @And("^I verify the colour selected as \"([^\"]*)\" for pant$")
    public void iVerifyTheColourSelectedAsForPant(String expectedColour)  {
        String actualColour =  new ShoppingCart().verifyProductCronusYogaPantColourText();
        Assert.assertEquals(actualColour,expectedColour);

    }
}
