import { Component } from '@angular/core';
import { ActivityCardComponent } from '../../activity-card/activity-card.component';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-activities-page',
  standalone: true,
  imports: [ActivityCardComponent],
  templateUrl: './activities-page.component.html',
  styleUrl: './activities-page.component.scss'
})
export class ActivitiesPageComponent {
  activities: any[] = []; // Lista de actividades

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit() {
    this.activities = this.activitiesService.getActivities(); // Obtén datos del servicio
  }

  editActivity(activity: any) {
    console.log('Editar actividad:', activity);
  }

  deleteActivity(activity: any) {
    console.log('Eliminar actividad:', activity);
  }

  addActivity() {
    console.log('Añadir nueva actividad');
  }
}
