import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMessageserviceComponent } from './add-messageservice.component';

describe('AddMessageserviceComponent', () => {
  let component: AddMessageserviceComponent;
  let fixture: ComponentFixture<AddMessageserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMessageserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMessageserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
