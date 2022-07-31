export class Product {
  id!: number;
  code!: string;
  productName!: string;
  price!: number;
  img!: string;
  quantity!: number;

  constructor(
    id: number,
    code: string,
    productName: string,
    price: number,
    img: string,
    quantity: number
  ) {
    this.id = id;
    this.code = code;
    this.productName = productName;
    this.price = price;
    this.img = img;
    this.quantity = quantity;
  }
}
