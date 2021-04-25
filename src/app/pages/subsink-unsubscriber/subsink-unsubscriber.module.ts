import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubsinkUnsubscriberRoutingModule } from './subsink-unsubscriber-routing.module';
import { SubsinkUnsubscriberComponent } from './component/subsink-unsubscriber.component';


@NgModule({
  declarations: [SubsinkUnsubscriberComponent],
  imports: [
    CommonModule,
    SubsinkUnsubscriberRoutingModule
  ]
})
export class SubsinkUnsubscriberModule { }
