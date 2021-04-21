import { TestBed } from '@angular/core/testing';

import { ObservableEmitterService } from './observable-emitter.service';

describe('ObservableEmitterService', () => {
  let service: ObservableEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
