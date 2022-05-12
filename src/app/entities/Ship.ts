export class Ship {
    constructor(public shipName: ShipName,public posX: number,public dot1: number, public dot2?: number, public dot3?: number, public dot4?: number, public hits: number = 0) {
    }
}

export enum ShipName {
  Single_Deck,
  Two_Deck,
  Three_Deck,
  Four_Deck
}