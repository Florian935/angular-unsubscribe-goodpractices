import { ObservableEmitterService } from './../../services/observable-emitter.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

@Component({
    selector: 'app-subsink-unsubscriber',
    templateUrl: './subsink-unsubscriber.component.html',
    styleUrls: ['./subsink-unsubscriber.component.scss']
})
export class SubsinkUnsubscriberComponent implements OnInit, OnDestroy {
    private subscriptions: SubSink = new SubSink();


    constructor(private _observableEmitterService: ObservableEmitterService) { }

    ngOnInit(): void {
        // We add all our subscriptions, we avoid to write some pipe and operators.
        this.subscriptions.add(
            this._observableEmitterService.sourceEmitter$.subscribe((ticker: number) =>
                    console.log(`Subscription 1: ${ticker}`)),
            this._observableEmitterService.sourceEmitter$.subscribe((ticker: number) =>
                console.log(`Subscription 2: ${ticker}`))
        );
    }

    ngOnDestroy(): void {
        // We unsubscribe to all our subscriptions in one line
        this.subscriptions.unsubscribe();
    }
}
