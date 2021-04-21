import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeUntilDestroyerWithoutNgOnDestroyRoutingModule } from './take-until-destroyer-without-ng-on-destroy-routing.module';
import { TakeUntilDestroyerWithoutNgOnDestroyComponent } from './components/take-until-destroyer-without-ng-on-destroy.component';


@NgModule({
  declarations: [
      TakeUntilDestroyerWithoutNgOnDestroyComponent
  ],
  imports: [
    CommonModule,
    TakeUntilDestroyerWithoutNgOnDestroyRoutingModule
  ]
})
export class TakeUntilDestroyerWithoutNgOnDestroyModule { }
