import { ProductBill } from "./product_bill";

export class Bill {
    billStatus!: string;
    address!: string;
    deliveryCost!: number;
    productBillsDTO!: ProductBill[];
}