import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployComponent } from './add-employ.component';

describe('AddEmployComponent', () => {
  let component: AddEmployComponent;
  let fixture: ComponentFixture<AddEmployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
