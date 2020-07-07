import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs/docs.component';


@NgModule({
  declarations: [DocsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DocsRoutingModule
  ]
})
export class DocsModule { }
