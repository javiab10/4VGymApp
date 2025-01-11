import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './activity-card.component';
import { NgModule } from '@angular/core';
describe('ActivityCardComponent', () => {
  let component: ActivityCardComponent;
  let fixture: ComponentFixture<ActivityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityCardComponent, CommonModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
