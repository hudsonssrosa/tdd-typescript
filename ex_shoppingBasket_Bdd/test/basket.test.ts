import { Basket } from "../src/main/basket";
import { mock, MockProxy } from "jest-mock-extended";

describe("Basket", () => {
  let basket: Basket;

  beforeEach(() => {
    basket = new Basket();
  });

  it("should create Shopping basket when the first product is added", () => {});

  it("should persist the Shopping basket (In-memory, DB later)", () => {});

  it("should have an own Shopping basket for each user", () => {});

  it("should add an item to the basket ", () => {
    basket.add("The Hobbit", 5, 5);
    const display = basket.display();
    expect(display.length).toBeGreaterThan(0);
  });

  it("should display the date the basket was created in the first line of the display", () => {
    basket.add("The Hobbit", 5, 5);
    const display = basket.display();
    expect(display.split("\n")[0]).toBe("Creation date: 2021-09-28");
  });

  it("should display the total sum of the basket in the last line of the display", () => {
    basket.add("The Hobbit", 5, 5);
    const display = basket.display();

    const rows = display.split("\n");

    expect(rows[rows.length - 1]).toBe("Total: £25.00");
  });
});
