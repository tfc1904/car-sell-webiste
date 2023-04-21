import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainActionButtonsComponent } from './main-action-buttons.component';

describe('MainActionButtonsComponent', () => {
  let component: MainActionButtonsComponent;
  let fixture: ComponentFixture<MainActionButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainActionButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
