import { ObservableEmitterService } from './../../services/observable-emitter.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-take-until-no-unsubscribe',
    templateUrl: './take-until-no-unsubscribe.component.html',
    styleUrls: ['./take-until-no-unsubscribe.component.scss']
})
export class TakeUntilNoUnsubscribeComponent implements OnInit {
    constructor(private _observableEmitterService: ObservableEmitterService) { }

    ngOnInit(): void {
        this._observableEmitterService.sourceEmitter$.subscribe( (ticker: number) =>
            console.log(`Ticker from takeUntil no unsubscribe component: ${ticker}`)
        );
    }

}
