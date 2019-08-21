import { DataObject } from './data-object';

export interface Vehicle extends DataObject {
  vinNumber: string,
  licensePlate: string,
  model: string,
  year: number,
}