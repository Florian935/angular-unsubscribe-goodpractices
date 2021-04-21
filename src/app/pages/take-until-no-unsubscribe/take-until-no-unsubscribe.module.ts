import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeUntilNoUnsubscribeRoutingModule } from './take-until-no-unsubscribe-routing.module';
import { TakeUntilNoUnsubscribeComponent } from './components/take-until-no-unsubscribe.component';


@NgModule({
  declarations: [TakeUntilNoUnsubscribeComponent],
  imports: [
    CommonModule,
    TakeUntilNoUnsubscribeRoutingModule
  ]
})
export class TakeUntilNoUnsubscribeModule { }
