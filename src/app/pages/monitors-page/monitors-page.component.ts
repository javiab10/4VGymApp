import { Component } from '@angular/core';
import { CarouselComponent } from "../../carousel/carousel.component";
import { AddEditMonitorComponent } from "../../add-edit-monitor/add-edit-monitor.component";

@Component({
  selector: 'app-monitors-page',
  standalone: true,
  imports: [CarouselComponent,AddEditMonitorComponent],
  templateUrl: './monitors-page.component.html',
  styleUrl: './monitors-page.component.scss'
})
export class MonitorsPageComponent {
  searchTerm: string = ''; 
  monitors: any[] = []; 
  filteredMonitors: any[] = []; 

  constructor() {
    this.monitors = [
      { id: 1, name: 'Miguel Goyena', email: 'miguel@example.com', phone: '123456789' },
      { id: 2, name: 'Lucía Rodríguez', email: 'lucia@example.com', phone: '987654321' },
      { id: 3, name: 'Joaquín Martínez', email: 'joaquin@example.com', phone: '555444333' },
    ];
    this.filteredMonitors = [...this.monitors]; 
  }

  searchMonitor() {
    this.filteredMonitors = this.monitors.filter((monitor) =>
      monitor.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addMonitor() {
    console.log('Añadir Monitor');
  }

  editMonitor(monitor: any) {
    console.log('Editar Monitor:', monitor);
  }

  deleteMonitor(monitor: any) {
    console.log('Eliminar Monitor:', monitor);
    this.monitors = this.monitors.filter((m) => m.id !== monitor.id);
    this.filteredMonitors = [...this.monitors];
  }
}
