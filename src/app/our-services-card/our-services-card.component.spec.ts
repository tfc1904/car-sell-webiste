import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesCardComponent } from './our-services-card.component';

describe('OurServicesCardComponent', () => {
  let component: OurServicesCardComponent;
  let fixture: ComponentFixture<OurServicesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurServicesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurServicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
