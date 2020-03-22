import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeEventComponent } from './organize-event.component';

describe('OrganizeEventComponent', () => {
  let component: OrganizeEventComponent;
  let fixture: ComponentFixture<OrganizeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
