import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelAdderComponent } from './level-adder.component';

describe('LevelAdderComponent', () => {
  let component: LevelAdderComponent;
  let fixture: ComponentFixture<LevelAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
