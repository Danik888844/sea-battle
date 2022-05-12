import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatTabsModule } from "@angular/material/tabs";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzListModule } from "ng-zorro-antd/list";

import { AppComponent } from "./app.component";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { ru_RU } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import ru from "@angular/common/locales/ru";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { ShipService } from "./service/ship.service";
import { CellComponent } from "./cell/cell.component";
import { NzModalModule } from "ng-zorro-antd/modal";
import { ShipPipe } from './pipes/ship.pipe';

registerLocaleData(ru);

@NgModule({
  declarations: [AppComponent, CellComponent, ShipPipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    MatTabsModule,
    NzListModule,
    NzModalModule
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }, ShipService],
  bootstrap: [AppComponent]
})
export class AppModule {}
