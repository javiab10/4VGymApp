import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss'
})
export class ActivityCardComponent {
  @Input() activity: any; // Recibe el objeto `activity` desde el padre
  @Output() edit = new EventEmitter<void>(); // Emite un evento para editar
  @Output() delete = new EventEmitter<void>(); // Emite un evento para eliminar
}
