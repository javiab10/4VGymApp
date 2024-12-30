import { Component } from '@angular/core';
import { AddEditMonitorComponent } from "../../add-edit-monitor/add-edit-monitor.component";

@Component({
  selector: 'app-monitors-page',
  standalone: true,
  imports: [AddEditMonitorComponent],
  templateUrl: './monitors-page.component.html',
  styleUrl: './monitors-page.component.scss'
})
export class MonitorsPageComponent {

}
