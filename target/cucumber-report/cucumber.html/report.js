$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("geartest.feature");
formatter.feature({
  "line": 1,
  "name": "Gear products page",
  "description": "As a user I want to check Gear products functionality",
  "id": "gear-products-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7637967000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to add products successfully to shopping cart",
  "description": "",
  "id": "gear-products-page;user-should-be-able-to-add-products-successfully-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \u0027Gear\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover and click on \u0027Bags\u0027 in gear tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on product name \u0027Overnight Duffle\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify the text \"Overnight Duffle\" for gear product",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I change the quantity as \"3\" on products page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on \u0027Add To Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify the message \"You added Overnight Duffle to your shopping cart.\" for products",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on \u0027Shopping Cart\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I verify product name for \"Overnight Duffle\" on shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify the quantity as \"3\" as entered",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the product price as \"$135.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I change the quantity to \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on \u0027Update Shopping Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify the product price \"$225.00\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 193252300,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iMouseHoverOnGearTab()"
});
formatter.result({
  "duration": 718704000,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iMouseHoverAndClickOnBagsInGearTab()"
});
formatter.result({
  "duration": 1780792100,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnProductNameOvernightDuffle()"
});
formatter.result({
  "duration": 1386079100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Overnight Duffle",
      "offset": 19
    }
  ],
  "location": "GearTestSteps.iVerifyTheTextForGearProduct(String)"
});
formatter.result({
  "duration": 166635900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "GearTestSteps.iChangeTheQuantityAsOnProductsPage(String)"
});
formatter.result({
  "duration": 235620000,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 146085600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You added Overnight Duffle to your shopping cart.",
      "offset": 22
    }
  ],
  "location": "MenTestSteps.iVerifyTheTextForProductCronusYogaPant(String)"
});
formatter.result({
  "duration": 1713536400,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iClickOnShoppingCartLink()"
});
formatter.result({
  "duration": 1533180700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Overnight Duffle",
      "offset": 27
    }
  ],
  "location": "GearTestSteps.iVerifyProductNameForOnShoppingCart(String)"
});
formatter.result({
  "duration": 141141600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "GearTestSteps.iVerifyTheQuantityAsAsEntered(String)"
});
formatter.result({
  "duration": 150922100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$135.00",
      "offset": 31
    }
  ],
  "location": "GearTestSteps.iVerifyTheProductPriceAs(String)"
});
formatter.result({
  "duration": 101686500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 26
    }
  ],
  "location": "GearTestSteps.iChangeTheQuantityTo(String)"
});
formatter.result({
  "duration": 196670100,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnUpdateShoppingCartButton()"
});
formatter.result({
  "duration": 93926200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$225.00",
      "offset": 28
    }
  ],
  "location": "GearTestSteps.iVerifyTheProductPrice(String)"
});
formatter.result({
  "duration": 3315258500,
  "status": "passed"
});
formatter.after({
  "duration": 852021800,
  "status": "passed"
});
formatter.uri("mentest.feature");
formatter.feature({
  "line": 2,
  "name": "Men\u0027s Product page",
  "description": "As a user I want to check Men\u0027s products functionality",
  "id": "men\u0027s-product-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3668386900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to add product successfully to shopping cart",
  "description": "",
  "id": "men\u0027s-product-page;user-should-be-able-to-add-product-successfully-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027Mens\u0027 tab",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \u0027Bottoms\u0027 in mens tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover and click on \u0027Pants\u0027 in bottoms tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I mouse over on product name \u0027Cronus Yoga Pant\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I mouse hover and click on size of \u0027Cronus Yoga Pant\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I mouse hover and click on colour of \u0027Cronus Yoga Pant\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I mouse over on product name \u0027Cronus Yoga Pant\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I mouse hover and click on \u0027Add To Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify the message \"You added Cronus Yoga Pant to your shopping cart.\" for products",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on \u0027Shopping Cart\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I verify the text \"Shopping Cart\" on shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify the product name as \"Cronus Yoga Pant\" for men\u0027s product",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the size selected as \"32\" for pant",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify the colour selected as \"Black\" for pant",
  "keyword": "And "
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverOnMensTab()"
});
formatter.result({
  "duration": 1192503700,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverOnBottomsInMensTab()"
});
formatter.result({
  "duration": 668295400,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverAndClickOnPantsInBottomsTab()"
});
formatter.result({
  "duration": 1885622300,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseOverOnProductNameCronusYogaPant()"
});
formatter.result({
  "duration": 179860400,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverAndClickOnSizeOfCronusYogaPant()"
});
formatter.result({
  "duration": 197310200,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverAndClickOnColourOfCronusYogaPant()"
});
formatter.result({
  "duration": 251606900,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseOverOnProductNameCronusYogaPant()"
});
formatter.result({
  "duration": 143874800,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverAndClickOnAddToCartButton()"
});
formatter.result({
  "duration": 247201000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You added Cronus Yoga Pant to your shopping cart.",
      "offset": 22
    }
  ],
  "location": "MenTestSteps.iVerifyTheTextForProductCronusYogaPant(String)"
});
formatter.result({
  "duration": 1701993300,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iClickOnShoppingCartLink()"
});
formatter.result({
  "duration": 1842203000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 19
    }
  ],
  "location": "MenTestSteps.iVerifyTheTextOnShoppingCartPage(String)"
});
formatter.result({
  "duration": 213722800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cronus Yoga Pant",
      "offset": 30
    }
  ],
  "location": "MenTestSteps.iVerifyTheProductNameAsForMenSProduct(String)"
});
formatter.result({
  "duration": 175172800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 31
    }
  ],
  "location": "MenTestSteps.iVerifyTheSizeSelectedAsForPant(String)"
});
formatter.result({
  "duration": 94779700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 33
    }
  ],
  "location": "MenTestSteps.iVerifyTheColourSelectedAsForPant(String)"
});
formatter.result({
  "duration": 92487600,
  "status": "passed"
});
formatter.after({
  "duration": 819715700,
  "status": "passed"
});
formatter.uri("womentest.feature");
formatter.feature({
  "line": 1,
  "name": "Women\u0027s Page",
  "description": "As a user I want to check women\u0027s page functionality",
  "id": "women\u0027s-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3650344300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify products are sorted by name",
  "description": "",
  "id": "women\u0027s-page;verify-products-are-sorted-by-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \u0027Women\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on \u0027Tops\u0027 in women tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on \u0027Jackets\u0027 in women tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select sort by option as \"Product Name\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify products name are sorted in alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 50200,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnWomenTab()"
});
formatter.result({
  "duration": 1236148800,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnTopsInWomenTab()"
});
formatter.result({
  "duration": 2187275800,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverAndClickOnJacketsInWomenTab()"
});
formatter.result({
  "duration": 3419614600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product Name",
      "offset": 28
    }
  ],
  "location": "WomenTestSteps.iSelectSortByOptionAs(String)"
});
formatter.result({
  "duration": 1722398200,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iVerifyProductsNameAreSortedInAlphabeticalOrder()"
});
formatter.result({
  "duration": 297161800,
  "status": "passed"
});
formatter.after({
  "duration": 854252900,
  "status": "passed"
});
formatter.before({
  "duration": 3923132800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify products are sorted by price",
  "description": "",
  "id": "women\u0027s-page;verify-products-are-sorted-by-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I mouse hover on \u0027Women\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I mouse hover on \u0027Tops\u0027 in women tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on \u0027Jackets\u0027 in women tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select sort by option as \"Price\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify products are sorted by price in low to high order",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29600,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnWomenTab()"
});
formatter.result({
  "duration": 1223878700,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnTopsInWomenTab()"
});
formatter.result({
  "duration": 2208093100,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverAndClickOnJacketsInWomenTab()"
});
formatter.result({
  "duration": 3342208800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 28
    }
  ],
  "location": "WomenTestSteps.iSelectSortByOptionAs(String)"
});
formatter.result({
  "duration": 1790996800,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iVerifyProductsAreSortedByPriceInLowToHighOrder()"
});
formatter.result({
  "duration": 270371200,
  "status": "passed"
});
formatter.after({
  "duration": 818476400,
  "status": "passed"
});
});