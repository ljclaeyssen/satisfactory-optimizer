import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentElementComponent } from './component-element.component';

describe('ComponentElementComponent', () => {
  let component: ComponentElementComponent;
  let fixture: ComponentFixture<ComponentElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
