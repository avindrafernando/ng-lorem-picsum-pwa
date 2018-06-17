import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule
  ]
})

export class MaterialModule { }
