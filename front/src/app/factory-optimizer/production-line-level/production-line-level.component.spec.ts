import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLineLevelComponent } from './production-line-level.component';

describe('ProductionLineLevelComponent', () => {
  let component: ProductionLineLevelComponent;
  let fixture: ComponentFixture<ProductionLineLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionLineLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionLineLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
