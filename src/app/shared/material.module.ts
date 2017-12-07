import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule],
  exports: [MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule]
})
export class SharedMaterialModule { }
