import { ProductBill } from "./product_bill";

export class Bill {
    billStatus!: string;
    address!: string;
    deliveryCost!: number;
    date!: number;
    productBillsDTO!: ProductBill[];
}