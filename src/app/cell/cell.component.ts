import { Component, OnInit, Input } from '@angular/core';
import { CellStatus } from '../entities/CellStatus';

@Component({
  selector: 'app-cell',
  template: `<div [ngClass]="{
    'squareNone':status == 0,
    'squareAlive':status == 1
    }"></div>`,
  styles: [`
  .squareNone {
  height: 40px;
  width: 40px;
  background-color: rgb(132, 182, 247);
  vertical-align: middle;
  align-self: center;
}

.squareAlive {
  height: 40px;
  width: 40px;
  background-color: rgb(68, 117, 103);
  vertical-align: middle;
  align-self: center;
}

.squareDestroyed {
  height: 40px;
  width: 40px;
  background-color: rgb(129, 24, 24);
  vertical-align: middle;
  align-self: center;
}
  `]
})
export class CellComponent implements OnInit {

  @Input() status: CellStatus;
  @Input() x: number;
  @Input() y: number;
  constructor() { }

  ngOnInit() {
  }
}