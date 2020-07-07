import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { DealRoutingModule } from './deal-routing.module';
import { DealComponent } from './deal/deal.component';


@NgModule({
  declarations: [DealComponent],
  imports: [
    CommonModule,
    SharedModule,
    DealRoutingModule
  ]
})
export class DealModule { }
