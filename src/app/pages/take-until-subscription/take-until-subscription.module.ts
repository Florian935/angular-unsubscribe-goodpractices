import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeUntilSubscriptionRoutingModule } from './take-until-subscription-routing.module';
import { TakeUntilSubscriptionComponent } from './components/take-until-subscription.component';


@NgModule({
  declarations: [TakeUntilSubscriptionComponent],
  imports: [
    CommonModule,
    TakeUntilSubscriptionRoutingModule
  ]
})
export class TakeUntilSubscriptionModule { }
