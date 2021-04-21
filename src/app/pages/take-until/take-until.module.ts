import { ObservableEmitterService } from './../services/observable-emitter.service';
import { TakeUntilComponent } from './components/take-until.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeUntilRoutingModule } from './take-until-routing.module';


@NgModule({
    declarations: [
        TakeUntilComponent
    ],
    imports: [
        CommonModule,
        TakeUntilRoutingModule
    ]
})
export class TakeUntilModule { }
