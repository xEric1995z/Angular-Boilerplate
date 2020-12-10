import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
