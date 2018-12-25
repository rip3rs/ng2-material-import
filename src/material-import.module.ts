import { NgModule } from "@angular/core";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import "hammerjs";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";

@NgModule({
  imports: [
    MatDividerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatRippleModule,

    // BrowserAnimationsModule,
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
  ],
  exports: [
    MatDividerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatRippleModule,

    // BrowserAnimationsModule,
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
