import { ObservableEmitterService } from './../../services/observable-emitter.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-take-until',
    templateUrl: './take-until.component.html',
    styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit, OnDestroy {
    private unsubscriber$: Subject<boolean> = new Subject<boolean>();

    constructor(private _observableEmitterService: ObservableEmitterService) { }

    ngOnInit(): void {
        this._observableEmitterService.sourceEmitter$
            .pipe(takeUntil(this.unsubscriber$))
            .subscribe( ( ticker: number ) =>
                console.log(`Ticker from takeUntil destroyer 1 component: ${ticker}`)
            );

        this._observableEmitterService.sourceEmitter$
            .pipe(takeUntil(this.unsubscriber$))
            .subscribe( ( ticker: number ) =>
                console.log(`Ticker from takeUntil destroyer 2 component: ${ticker}`)
            );

        this._observableEmitterService.sourceEmitter$
            .pipe(takeUntil(this.unsubscriber$))
            .subscribe( ( ticker: number ) =>
                console.log(`Ticker from takeUntil destroyer 3 component: ${ticker}`)
            );
    }

    ngOnDestroy(): void {
        this.unsubscriber$.next(true);
        this.unsubscriber$.complete();
    }
}
