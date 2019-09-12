import { DataObject } from "./data-object";

export interface Product extends DataObject {
  name: string,
  description?: string,
  price: number,
}