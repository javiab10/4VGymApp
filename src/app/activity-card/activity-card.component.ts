import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'] // Corregido: styleUrl -> styleUrls
})
export class ActivityCardComponent {
  @Input() activity: any; // Recibe el objeto `activity` desde el padre
  @Output() edit = new EventEmitter<void>(); // Emite un evento para editar
  @Output() delete = new EventEmitter<void>(); // Emite un evento para eliminar
}
