import { ObservableEmitterService } from './../../services/observable-emitter.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-take-until-subscription',
    templateUrl: './take-until-subscription.component.html',
    styleUrls: ['./take-until-subscription.component.scss']
})
export class TakeUntilSubscriptionComponent implements OnInit, OnDestroy {
    private subscription1?: Subscription;
    private subscription2?: Subscription;
    private subscription3?: Subscription;
    private subscriptions = new Subscription();

    constructor(private _observableEmitterService: ObservableEmitterService) { }

    ngOnInit(): void {
        this.subscription1 =
            this._observableEmitterService.sourceEmitter$.subscribe( ( ticker: number ) =>
                console.log(`Ticker from takeUntil subscription 1 component: ${ticker}`)
        );

        this.subscription2 =
            this._observableEmitterService.sourceEmitter$.subscribe( ( ticker: number ) =>
                console.log(`Ticker from takeUntil subscription 2 component: ${ticker}`)
        );

        this.subscription3 =
            this._observableEmitterService.sourceEmitter$.subscribe( ( ticker: number ) =>
                console.log(`Ticker from takeUntil subscription 3 component: ${ticker}`)
        );

        this.addSubscriptions(this.subscription1, this.subscription2, this.subscription3);
    }

    private addSubscriptions(...subscriptions: Subscription[]): void {
        subscriptions.forEach( ( subscription: Subscription ) =>
            this.subscriptions.add(subscription)
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
