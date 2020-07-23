import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionAdminComponent } from './production-admin.component';

describe('ProductionAdminComponent', () => {
  let component: ProductionAdminComponent;
  let fixture: ComponentFixture<ProductionAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
