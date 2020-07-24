import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryOptimizerControlsComponent } from './factory-optimizer-controls.component';

describe('FactoryOptimizerControlsComponent', () => {
  let component: FactoryOptimizerControlsComponent;
  let fixture: ComponentFixture<FactoryOptimizerControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryOptimizerControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryOptimizerControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
