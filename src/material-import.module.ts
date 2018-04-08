import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatStepperModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    //form controls
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    //navigation
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    //layout
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    //buttons indicators & icons
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    //popups & modals
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    //data files
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports: [
    BrowserAnimationsModule,
    //form controls
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    //navigation
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    //layout
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    //buttons indicators & icons
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    //popups & modals
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    //data files
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})

export class MaterialImportModule {}
