import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DxDataGridModule,
  DxButtonModule,
  DxFormModule,
  DxRadioGroupModule,
  DxFileUploaderModule,
  DxLoadPanelModule,
  DxPopupModule,
  DxAutocompleteModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxValidatorModule,
  DxValidationGroupModule,
  DxValidationSummaryModule,
  DxTabPanelModule,
  DxDropDownBoxModule,
  DxTreeViewModule,
  DxBoxModule} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    DxDataGridModule,
    DxButtonModule,
    DxFormModule,
    DxRadioGroupModule,
    DxFileUploaderModule,
    DxLoadPanelModule,
    DxPopupModule,
    DxAutocompleteModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxValidatorModule,
    DxValidationGroupModule,
    DxValidationSummaryModule,
    DxTabPanelModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxBoxModule
  ],
  exports: [
    CommonModule,
    FormsModule,

    DxDataGridModule,
    DxButtonModule,
    DxFormModule,
    DxRadioGroupModule,
    DxFileUploaderModule,
    DxLoadPanelModule,
    DxPopupModule,
    DxAutocompleteModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxValidatorModule,
    DxValidationGroupModule,
    DxValidationSummaryModule,
    DxTabPanelModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxBoxModule
  ]
})
export class DevExtremeModule {}
