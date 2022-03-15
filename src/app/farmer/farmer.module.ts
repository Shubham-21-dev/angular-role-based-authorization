import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application/application.component';
import { RouterModule } from '@angular/router';
import { routes } from './farmer-routing.module';



@NgModule({
  declarations: [ApplicationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FarmerModule { }
