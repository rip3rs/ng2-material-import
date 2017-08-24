import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdRadioModule, MdCheckboxModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [BrowserAnimationsModule, MdRadioModule, MdInputModule, MdButtonModule, MdCheckboxModule],
  exports: [BrowserAnimationsModule, MdRadioModule, MdInputModule, MdButtonModule, MdCheckboxModule]
})
export class MaterialImportModule { }
