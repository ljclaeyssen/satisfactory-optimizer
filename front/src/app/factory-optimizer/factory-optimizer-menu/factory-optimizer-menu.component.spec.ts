import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryOptimizerMenuComponent } from './factory-optimizer-menu.component';

describe('FactoryOptimizerMenuComponent', () => {
  let component: FactoryOptimizerMenuComponent;
  let fixture: ComponentFixture<FactoryOptimizerMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryOptimizerMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryOptimizerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
