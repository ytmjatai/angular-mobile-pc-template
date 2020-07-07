import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
