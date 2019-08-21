import { DataObject } from './data-object';

export interface VehicleReservation extends DataObject {
  vehicle: string,
  driver: string,
  startTime: Date,
  endTime: Date,
}