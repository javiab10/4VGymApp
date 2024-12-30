import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private activities = [
    { id: 1, type: 'Spinning', monitors: [{ name: 'Miguel' }] },
    { id: 2, type: 'BodyPump', monitors: [{ name: 'Lucía' }, { name: 'Carlos' }] },
    { id: 3, type: 'Libre', monitors: [] },
  ];

  getActivities() {
    return this.activities;
  }

  addActivity(activity: any) {
    this.activities.push(activity);
  }

  updateActivity(activity: any) {
    const index = this.activities.findIndex((a) => a.id === activity.id);
    if (index !== -1) this.activities[index] = activity;
  }

  deleteActivity(id: number) {
    this.activities = this.activities.filter((a) => a.id !== id);
  }
}
