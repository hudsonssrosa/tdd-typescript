import { BasketItem } from "./basketItem";

export class Basket {
  private basketItems: BasketItem[];
  private creationDate: Date;

  constructor() {
    this.basketItems = [];
    this.creationDate = new Date();
  }

  add(itemName: string, price: number, units: number): void {
    this.basketItems.push(new BasketItem(itemName, price, units));
  }

  private formatCurrency(value: number): string {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(value);
  }

  display(): string {
    let ret = `Creation date: ${this.creationDate
      .toISOString()
      .substring(0, 10)}\n`;
    let subtotal = 0;

    this.basketItems.forEach((basketItem) => {
      let total = this.formatCurrency(basketItem.units * basketItem.price);
      ret += `${basketItem.units} x ${basketItem.name} // ${basketItem.units} x ${this.formatCurrency(basketItem.price)} = ${total}\n`;
      subtotal += basketItem.units * basketItem.price;
    });

    ret += "Total: " + this.formatCurrency(subtotal);
    return ret;
  }
}
