export class BasketItem {
  name: string;
  units: number;
  price: number;

  constructor(name: string, price: number, units: number) {
    this.name = name;
    this.price = price;
    this.units = units;
  }
}
