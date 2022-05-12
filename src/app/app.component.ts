import { Component, ElementRef, ViewChild } from "@angular/core";
import { Cell } from "./entities/Cell";
import { CellStatus } from "./entities/CellStatus";
import { Ship, ShipName } from "./entities/Ship";
import { ShipService } from "./service/ship.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Main Page";

  public x: number[] = [];
  public y: number[] = [];

  public shootField: Cell[][];
  public letter: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  public alphabet: string[] = [
    " ",
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ж",
    "З",
    "И",
    "К"
  ];

  public ships: Ship[] = [];
  public info: string = "";
  @ViewChild("startGame") button: ElementRef<HTMLButtonElement>;

  constructor(private shipService: ShipService) {}

  OnInit(): void {}

  public createShootField(): void {
    this.shootField = [];
    for (let i = 0; i < 10; i++) {
      this.shootField[i] = [];
      for (let j = 0; j < 10; j++) {
        this.shootField[i][j] = new Cell(i, j, CellStatus.Alive);
      }
    }

    this.button.nativeElement.remove();

    this.x = this.shuffle();
    this.y = this.shuffle();

    this.shipService.createSingleShips(this.x, this.y);
    this.shipService.createTwoShips(this.x, this.y);
    this.shipService.createThreeShips(this.x, this.y);
    this.shipService.createFourShips(this.x, this.y);

    this.ships = this.shipService.getShips();
  }

  //-------------------------------------------------------------------------------------------------

  public shoot(cell: Cell): Cell {
    console.log("Выстрел! Cell x:" + cell.x + " Cell y:" + cell.y);
    let index: number = 0;

    if (this.ships.length == 0) {
      console.log("Ошибка! Пустой массив!");
      this.info = "Хватит стрелять! Вы победили!";
      return cell;
    }

    console.log("Промах!");
    cell.status = CellStatus.None;

    for (let ship of this.ships) {
      switch (ship.shipName) {
        case ShipName.Single_Deck:
          if (cell.x == ship.posX && cell.y == ship.dot1) {
            console.log("Есть попадание по однопалубнику!");
            cell.status = CellStatus.Destroyed;
            this.deleteShip(ship);
            this.info =
              "Однопалубник уничтожен! Осталось: " + this.calculateShips(0);
            console.log(
              "Однопалубник уничтожен! Осталось: " + this.calculateShips(0)
            );
          }
          break;

        case ShipName.Two_Deck:
          if (
            (cell.x == ship.posX && cell.y == ship.dot1) ||
            (cell.x == ship.posX && cell.y == ship.dot2)
          ) {
            ship.hits += 1;

            console.log("Есть попадание по двухпалубнику!");
            this.info = "Есть попадание по двухпалубнику!";
            cell.status = CellStatus.Destroyed;

            if (ship.hits == 2) {
              this.deleteShip(ship);
              this.info =
                "Двухпалубник уничтожен! Осталось: " + this.calculateShips(1);
              console.log(
                "Двухпалубник уничтожен! Осталось: " + this.calculateShips(1)
              );
            }
          }
          break;

        case ShipName.Three_Deck:
          if (
            (cell.x == ship.posX && cell.y == ship.dot1) ||
            (cell.x == ship.posX && cell.y == ship.dot2) ||
            (cell.x == ship.posX && cell.y == ship.dot3)
          ) {
            ship.hits += 1;

            console.log("Есть попадание по трехпалубнику!");
            this.info = "Есть попадание по трехпалубнику!";
            cell.status = CellStatus.Destroyed;

            if (ship.hits == 3) {
              this.deleteShip(ship);
              this.info =
                "Трехпалубник уничтожен! Осталось: " + this.calculateShips(2);
              console.log(
                "Трехпалубник уничтожен! Осталось: " + this.calculateShips(2)
              );
            }
          }
          break;

        case ShipName.Four_Deck:
          if (
            (cell.x == ship.posX && cell.y == ship.dot1) ||
            (cell.x == ship.posX && cell.y == ship.dot2) ||
            (cell.x == ship.posX && cell.y == ship.dot3) ||
            (cell.x == ship.posX && cell.y == ship.dot4)
          ) {
            ship.hits += 1;

            console.log("Есть попадание по четерехпалубнику!");
            this.info = "Есть попадание по четерехпалубнику!";
            cell.status = CellStatus.Destroyed;

            if (ship.hits == 4) {
              this.deleteShip(ship);
              this.info = "Четерехпалубник уничтожен!";
              console.log("Четерехпалубник уничтожен!");
            }
          }
          break;
      }
    }

    return cell;
  }

  //-------------------------------------------------- HELP METHODS

  public shuffle() {
    let array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let i: number = array.length;
    let j: number = 0;
    let temp: number;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  public deleteShip(ship): void {
    const index = this.ships.indexOf(ship, 0);
    if (index > -1) {
      this.ships.splice(index, 1);
    }
  }

  public calculateShips(name: number): number {
    let k = 0;

    for (let ship of this.ships) {
      if (ship.shipName == name) {
        k++;
      }
    }

    return k;
  }

  public getShipName(ship: Ship): string {
    return ShipName[ship.shipName];
  }
}
