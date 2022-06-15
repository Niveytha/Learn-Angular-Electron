import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSimulationComponent } from './alert-simulation.component';

describe('AlertSimulationComponent', () => {
  let component: AlertSimulationComponent;
  let fixture: ComponentFixture<AlertSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertSimulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
