import { Component } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { FechaComponent } from "../activitiesUtils/fecha/fecha.component";
import { FormsModule } from '@angular/forms';
import { ActivityCardComponent } from "../activitiesUtils/activity-card/activity-card.component";
import { ModalAddActivityComponent } from "../activitiesUtils/modal-add-activity/modal-add-activity.component";
 import { MatDatepickerModule } from '@angular/material/datepicker';
 import { MatNativeDateModule } from '@angular/material/core';
 import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-activities',
  imports: [CommonModule, FechaComponent, FormsModule, ActivityCardComponent, ModalAddActivityComponent, MatDatepickerModule, MatNativeDateModule, MatInputModule],
  standalone: true,
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {

  date: any = new Date();

  startingTime: string = '';
  endingTime: string = '';

  ngOnInit(){
    
  }
   
  updateDate(newDate: any) {
    this.date = newDate;
  }

  onTimesRecived(times: {startingTime: string, endingTime: string}) {
    this.startingTime = times.startingTime;
    this.endingTime = times.endingTime;
  }
}
