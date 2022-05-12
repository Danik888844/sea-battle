import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shipName"
})
export class ShipPipe implements PipeTransform {
  transform(name: number): string {
    switch (name) {
      case 0:
        return "Однопалубный корабль ";

      case 1:
        return "Двухпалубный корабль ";

      case 2:
        return "Трехпалубный корабль ";

      case 3:
        return "Четерехпалубный корабль ";

      default:
        return "Ship";
    }
  }
}
