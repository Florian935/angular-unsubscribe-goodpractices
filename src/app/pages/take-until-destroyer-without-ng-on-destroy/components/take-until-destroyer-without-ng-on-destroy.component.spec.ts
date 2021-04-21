import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilDestroyerWithoutNgOnDestroyComponent } from './take-until-destroyer-without-ng-on-destroy.component';

describe('TakeUntilDestroyerWithoutNgOnDestroyComponent', () => {
  let component: TakeUntilDestroyerWithoutNgOnDestroyComponent;
  let fixture: ComponentFixture<TakeUntilDestroyerWithoutNgOnDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeUntilDestroyerWithoutNgOnDestroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeUntilDestroyerWithoutNgOnDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
