import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { RateRoutingModule } from './rate-routing.module';
import { RateComponent } from './rate/rate.component';


@NgModule({
  declarations: [RateComponent],
  imports: [
    CommonModule,
    SharedModule,
    RateRoutingModule
  ]
})
export class RateModule { }
