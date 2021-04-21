import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilSubscriptionComponent } from './take-until-subscription.component';

describe('TakeUntilSubscriptionComponent', () => {
  let component: TakeUntilSubscriptionComponent;
  let fixture: ComponentFixture<TakeUntilSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeUntilSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeUntilSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
