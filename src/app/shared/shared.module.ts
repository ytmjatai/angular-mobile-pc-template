import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DxDrawerModule } from 'devextreme-angular/ui/drawer';
import { DxListModule } from 'devextreme-angular/ui/list';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxButtonModule } from 'devextreme-angular/ui/button';

import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxLoadPanelModule } from 'devextreme-angular/ui/load-panel';
import { DxiValidationRuleModule } from 'devextreme-angular/ui/nested/validation-rule-dxi';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxNumberBoxModule } from 'devextreme-angular/ui/number-box';
import { DxAccordionModule } from 'devextreme-angular/ui/accordion';



import { DxMenuModule } from 'devextreme-angular/ui/menu';
// import { DxSliderModule } from 'devextreme-angular/ui/slider';
// import { DxRangeSliderModule } from 'devextreme-angular/ui/range-slider';
// import { DxRangeSelectorModule } from 'devextreme-angular/ui/range-selector';
// import { DxSwitchModule } from 'devextreme-angular/ui/switch';
// import { DxProgressBarModule } from 'devextreme-angular/ui/progress-bar';
// import { DxChartModule } from 'devextreme-angular/ui/chart';
import { DxPopupModule } from 'devextreme-angular/ui/popup';
// import { DxTextAreaModule } from 'devextreme-angular/ui/text-area';
// import { DxPopoverModule } from 'devextreme-angular/ui/popover';
// import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
// import { DxDropDownBoxModule } from 'devextreme-angular/ui/drop-down-box';

// import { DxRadioGroupModule } from 'devextreme-angular/ui/radio-group';

// import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';

// import { DxDraggableModule } from 'devextreme-angular/ui/draggable';
// import { DxSpeedDialActionModule } from 'devextreme-angular/ui/speed-dial-action';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DxDrawerModule,
    DxListModule,
    DxToolbarModule,
    DxButtonModule,
    DxTextBoxModule,
    DxLoadPanelModule,

    DxFormModule,
    DxValidatorModule,
    DxAccordionModule,
    // DxiValidationRuleModule,
    // DxLoadIndicatorModule,
    DxDataGridModule,
    DxMenuModule,
    DxPopupModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    DxDrawerModule,
    DxListModule,
    DxToolbarModule,
    DxButtonModule,
    DxTextBoxModule,
    DxLoadPanelModule,

    DxFormModule,
    DxValidatorModule,
    DxAccordionModule,
    // DxiValidationRuleModule,
    // DxLoadIndicatorModule,
    DxDataGridModule,
    DxMenuModule,
    DxPopupModule,


  ]
})
export class SharedModule { }
