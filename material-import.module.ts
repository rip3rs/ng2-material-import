import { NgModule } from '@angular/core';
import { MdInputModule, MdButtonModule, MdRadioModule, MdCheckboxModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [MdRadioModule, MdInputModule, MdButtonModule, MdCheckboxModule],
  exports: [MdRadioModule, MdInputModule, MdButtonModule, MdCheckboxModule],
})
export class MaterialImportModule { }
