// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    // Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    // Material.MatRadioModule,
    // Material.MatSelectModule,
    // Material.MatCheckboxModule,
    // Material.MatDatepickerModule,
    // Material.MatNativeDateModule,
    Material.MatButtonModule,
    // Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    // Material.MatPaginatorModule,
    // Material.MatSortModule,
    // Material.MatDialogModule,
    // Material.MatMenuModule,
    Material.MatCardModule,
    Material.MatChipsModule,
  ],
  exports: [
    // Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    // Material.MatRadioModule,
    // Material.MatSelectModule,
    // Material.MatCheckboxModule,
    // Material.MatDatepickerModule,
    // Material.MatNativeDateModule,
    Material.MatButtonModule,
    // Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    // Material.MatPaginatorModule,
    // Material.MatSortModule,
    // Material.MatDialogModule,
    // Material.MatMenuModule,
    Material.MatCardModule,
    Material.MatChipsModule,
  ],
  declarations: []
})
export class MaterialModule { }



  // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },