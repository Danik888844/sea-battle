import { CellStatus } from "./CellStatus";

export class Cell {
  constructor(public x: number, public y: number, public status: CellStatus) {
  }
}
