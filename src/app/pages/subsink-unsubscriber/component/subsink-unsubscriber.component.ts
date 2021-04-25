import { UnsubscribeOnDestroyAdapter } from './unsubscribe-on-destroy-adapter';
import { ObservableEmitterService } from './../../services/observable-emitter.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-subsink-unsubscriber',
    templateUrl: './subsink-unsubscriber.component.html',
    styleUrls: ['./subsink-unsubscriber.component.scss']
})
export class SubsinkUnsubscriberComponent extends UnsubscribeOnDestroyAdapter implements OnInit {


    constructor(private _observableEmitterService: ObservableEmitterService) {
        super();
    }

    ngOnInit(): void {
        // We add all our subscriptions in unsubscribe adapter, we avoid to write some pipe and operators.
        // This allow to externalize the unsubscription in the component
        this.subscriptions.add(
            this._observableEmitterService.sourceEmitter$.subscribe((ticker: number) =>
                    console.log(`Subscription 1: ${ticker}`)),
            this._observableEmitterService.sourceEmitter$.subscribe((ticker: number) =>
                console.log(`Subscription 2: ${ticker}`))
        );
    }
}
