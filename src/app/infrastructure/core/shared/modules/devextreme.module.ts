import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  DxAccordionModule,
  DxAutocompleteModule,
  DxBoxModule,
  DxButtonModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxDropDownBoxModule,
  DxFileUploaderModule,
  DxFormModule,
  DxListModule,
  DxLoadPanelModule,
  DxRadioGroupModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxTabPanelModule,
  DxTemplateModule,
  DxTreeViewModule,
  DxValidatorModule,
  DxValidationGroupModule,
  DxValidationSummaryModule,
  } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,

    DxAccordionModule,
    DxAutocompleteModule,
    DxBoxModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxDataGridModule,
    DxDropDownBoxModule,
    DxFileUploaderModule,
    DxFormModule,
    DxListModule,
    DxLoadPanelModule,
    DxRadioGroupModule,
    DxPopupModule,
    DxSelectBoxModule,
    DxTabPanelModule,
    DxTemplateModule,
    DxTreeViewModule,
    DxValidatorModule,
    DxValidationGroupModule,
    DxValidationSummaryModule
  ]
})
export class DevExtremeModule {}
