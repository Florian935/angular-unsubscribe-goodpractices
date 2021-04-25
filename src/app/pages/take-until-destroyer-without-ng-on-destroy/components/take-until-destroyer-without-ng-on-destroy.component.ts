import { takeUntil } from 'rxjs/operators';
import { ObservableEmitterService } from './../../services/observable-emitter.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
    selector: 'app-take-until-destroyer-without-ng-on-destroy',
    templateUrl: './take-until-destroyer-without-ng-on-destroy.component.html',
    styleUrls: ['./take-until-destroyer-without-ng-on-destroy.component.scss']
})
export class TakeUntilDestroyerWithoutNgOnDestroyComponent implements OnInit {
    private subscription: Subscription = new Subscription();
    private unsubscriber$: Subject<boolean> = new Subject<boolean>();

    constructor(private _observableEmitterService: ObservableEmitterService) { }

    ngOnInit(): void {
        this.simulateAsyncHttpRequest();
    }

    private simulateAsyncHttpRequest(): void {
        setTimeout( () => {
            console.log('Simulated http request started !');

            this.subscription = this._observableEmitterService.sourceEmitter$
                .pipe(takeUntil(this.unsubscriber$))
                .subscribe( ( ticker: number ) => {
                    console.log(`Simulated response payload received: ${++ticker}`);
                    console.log(`===============> Subscription is open: ${!this.subscription.closed}`)
                    this.processDestroyer();
                    console.log(`===============> After call destroyer object to finish the subscription with the simulated http request ====> Subscription is open: ${!this.subscription.closed}`)
                }
            );
        }, 2000);
    }

    private processDestroyer(): void {
        this.unsubscriber$.next(true);
        this.unsubscriber$.complete();
    }
}
