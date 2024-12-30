import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMonitorComponent } from './add-edit-monitor.component';

describe('AddEditMonitorComponent', () => {
  let component: AddEditMonitorComponent;
  let fixture: ComponentFixture<AddEditMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditMonitorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
