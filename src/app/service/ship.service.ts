import { Injectable } from '@angular/core';
import { Ship, ShipName } from '../entities/Ship';

@Injectable({
  providedIn: 'root'
})
export class ShipService {
  public ships: Ship[] = [];
  public single_deck = 4;
  public two_deck = 3;
  public three_deck = 2;

  constructor() {
  }

  public getShips(): Array<Ship> {
      return this.ships;
  }

  public setShips(ships: Ship[]): void {
      this.ships = ships;
  }

  public createSingleShips(x: number[], y: number[]){
    for(let i = this.single_deck; i > 0; i--){
        this.ships.push(new Ship(ShipName.Single_Deck, x[y[i]], y[x[i]]));
        console.log("Однопалубный корабль #" + i + " X:" + x[y[i]] + " Y:" + y[x[i]]);
    }
  }

  public createTwoShips(x: number[], y: number[]){
    for(let i = this.two_deck; i > 0; i--){
        if(y[x[i]] + 1 > 9){
          this.ships.push(new Ship(ShipName.Two_Deck, x[y[i + 4]], y[x[i]] - 1, y[x[i]]));
          console.log("Двухпалубный корабль #" + i + " X:" + x[y[i + 4]] 
          + " Y1:" + (y[x[i]] - 1) 
          + " Y2:" + y[x[i]]);
        }
        else{
          this.ships.push(new Ship(ShipName.Two_Deck, x[y[i + 4]], y[x[i]], y[x[i]] + 1));
          console.log("Двухпалубный корабль #" + i + " X:" + x[y[i + 4]] 
          + " Y1:" + y[x[i]] 
          + " Y2:" + (y[x[i]] + 1));
        }
      }
  }

  public createThreeShips(x: number[], y: number[]){
    for(let i = this.three_deck; i > 0; i--){

        if(y[x[i]] + 2 > 9){
          this.ships.push(new Ship(ShipName.Three_Deck, x[y[i + 7]], y[x[i]] - 2, y[x[i]] - 1, y[x[i]]));
          console.log("Трехпалубный корабль #" + i + " X:" + x[y[i + 7]] 
          + " Y1:" + (y[x[i]] - 2) 
          + " Y2:" + (y[x[i]] - 1) 
          + " Y3:" + (y[x[i]]));
        }
        else{
          this.ships.push(new Ship(ShipName.Three_Deck, x[y[i + 7]], y[x[i]], y[x[i]] + 1, y[x[i]] + 2));
          console.log("Трехпалубный корабль #" + i + " X:" + x[y[i + 7]] 
          + " Y1:" + y[x[i]] 
          + " Y2:" + (y[x[i]] + 1) 
          + " Y3:" + (y[x[i]] + 2));
        }
      }
  }

    public createFourShips(x: number[], y: number[]){
        if(y[x[0]] + 3 > 9){
            this.ships.push( new Ship(ShipName.Four_Deck, x[y[0]],y[x[0]] - 3, y[x[0]] - 2, y[x[0]] - 1, y[x[0]]));
            console.log("Четерехпалубный корабль #" + 1 + " X:" + x[y[0]] 
            + " Y1:" + (y[x[0]] - 3) 
            + " Y2:" + (y[x[0]] - 2) 
            + " Y3:" + (y[x[0]] - 1)  
            + " Y4:" + (y[x[0]]));
          }
          else{
            this.ships.push( new Ship(ShipName.Four_Deck, x[y[0]],y[x[0]], y[x[0]] + 1, y[x[0]] + 2, y[x[0]] + 3));
            console.log("Четерехпалубный корабль #" + 1 + " X:" + x[y[0]] 
            + " Y1:" + (y[x[0]]) 
            + " Y2:" + (y[x[0]] + 1) 
            + " Y3:" + (y[x[0]] + 2)  
            + " Y4:" + (y[x[0]] + 3));
          }
    }


}
