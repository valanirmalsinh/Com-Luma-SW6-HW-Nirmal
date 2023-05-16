package com.magento.steps;

import com.magento.pages.HomePage;
import com.magento.pages.ProductsPage;
import com.magento.pages.ShoppingCart;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class GearTestSteps {

    @When("^I mouse hover on 'Gear' tab$")
    public void iMouseHoverOnGearTab() throws InterruptedException {
        Thread.sleep(500);
        new HomePage().mouseHoverOnGearTab();
    }

    @And("^I mouse hover and click on 'Bags' in gear tab$")
    public void iMouseHoverAndClickOnBagsInGearTab() throws InterruptedException {
        Thread.sleep(500);
        new HomePage().mouseHoverAndClickOnBagsInGear();
    }

    @And("^I click on product name 'Overnight Duffle'$")
    public void iClickOnProductNameOvernightDuffle() {
        new ProductsPage().clickOnProductOvernightDuffle();
    }

    @Then("^I verify the text \"([^\"]*)\" for gear product$")
    public void iVerifyTheTextForGearProduct(String expectedText)  {
        String actualText = new ProductsPage().verifyOvernightDuffleText();
        Assert.assertEquals(actualText,expectedText);
    }

    @When("^I change the quantity as \"([^\"]*)\" on products page$")
    public void iChangeTheQuantityAsOnProductsPage(String qty)  {
        new ProductsPage().changeQty(qty);
    }

    @And("^I click on 'Add To Cart' button$")
    public void iClickOnAddToCartButton() {
        new ProductsPage().clickOnAddToCartButton();
    }

    @Then("^I verify product name for \"([^\"]*)\"$")
    public void iVerifyProductNameFor(String expectedProductName)  {
        String actualProductName = new ProductsPage().verifyOvernightDuffleText();
        Assert.assertEquals(actualProductName,expectedProductName);
    }

    @And("^I verify the quantity as \"([^\"]*)\" as entered$")
    public void iVerifyTheQuantityAsAsEntered(String expectedQty)  {
        String actualQty = new ShoppingCart().verifyProductOvernightDuffleQtyText("value");
        Assert.assertEquals(actualQty,expectedQty);
    }

    @And("^I verify the product price as \"([^\"]*)\"$")
    public void iVerifyTheProductPriceAs(String expectedPrice)  {
        String actualPrice = new ShoppingCart().verifyProductOvernightDufflePriceText();
        Assert.assertEquals(actualPrice,expectedPrice);
    }

    @When("^I change the quantity to \"([^\"]*)\"$")
    public void iChangeTheQuantityTo(String qty)  {
        new ShoppingCart().changeFieldInCart(qty);
    }

    @And("^I click on 'Update Shopping Cart' button$")
    public void iClickOnUpdateShoppingCartButton() {
        new ShoppingCart().updateShoppingCart();
    }

    @Then("^I verify the product price \"([^\"]*)\"$")
    public void iVerifyTheProductPrice(String expectedTotal) throws InterruptedException {
        Thread.sleep(1000);
        String actualTotal = new ShoppingCart().verifyProductPrice();
        Assert.assertEquals(actualTotal,expectedTotal);
    }

    @Then("^I verify product name for \"([^\"]*)\" on shopping cart$")
    public void iVerifyProductNameForOnShoppingCart(String expectedText)  {
       String actualText = new ShoppingCart().verifyProductNameOvernightDuffle();
       Assert.assertEquals(actualText,expectedText);
    }
}
