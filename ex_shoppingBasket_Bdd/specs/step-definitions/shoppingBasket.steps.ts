import { Basket } from "../../src/main/basket";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature("./src/specs/features/shoppingBasket.feature");

defineFeature(feature, (test) => {
  let basket: Basket;
  let display: string;

  beforeEach(() => {
    basket = new Basket();
  });

  test("Add items to shopping basket", ({ given, and, when, then }) => {
    given(
      /^I add 2 units of "(.*)" to my shopping basket$/,
      (first_item: string) => {
        basket.add(first_item, 5, 2);
      }
    );
    and(/^I add 5 units of "(.*)"$/, (second_item: string) => {
      basket.add(second_item, 7, 5);
    });
    when("I check the content of my shopping basket", () => {
      display = basket.display();
    });
    then("it should contain the following information:", (text) => {
      expect(display).toBe(text);
    });
  });
});
