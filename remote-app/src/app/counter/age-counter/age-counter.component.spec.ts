import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeCounterComponent } from './age-counter.component';

describe('AgeCounterComponent', () => {
  let component: AgeCounterComponent;
  let fixture: ComponentFixture<AgeCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
