import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionListElementComponent } from './production-list-element.component';

describe('ProductionListElementComponent', () => {
  let component: ProductionListElementComponent;
  let fixture: ComponentFixture<ProductionListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
