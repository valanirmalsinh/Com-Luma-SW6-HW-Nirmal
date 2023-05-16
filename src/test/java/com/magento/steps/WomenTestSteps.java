package com.magento.steps;

import com.magento.pages.HomePage;
import com.magento.pages.ProductsPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WomenTestSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I mouse hover on 'Women' tab$")
    public void iMouseHoverOnWomenTab() throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().mouseHoverOnWomenTab();
    }

    @And("^I mouse hover on 'Tops' in women tab$")
    public void iMouseHoverOnTopsInWomenTab() throws InterruptedException {
        Thread.sleep(2000);
        new HomePage().mouseHoverOnTopsInWomenTab();
    }

    @And("^I mouse hover and click on 'Jackets' in women tab$")
    public void iMouseHoverAndClickOnJacketsInWomenTab() throws InterruptedException {
        Thread.sleep(2000);
        new HomePage().mouseHoverAndClickOnJacketsInWomen();
    }

    @And("^I select sort by option as \"([^\"]*)\"$")
    public void iSelectSortByOptionAs(String option)  {
        new ProductsPage().selectSortByOption(option);
    }

    @Then("^I verify products name are sorted in alphabetical order$")
    public void iVerifyProductsNameAreSortedInAlphabeticalOrder() {
        new ProductsPage().verifyProductsNameAlphabeticalOrder();
    }

    @Then("^I verify products are sorted by price in low to high order$")
    public void iVerifyProductsAreSortedByPriceInLowToHighOrder() {
        new ProductsPage().verifyProductsPriceLowToHigh();
    }
}
